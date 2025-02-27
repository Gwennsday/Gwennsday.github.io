import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
// import UnderConstruction from "./pages/UnderConstruction";
import Index from "./pages/Index";

const routes = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        // element: <UnderConstruction />,
        element: <Index />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
