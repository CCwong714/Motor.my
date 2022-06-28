import { React, onChange, onClickItem, onClickThumb } from "react";
import { Box, Image } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import BigIm1 from "../../image/Logo/BigIm1.jpg";
import BigIm2 from "../../image/Logo/BigIm2.png";

function ChangePhoto() {
  return (
    <>
      <Box
        marginX="auto"
        justifyContent="center"
        align="center"
        alignSelf="center"
        marginBottom="10"
      >
        <Carousel
          showThumbs={false}
          showArrows={true}
          onChange={onChange}
          onClickItem={onClickItem}
          onClickThumb={onClickThumb}
          alignSelf="center"
          infiniteLoop={true}
          autoPlay={true}
        >
          <Box>
            <Image
              src={BigIm1}
              w="max-content"
              height={["300", "350", "400", "500", "600px"]}
              marginBottom="5"
            />
          </Box>
          <Box>
            <Image
              src={BigIm2}
              w="max-content"
              height={["300", "350", "400", "500", "600px"]}
              marginBottom="5"
            />
          </Box>

          <Box>
            <Image
              src={BigIm1}
              w="375"
              height={["300", "350", "400", "500", "600px"]}
              marginBottom="5"
            />
          </Box>
        </Carousel>
      </Box>
    </>
  );
}

export default ChangePhoto;
