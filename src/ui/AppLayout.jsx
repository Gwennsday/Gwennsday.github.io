import { Outlet } from "react-router-dom";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "../components/Hero";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Hero />
      <Main className="my-4">
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default AppLayout;
