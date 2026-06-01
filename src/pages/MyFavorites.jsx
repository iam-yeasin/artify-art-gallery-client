import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
// import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import { Fade } from "react-awesome-reveal";

const MyFavorites = () => {
  const { user, loading } = useContext(AuthContext);
  // const loadedData = useLoaderData();
  const [arts, setArts] = useState([]);

  console.log(arts);
  // console.log(user);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/my-favorites?email=${user.email}`, {
        headers: {
          authorization: `Bearer ${user.accessToken}`, //getIdToken()
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setArts(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user]);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <section className="my-16 px-4">
      <h2 className="text-3xl font-bold mb-10 w-11/12 mx-auto italic">
        My Favorite(s)
      </h2>
      <Fade>
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {arts.map((art) => (
            <div
              key={art._id}
              className="dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
            >
              {/* Artwork image */}
              <img
                src={art.image || "https://i.ibb.co/4pDNDk1/art1.jpg"}
                alt={art.title}
                className="w-full aspect-[5/6] object-cover"
              />

              <div className="p-5 italic">
                {/* Title */}
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">{art.title}</h3>

                  <p className="text-sm text-gray-500">{art.artistName}</p>
                </div>

                {/* Category */}
                <div className="flex justify-between items-center mt-3">
                  <p className="text-sm">{art.category}</p>

                  <p>
                    {art.likes}{" "}
                    <span className="text-2xl text-rose-700">♡</span>
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

export default MyFavorites;
