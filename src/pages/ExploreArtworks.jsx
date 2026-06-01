import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
// import artworksData from "../data/artWorks.json";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ExploreArtworks = () => {
  //   const artworks = artworksData.slice(0, 6);
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  console.log(data);
  const [searchData, setSearchData] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;
    console.log(search_text);
    setLoading(true);

    fetch(
      `http://localhost:3000/search?search=${encodeURIComponent(search_text)}`,
      {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSearchData(data);
        setLoading(false);
      });
  };

  const handleFilter = (e) => {
    const filter_cat = e.target.value;
    console.log(filter_cat);
    setLoading(true);

    fetch(
      `http://localhost:3000/category?category=${encodeURIComponent(filter_cat)}`,
      {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSearchData(data);
        setLoading(false);
      });
  };

  return (
    <section className="my-16 px-4">
      <div className="w-11/12 mx-auto mb-10 grid grid-cols-3 items-center">
        <h2 className="text-3xl font-bold italic">Explore Artworks</h2>

        {/* search */}
        <form
          onSubmit={handleSearch}
          className="flex items-center justify-center gap-2"
        >
          <label className="input focus:outline-none focus:ring-0 focus-within:outline-none focus-within:ring-0">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>

            <input
              name="search"
              type="search"
              placeholder="Search"
              className="focus:outline-none focus:ring-0"
            />
          </label>

          <button className="btn btn-neutral">
            {loading ? "Searching..." : "Search"}
          </button>
        </form>

        {/* filter */}

        <div className="flex justify-end items-center gap-2">
          <select
            onChange={handleFilter}
            defaultValue=""
            name="category"
            required
            className="select select-bordered rounded-xl italic cursor-pointer focus:outline-none focus:ring-0"
          >
            <option value="" disabled>
              Filter Artwork
            </option>

            <option value="Painting Art">Painting Art</option>
            <option value="Digital Art">Digital Art</option>
            <option value="Photography Art">Photography Art</option>
            <option value="Digital Collage Art">Digital Collage Art</option>
            <option value="Abstract Art">Abstract Art</option>
            <option value="Modern Art">Modern Art</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-11/12 mx-auto italic">
        {searchData.map((art) => (
          <div key={art._id} className="dark:bg-gray-800 rounded-xl">
            <img
              src={art.image}
              alt={art.title}
              className="w-full aspect-[5/6] object-cover cursor-pointer transition-transform duration-300 hover:scale-110 hover:rounded-xl"
            />

            <div className="p-5">
              <div className="flex justify-between items-center mt-3">
                <h3 className="text-lg font-semibold">{art.title}</h3>

                <p className="text-sm text-gray-500">By {art.artistName}</p>
              </div>

              <div className="flex justify-between items-center mt-3">
                <p className="text-sm mt-1">{art.category}</p>
                <p>
                  {art.likes}{" "}
                  <span className="text-3xl hover:text-rose-800 cursor-pointer">
                    ♡
                  </span>
                </p>
              </div>

              <div>
                <Link
                  to={`/artwork-details/${art._id}`}
                  className="block text-center mt-4 bg-black text-white py-2 rounded hover:bg-stone-800 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreArtworks;
