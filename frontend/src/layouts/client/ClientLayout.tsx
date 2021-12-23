import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function ClientLayout(props: any) {
  return (
    <div>
      <div>Layout</div>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Outlet />
    </div>
  );
}
