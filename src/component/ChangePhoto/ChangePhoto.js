import { React  ,onChange ,onClickItem ,onClickThumb} from 'react';
import { Box ,Image } from '@chakra-ui/react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image1 from '../../image/photo1.jpg'
import Image2 from '../../image/photo2.jpg'
import Image3 from '../../image/photo3.jpg'


function ChangePhoto() {
  return ( 
    <>
      <Box marginX='auto' justifyContent='center' align="center" alignSelf="center"  marginBottom="10">
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
            <Image src={Image1} height='800px' marginBottom="5"/>
            <p>Legend 1</p>
          </Box>

          <Box>
            <Image src={Image2} height='800px' marginBottom="5"/>
            <p>Legend 2</p>
          </Box>

          <Box>
            <Image src={Image3} height='800px' marginBottom="5"/>
            <p>Legend 3</p>
          </Box>
        </Carousel>
      </Box>
    </>
   );
}

export default ChangePhoto;
