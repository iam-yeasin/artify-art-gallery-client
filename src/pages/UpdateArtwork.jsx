import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { useContext, useEffect, useState } from "react";

const UpdateArtwork = () => {
  // const loadData = useLoaderData();
  // const data = loadData.individualResult;
  const { user, loading } = useContext(AuthContext);
  const [artwork, setArtwork] = useState(null);
  const { id } = useParams();
  // console.log(data);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.accessToken) return;

    fetch(`http://localhost:3000/samples/${id}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setArtwork(data.individualResult);
      })
      .catch((err) => {
        console.log(err);
      });

    window.scrollTo(0, 0);
  }, [id, user]);

  if (loading) {
    return (
      <p className="text-center mt-10 text-lg font-semibold">
        Loading artwork...
      </p>
    );
  }

  if (!artwork) {
    return (
      <p className="text-center mt-10 text-red-500">
        Artwork not found or unauthorized access.
      </p>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title: e.target.title.value,
      category: e.target.category.value,
      image: e.target.image.value,
      description: e.target.description.value,
    };
    fetch(`http://localhost:3000/samples/${artwork._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${user.accessToken}`,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Successfully Updated!");
        navigate("/my-gallery");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-base-100 shadow-sm my-5 rounded-2xl">
      <h2 className="text-3xl font-bold mb-8 text-center italic">
        Update Your Artwork
      </h2>

      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label className="label font-medium italic mb-2">Artist Name:</label>

          <input
            type="name"
            defaultValue={artwork.artistName}
            readOnly
            className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-0 focus-visible:outline-none italic bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Email */}
        <div>
          <label className="label font-medium italic mb-2">Email:</label>

          <input
            type="email"
            defaultValue={artwork.created_by}
            readOnly
            className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-0 focus-visible:outline-none italic bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Title */}
        <div>
          <label className="label font-medium italic mb-2">Title:</label>

          <input
            type="text"
            name="title"
            defaultValue={artwork.title}
            placeholder="Enter artwork title"
            required
            className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-0 focus-visible:outline-none italic"
          />
        </div>

        {/* Category Dropdown */}
        <div>
          <label className="label font-medium italic mb-2">Category:</label>

          <select
            defaultValue={artwork.category}
            name="category"
            required
            className="select select-bordered w-full rounded-xl focus:outline-none focus:ring-0 focus-visible:outline-none italic"
          >
            <option value="" disabled>
              Select category
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

        {/* Image */}
        <div>
          <label className="label font-medium italic mb-2">Image URL:</label>

          <input
            type="url"
            name="image"
            defaultValue={artwork.image}
            placeholder="https://example.com/image.jpg"
            required
            className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-0 focus-visible:outline-none italic"
          />
        </div>

        <div>
          <label className="label font-medium italic mb-2">Description:</label>

          <textarea
            name="description"
            rows="5"
            defaultValue={artwork.description}
            placeholder="Write artwork description"
            required
            className="textarea textarea-bordered w-full rounded-2xl focus:outline-none focus:ring-0 focus-visible:outline-none italic"
          ></textarea>
        </div>

        {/* Button */}
        <button type="submit" className="btn btn-neutral w-full rounded-full">
          Update Artwork
        </button>
      </form>
    </div>
  );
};

export default UpdateArtwork;
