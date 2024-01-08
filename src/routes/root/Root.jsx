import Navbar from "../../components/navbar/Navbar";
import "../../App.css";
import Home from "../../components/home/Home";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Root;
