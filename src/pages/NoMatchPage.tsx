import { Navigate } from "react-router-dom";

type Props = {};

const NoMatchPage = (props: Props) => {
  return <Navigate replace to="/" />;
};

export default NoMatchPage;
