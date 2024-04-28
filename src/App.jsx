import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import UnderConstruction from "./pages/UnderConstruction";

const routes = createBrowserRouter([
  {
    element: <AppLayout />,
    
    children: [
      {
        path: "/",
        element: <UnderConstruction />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
