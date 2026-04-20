import { createBrowserRouter } from "react-router";
import MinLayout from "../layouts/MinLayout";
import HomePage from "./../pages/HomePage";
import ExploreArtworks from "../pages/ExploreArtworks";
import AddArtwork from "../pages/AddArtwork";
import MyGallery from "../pages/MyGallery";
import MyFavorites from "../pages/MyFavorites";
import Login from "./../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import ArtworkDetails from "../pages/ArtworkDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MinLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/explore",
        element: <ExploreArtworks />,
      },
      {
        path: "/artwork/:id",
        element: <ArtworkDetails />,
      },
      {
        path: "/add-artwork", //private
        element: <AddArtwork />,
      },
      {
        path: "/my-gallery", //private
        element: <MyGallery />,
      },
      {
        path: "/my-favorites", //private
        element: <MyFavorites />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
