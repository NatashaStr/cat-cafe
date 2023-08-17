import React from "react";
import Buy from "../../blocks/buy/buy";
import CafeGallery from "../../blocks/cafe-gallery/cafe-gallery";

function BuyPage({ slides, buyOptions }) {
  return (
    <>
      <CafeGallery slides={slides} />
      <Buy buyOptions={buyOptions} />
    </>
  );
}

export default BuyPage;
