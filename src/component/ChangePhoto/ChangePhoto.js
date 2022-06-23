import { React, onChange, onClickItem, onClickThumb } from "react";
import { Box, Image } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image1 from "../../image/photo1.jpg";
import Image2 from "../../image/photo2.jpg";
import Image3 from "../../image/photo3.jpg";

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
          showArrows={true}
          onChange={onChange}
          onClickItem={onClickItem}
          onClickThumb={onClickThumb}
          alignSelf="center"
          infiniteLoop={true}
          autoPlay={true}
        >
          <Box>
            <Image src={Image1} w="max-content" height={["300","350","400","500","600px" ]} marginBottom="5" />
          </Box>
          <Box>
            <Image src={Image2} w="max-content" height={["300","350","400","500","600px" ]} marginBottom="5" />
          </Box>

          <Box>
            <Image src={Image3} w="375" height={["300","350","400","500","600px" ]} marginBottom="5" />
          </Box>
        </Carousel>
      </Box>
    </>
  );
}

export default ChangePhoto;
