import artworksData from "../data/artWorks.json";
import { Link } from "react-router-dom";

const FeaturedArtworks = () => {
  const artworks = artworksData.slice(0, 6);

  return (
    <section className="my-16 px-4">
      <h2 className="text-3xl font-bold mb-10 w-11/12 mx-auto italic">
        Featured Artworks
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-11/12 mx-auto italic">
        {artworks.map((art) => (
          <div
            key={art._id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={art.image}
              alt={art.title}
              className="w-full aspect-[5/6] object-cover"
            />

            <div className="p-5">
              <div className="flex justify-between items-center mt-3">
                <h3 className="text-lg font-semibold">{art.title}</h3>

                <p className="text-sm text-gray-500">By {art.artistName}</p>
              </div>

              <div className="flex justify-between items-center mt-3">
                <p className="text-sm mt-1">{art.category}</p>
                <p>
                  {art.likes} <span className="text-3xl hover:text-rose-800 cursor-pointer">♡</span>
                </p>
              </div>

              <div>
                <Link
                  to={`/artwork/${art._id}`}
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

export default FeaturedArtworks;
