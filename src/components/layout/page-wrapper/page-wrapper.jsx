import React from "react";
import Header from "../header/header";
import MainPage from "/src/components/pages/main-page/main-page";
import Footer from "../footer/footer";
import { Main } from "./styles";
import BuyPage from "../../pages/buy-page/buy-page";

function PageWrapper({ ...prop }) {
  return (
    <>
      <Header />
      <BuyPage {...prop} />
      <Footer />
    </>
  );
}

export default PageWrapper;
