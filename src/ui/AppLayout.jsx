import { Outlet } from "react-router-dom";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "../components/Hero";
import { useEffect, useState } from "react";
import FakeLoadingPage from "../pages/FakeLoadingPage";
import { Fade, Grid, Grow, Paper } from "@mui/material";

const AppLayout = () => {
  const [fakeLoader, setFakeLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => setFakeLoader(false), 10000);
  }, []);

  if (fakeLoader) return <FakeLoadingPage />;

  return (
    <Fade in={fakeLoader === false} timeout={1000}>
      <Paper className="flex flex-col">
        <Header />
        <Hero />
        <Main className="bg-gBlue">
          <Outlet />
        </Main>
        <Footer />
      </Paper>
    </Fade>
  );
};

export default AppLayout;
