import {
  Navigate,
  // useLoaderData,
  useLocation,
  useParams,
} from "react-router-dom";
// import artworksData from "../data/artWorks.json";
import { useContext, useEffect, useState } from "react";
import { PiBookmarkSimpleFill } from "react-icons/pi";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { Fade } from "react-awesome-reveal";

const ArtworkDetails = () => {
  const { user, loading } = useContext(AuthContext);
  const { id } = useParams();
  const [artwork, setArtwork] = useState(null);
  const [refetch, setRefetch] = useState(false);

  // const data = useLoaderData();
  // const artwork = data.individualResult;
  // console.log(artwork);
  // console.log(data);

  // const artwork = data.find((item) => item._id === id);
  const location = useLocation();
  useEffect(() => {
    if (!user) return;
    fetch(`https://artify-gallery-server-side.vercel.app/samples/${id}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`, //getIdToken()
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setArtwork(data.individualResult);
      });
    window.scrollTo(0, 0);
  }, [id, user, refetch]);

  const handleLikes = () => {
    // console.log("like button clicked");
    fetch(`https://artify-gallery-server-side.vercel.app/samples/${id}/like`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${user.accessToken}`, //addedLater
      },
    })
      .then((res) => res.json())
      .then(() => {
        // console.log(data);
        toast.success("Liked ❤️");
        setRefetch(!refetch);
        // setArtwork(data.individualResult);
      })
      .catch((err) => {
        // console.log(err);
        toast.error(err.message);
      });
  };

  const handleFavorites = () => {
    // console.log("button clicked");
    fetch(`https://artify-gallery-server-side.vercel.app/favorites`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${user.accessToken}`, //addedLater
      },
      body: JSON.stringify({ ...artwork, addToFavorites: user.email }),
    })
      .then((res) => res.json())
      .then(() => {
        // console.log(data);
        toast.success("Added To Favorite(s)");
        // setArtwork(data.individualResult);
      })
      .catch((err) => {
        // console.log(err);
        toast.error(err.message);
      });
  };

  if (loading) return <div>Loading...</div>;

  if (!user) {
    return <Navigate state={location?.pathname} to="/auth/login" />;
  }

  if (!artwork) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Loading artwork...</h2>
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
      <Fade>
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

            {/* <p className="text-gray-700 mb-6 leading-relaxed max-w-prose text-justify">
            {artwork.description || "No description available."}
          </p> */}

            <div className="h-[180px] overflow-y-auto mb-6">
              <p className="leading-relaxed max-w-prose text-justify pr-2">
                {artwork.description || "No description available."}
              </p>
            </div>

            <div className="w-50 h-[1px] bg-gray-300/40 my-4"></div>

            <h3 className="text-3xl font-semibold mb-3">Details</h3>

            <div className="flex items-center gap-2">
              <figure className="aspect-auto overflow-hidden cursor-pointer rounded-full">
                <img
                  src={artwork.displayPhoto || "/image-not-found.jpg"}
                  alt={artwork.name}
                  className="w-15 h-15 object-cover transition-transform duration-300 hover:scale-110"
                />
              </figure>

              <p className="font-semibold">{artwork.artistName}</p>
            </div>
            <p className="my-4">
              {" "}
              <span className="font-semibold">✨ Total Artworks:</span>
              {/* {totalArtwork} */}
            </p>
            <p className="my-4">
              {" "}
              <span className="font-semibold">🎨 Category:</span>{" "}
              {artwork.category}
            </p>

            <p className="mb-4 flex items-center justify-start gap-2">
              <span className="text-3xl text-rose-800">♥</span>{" "}
              <span className="font-semibold">Likes:</span> {artwork.likes}
            </p>

            <div className="flex gap-48 mr-8">
              <button
                onClick={handleLikes}
                className="bg-black text-white px-6 py-2 rounded cursor-pointer hover:bg-stone-900 transition mb-5 flex items-center justify-center gap-2"
              >
                Appreciate{" "}
                <span
                  onClick={handleLikes}
                  className="text-3xl hover:text-rose-800 cursor-pointer"
                >
                  {/* ♡ */}♥
                </span>
              </button>

              <button
                onClick={handleFavorites}
                className="bg-black text-white px-6 py-2 rounded cursor-pointer hover:bg-stone-900 transition mb-5 flex items-center justify-center gap-2"
              >
                Add to Favorites{" "}
                <PiBookmarkSimpleFill
                  onClick={handleFavorites}
                  className="text-2xl hover:text-rose-800 cursor-pointer"
                />
              </button>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default ArtworkDetails;
