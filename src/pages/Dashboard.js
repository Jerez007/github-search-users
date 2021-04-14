import React from "react";
import { Info, Repos, Search, Header } from "../components";
import loadingImage from "../images/preloader.gif";
import { GithubContext } from "../context/context";
import Card from "../components/Card";
const Dashboard = () => {
  const { isLoading } = React.useContext(GithubContext);

  if (isLoading) {
    return (
      <main>
        <Header />
        <img src={loadingImage} className="loading-img" alt="loading" />
      </main>
    );
  }

  return (
    <main>
      <div className="top-section">
        <Header></Header>
        <Card />
        <Info />
      </div>

      <div className="bottom-section">
        <Repos />
      </div>
    </main>
  );
};

export default Dashboard;
