import SETTINGS from "@constants/settings";
import { Fade, Paper } from "@mui/material";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import EmotesButton from "@ui/EmotesButton";
import FakeLoader from "@ui/FakeLoader";
import Footer from "@ui/Footer";
import Header from "@ui/Header";
import Main from "@ui/Main";
import ScrollToHash from "@ui/ScrollToHash";
import ScrollToTop from "@ui/ScrollToTop";
import { useEffect, useState } from "react";
import SupportButton from "./SupportButton";

const LayoutSite = () => {
  const [fakeLoader, setFakeLoader] = useState(
    SETTINGS.isUnderConstruction ? false : true,
  );

  useEffect(() => {
    setTimeout(() => {
      setFakeLoader(false);
    }, 10000);
  }, []);

  if (fakeLoader) return <FakeLoader />;

  return (
    <Fade in={fakeLoader === false} timeout={1000}>
      <Paper className="page flex grow flex-col">
        <ScrollToTop />
        <ScrollToHash />
        {!SETTINGS.isUnderConstruction && <Header />}
        <Main>
          <Outlet />
        </Main>
        <Footer />
        {!SETTINGS.isUnderConstruction && <EmotesButton />}
        <TanStackRouterDevtools />
      </Paper>
    </Fade>
  );
};

export default LayoutSite;
