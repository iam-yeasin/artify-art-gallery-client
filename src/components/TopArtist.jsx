import React from "react";
import artworksData from "../data/artWorks.json";

const TopArtist = () => {
  const getTopArtists = (artworks) => {
    const artistMap = {};

    const now = new Date();
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(now.getDate() - 7);

    const recentArtworks = artworks.filter((art) => {
      const artDate = new Date(art.date);
      return !isNaN(artDate) && artDate >= oneWeekAgo && artDate <= now;
    });

    recentArtworks.forEach((art) => {
      if (!artistMap[art.artistName]) {
        artistMap[art.artistName] = {
          name: art.artistName,
          dp: art.displayPhoto,
          totalLikes: 0,
        };
      }

      artistMap[art.artistName].totalLikes += art.likes;
    });

    if (recentArtworks.length === 0) {
      return [];
    }

    return Object.values(artistMap)
      .sort((a, b) => b.totalLikes - a.totalLikes)
      .slice(0, 5);
  };

  const topArtists = getTopArtists(artworksData);

  return (
    <section className="w-11/12 mx-auto py-12">
      <h2 className="text-2xl md:text-3xl font-bold italic mb-8">
        Top Artists of the Week
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {topArtists.length === 0 ? (
          <div className="col-span-full flex justify-center">
            <div className="card bg-base-200 w-96 shadow-sm">
              <div className="card-body text-center italic text-rose-500">
                <p> No top artists this week yet...</p>
              </div>
            </div>
          </div>
        ) : (
          topArtists.map((artist, index) => (
            <div key={index} className="card bg-base-100 shadow-sm">
              <figure className="aspect-square overflow-hidden cursor-pointer">
                <img
                  src={artist.dp  || "/image-not-found.jpg"}
                  alt={artist.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </figure>

              <div className="text-center mt-3 italic">
                <h3 className="text-lg font-semibold mx-2 truncate">
                  {artist.name}
                </h3>

                <p className="text-sm text-gray-500 flex items-center justify-center text-rose-700 font-semibold">
                  Total: {artist.totalLikes} likes
                  <span className="text-3xl text-rose-800 ml-1">♥</span>
                </p>
              </div>
            </div>

            //   <div
            //     key={index}
            //     className="flex items-center gap-4 bg-base-100 px-5 py-4 rounded-xl shadow-sm"
            //   >

            //     <img
            //       src={artist.dp}
            //       alt={artist.name}
            //       className="w-12 h-12 rounded-full object-cover"
            //     />

            //     <div>
            //       <h4 className="font-semibold">{artist.name}</h4>
            //       <p className="text-sm text-gray-500">
            //         ❤️ {artist.totalLikes} likes
            //       </p>

            //       {index === 0 && (
            //         <span className="text-xs text-yellow-500">★ Top Artist</span>
            //       )}
            //     </div>
            //   </div>
          ))
        )}
      </div>
    </section>
  );
};

export default TopArtist;
