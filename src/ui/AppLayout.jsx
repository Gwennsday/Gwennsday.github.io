import { Outlet } from "react-router-dom";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Main className="my-4">
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default AppLayout;
