import { CustomRoute } from "models/bases";
import ClientLayout from "layouts/client/ClientLayout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { adminRoutes, clientRoutes } from "routes";
import AdminLayout from "layouts/admin/AdminLayout";

const clientChildRoutes = (
  routes: Array<CustomRoute>,
  Layout: React.FC<any>
): any => {
  return routes.map(({ children, path, component: Component, name }) => {
    if (children) {
      return (
        <Route path={path} element={<Layout />} key={name}>
          {children.map(({ component: Component, path }) => (
            <Route path={path} element={<Component />} key={name} />
          ))}
        </Route>
      );
    }

    return (
      <Route path={path} element={<Layout />} key={name}>
        <Route index element={<Component />} />
      </Route>
    );
  });
};

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {clientChildRoutes(clientRoutes, ClientLayout)}
        {clientChildRoutes(adminRoutes, AdminLayout)}
        <Route path="*" element={<>Not Match</>} />
      </Routes>
    </BrowserRouter>
  );
};
