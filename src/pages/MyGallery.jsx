import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
// import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import { Fade } from "react-awesome-reveal";
import toast from "react-hot-toast";

const MyGallery = () => {
  const { user, loading } = useContext(AuthContext);
  // const loadedData = useLoaderData();
  const [arts, setArts] = useState([]);

  // console.log(arts);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://artify-gallery-server-side.vercel.app/my-artworks?email=${user.email}`,
        {
          headers: {
            authorization: `Bearer ${user.accessToken}`, //getIdToken()
          },
        },
      )
        .then((res) => res.json())
        .then((data) => {
          setArts(data);
        })
        .catch((err) => {
          // console.log(err);
          toast.error(err.message);
        });
    }
  }, [user]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#393",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://artify-gallery-server-side.vercel.app/samples/${_id}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${user.accessToken}`, // ✅ Add the token
          },
        })
          .then((res) => res.json())
          .then(() => {
            // console.log(data);

            const remaining = arts.filter((art) => art._id !== _id);
            setArts(remaining);

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((err) => {
            // console.log(err);
            toast.error(err.message);
          });
      }
    });
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );

  return (
    <section className="my-16 px-4">
      <h2 className="text-3xl font-bold mb-10 w-11/12 mx-auto italic">
        My Gallery
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

                <div className="flex gap-3 mt-5 text-center">
                  {/* Update Button */}
                  <Link
                    to={`/update-artwork-details/${art._id}`}
                    className="w-full bg-black text-white py-2 rounded hover:bg-stone-800 transition cursor-pointer"
                  >
                    Update
                  </Link>

                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(art._id)}
                    className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
};

export default MyGallery;
