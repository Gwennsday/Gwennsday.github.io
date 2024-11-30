import { Fade, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Hero from "../components/Hero";
import FakeLoadingPage from "../pages/FakeLoadingPage";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const AppLayout = () => {
  // const [fakeLoader, setFakeLoader] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => setFakeLoader(false), 10000);
  // }, []);

  // if (fakeLoader) return <FakeLoadingPage />;

  return (
    // <Fade in={fakeLoader === false} timeout={1000}>
    <Paper className="flex grow flex-col">
      <Header />
      <Hero />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Paper>
    // </Fade>
  );
};

export default AppLayout;
