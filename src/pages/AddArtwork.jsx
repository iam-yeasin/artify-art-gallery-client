import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const AddArtwork = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title: e.target.title.value,
      category: e.target.category.value,
      image: e.target.image.value,
      description: e.target.description.value,
      date: new Date(),
      likes: 50,
      artistName: user.displayName,
      displayPhoto: user.photoURL,
      created_by: user.email,
    };
    fetch("http://localhost:3000/samples", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${user.accessToken}`,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Your Artwork Uploaded!");
        navigate("/my-gallery");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-base-100 shadow-sm my-5 rounded-2xl">
      <h2 className="text-3xl font-bold mb-8 text-center italic">
        Add Your Artwork
      </h2>

      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* Name*/}
        <div>
          <label className="label font-medium italic mb-2">Artist Name:</label>

          <input
            type="name"
            value={user?.displayName || "Your Name"}
            readOnly
            className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-0 focus-visible:outline-none italic dark:bg-gray-700 cursor-not-allowed"
          />
        </div>

        {/* Email */}
        <div>
          <label className="label font-medium italic mb-2">Email:</label>

          <input
            type="email"
            value={user?.email || "Your Email"}
            readOnly
            className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-0 focus-visible:outline-none italic dark:bg-gray-700 cursor-not-allowed"
          />
        </div>

        {/* title */}
        <div>
          <label className="label font-medium italic mb-2">Title:</label>

          <input
            type="text"
            name="title"
            placeholder="Enter artwork title"
            required
            className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-0 focus-visible:outline-none italic"
          />
        </div>

        {/* Category dropdown */}
        <div>
          <label className="label font-medium italic mb-2">Category:</label>

          <select
            defaultValue=""
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
            placeholder="https://example.com/image.jpg"
            required
            className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-0 focus-visible:outline-none italic"
          />
        </div>

        {/* description */}
        <div>
          <label className="label font-medium italic mb-2">Description:</label>

          <textarea
            name="description"
            rows="5"
            placeholder="Write artwork description"
            required
            className="textarea textarea-bordered w-full rounded-2xl focus:outline-none focus:ring-0 focus-visible:outline-none italic"
          ></textarea>
        </div>

        {/* button */}
        <button type="submit" className="btn btn-neutral w-full rounded-full">
          Add Artwork
        </button>
      </form>
    </div>
  );
};

export default AddArtwork;
