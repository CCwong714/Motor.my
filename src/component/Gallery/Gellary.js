import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageJson from "../../ImageGellary.json";
import { Box } from "@chakra-ui/react";

function Gellary() {
  return (
    <>
      <ImageGallery
        items={ImageJson}
        infinite={false}
        showIndex={true}
        showPlayButton={false}
      />
    </>
  );
}

export default Gellary;
