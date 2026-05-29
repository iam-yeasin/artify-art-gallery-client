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
import PlainLayout from "../layouts/PlainLayout";
import PreventUrlHit from "./../components/PreventUrlHit";
import UpdateArtwork from "../pages/UpdateArtwork";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MinLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: () => fetch("http://localhost:3000/samples"),
      },
      {
        path: "/explore",
        element: <ExploreArtworks />,
        loader: () => fetch("http://localhost:3000/samples"),
      },
      {
        path: "/artwork-details/:id",
        element: <ArtworkDetails />,
      },
      {
        path: "/add-artwork", //private
        element: <AddArtwork />,
      },
      {
        path: "/my-gallery/", //private
        element: <MyGallery />,
      },
      {
        path: "/update-artwork-details/:id", //private
        element: <UpdateArtwork />,
        // loader: ({ params }) =>
        //   fetch(`http://localhost:3000/samples/${params.id}`),
      },
      {
        path: "/my-favorites", //private
        element: <MyFavorites />,
      },
      {
        path: "/login",
        element: (
          <PreventUrlHit>
            <Login />
          </PreventUrlHit>
        ),
      },
      {
        path: "/register",
        element: (
          <PreventUrlHit>
            <Register />
          </PreventUrlHit>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <PlainLayout />,
    children: [{ path: "*", element: <NotFound /> }],
  },
]);

export default router;
