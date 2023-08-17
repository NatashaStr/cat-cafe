import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import { GlobalStyle } from "./styles";
import starList from "/src/mocks/starList";
import gallery from "/src/mocks/gallery";
import buyOptions from "/src/mocks/buy-options";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper stars={starList} slides={gallery} buyOptions={buyOptions} />;
    </>
  );
}
