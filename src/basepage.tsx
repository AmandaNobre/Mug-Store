import React from "react";

const Home = React.lazy(() => import("./pages/Home"));

const basepage = [{ path: "/", exact: true, name: "Home", component: Home }];

export default basepage;
