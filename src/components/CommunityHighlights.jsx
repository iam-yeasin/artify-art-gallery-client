import artworksData from "../data/artWorks.json";

const CommunityHighlights = () => {
  const artworks = artworksData.slice(0, 4);

  return (
    <section className="w-11/12 mx-auto my-16">
      <h2 className="text-3xl font-bold italic mb-10">Community Highlights</h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="grid grid-cols-2 gap-4 bg-base-300 p-5 rounded-xl">
          {artworks.map((art) => (
            <img
              key={art._id}
              src={art.image}
              alt={art.title}
              className="w-full h-85 object-cover rounded-xl hover:scale-105 transition duration-300 cursor-pointer"
            />
          ))}
        </div>

        <div className="space-y-6 italic bg-base-300 py-18 px-5 rounded-xl">
          <div className="bg-base-200 p-5 rounded-xl shadow-sm">
            <p>“This platform completely changed how I showcase my art!”</p>
            <h4 className="mt-3 font-semibold">— Sarah K.</h4>
          </div>

          <div className="bg-base-200 p-5 rounded-xl shadow-sm">
            <p>
              “A perfect place to connect with creative minds and grow
              together.”
            </p>
            <h4 className="mt-3 font-semibold">— Alex M.</h4>
          </div>

          <div className="bg-base-200 p-5 rounded-xl shadow-sm">
            <p>
              “Every visit gives me new ideas and motivation to keep
              creating.”
            </p>
            <h4 className="mt-3 font-semibold">— Philip R.</h4>
          </div>

          <div className="bg-base-200 p-5 rounded-xl shadow-sm">
            <p>“Amazing community and inspiring artworks everywhere.”</p>
            <h4 className="mt-3 font-semibold">— Glann A.</h4>
          </div>

          <div className="bg-base-200 p-5 rounded-xl shadow-sm">
            <p>“I discovered so many talented artists here!”</p>
            <h4 className="mt-3 font-semibold">— John D.</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityHighlights;
