import React from "react";
import About from "/src/components/blocks/about/about";
import StarsList from "/src/components/blocks/star-list/star-list";

function MainPage({ stars }) {
  return (
    <>
      <About />
      <StarsList stars={stars} />
    </>
  );
}

export default MainPage;
