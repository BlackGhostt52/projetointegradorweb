import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { routes } from "./pages/routes/routes";
import "./styles/index.css"

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | FirstTech" />
      <RouterProvider router={routes} />
    </HelmetProvider>
  )
}
