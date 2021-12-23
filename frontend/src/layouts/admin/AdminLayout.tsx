import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function AdminLayout(props: any) {
  return (
    <div>
      <div>Admin Layout</div>
      <Link to={"/admin"}>Admin</Link>
      <Link to={"/admin/dashboard"}>Dashboard</Link>
      <Outlet />
    </div>
  );
}
