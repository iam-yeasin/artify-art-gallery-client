// import artworksData from "../data/artWorks.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const FeaturedArtworks = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetch("https://artify-gallery-server-side.vercel.app/latest-data")
      .then((res) => res.json())
      .then((data) => setArtworks(data));
  }, []);

  return (
    <section className="my-16 px-4">
      <h2 className="text-3xl font-bold mb-10 w-11/12 mx-auto italic">
        Featured Artworks
      </h2>
      <Fade>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-11/12 mx-auto italic">
          {artworks.map((art) => (
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
      </Fade>
    </section>
  );
};

export default FeaturedArtworks;
