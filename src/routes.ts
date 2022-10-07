import { HomePage, NoMatchPage } from "./pages";

type Route = {
  path: string;
  element: React.ComponentType;
};

const routes: Route[] = [
  {
    path: "/",
    element: HomePage,
  },
  {
    path: "*",
    element: NoMatchPage,
  },
];

export default routes;
