import React from "react";
import HomePage from "./components/Home-Page/HomePage";
import HomePageUser from "./components/Home-Page-User/HomePageUser";
import HomePageAdmin from "./components/Home-Page-Admin/HomePageAdmin";
import OwnerPage from "./components/Owner-Page/OwnerPage";

const App = () => {
  return (
    <>
      <HomePage />
      <HomePageUser />
      <HomePageAdmin />
      <OwnerPage />
    </>
  );
};

export default App;