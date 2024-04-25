import { Outlet } from "react-router-dom";
import Main from "./Main";

const AppLayout = () => {
  return (
    <>
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default AppLayout;
