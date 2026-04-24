import { useParams } from "react-router-dom";
import artworksData from "../data/artWorks.json";
import { useEffect } from "react";

const ArtworkDetails = () => {
  const { id } = useParams();

  const artwork = artworksData.find((item) => item._id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!artwork) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Artwork Not Found</h2>
      </div>
    );
  }

  return (
    <section className="py-12 flex justify-center px-4">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center"> */}
      {/* Image */}
      {/* <div>
          <img
            src={artwork.image}
            alt={artwork.title}
            className="w-full h-auto object-cover rounded-xl shadow-md"
          />
        </div> */}

      <div className="bg-base-100 shadow-sm rounded-xl flex flex-col lg:flex-row items-start gap-10 max-w-5xl w-full">
        <figure className="w-full lg:w-auto shrink-0">
          <img
            src={artwork.image}
            alt={artwork.title}
            className="w-full lg:w-[350px] h-[400px] sm:h-[500px] lg:h-[600px] object-cover rounded-xl shadow-md"
          />
        </figure>

        <div className="italic px-4 lg:px-0">
          <h1 className="text-3xl font-bold mb-3">{artwork.title}</h1>

          <p className="text-gray-700 mb-6 leading-relaxed max-w-prose text-justify">
            {artwork.description || "No description available."}
          </p>

          <div className="w-50 h-[1px] bg-gray-300/40 my-4"></div>

          <h3 className="text-3xl font-semibold mb-3">Details</h3>

          <div className="flex items-center gap-2">
            <div>
              <figure className="aspect-auto overflow-hidden cursor-pointer rounded-full">
                <img
                  src={artwork.displayPhoto || "/image-not-found.jpg"}
                  alt={artwork.name}
                  className="w-15 h-15 object-cover transition-transform duration-300 hover:scale-110"
                />
              </figure>
            </div>
            <p className="text-gray-600 font-semibold">{artwork.artistName}</p>
          </div>
          <p className="my-4">🎨 Category: {artwork.category}</p>

          <p className="mb-4 flex items-center justify-start gap-2">
            <span className="text-3xl text-rose-800">♥</span> Likes:{" "}
            {artwork.likes}
          </p>

          <button className="bg-black text-white px-6 py-2 rounded hover:bg-stone-900 transition mb-5 flex items-center justify-center gap-2">
            Appreciate{" "}
            <span className="text-3xl hover:text-rose-800 cursor-pointer">
              {/* ♡ */}♥
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ArtworkDetails;
