import { Box, IconButton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoMdArrowRoundUp } from "react-icons/io";
import { spacing } from "../../index"

const ScrollToTop = () => {
  const [showBtn, setShowBtn] = useState(false);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  });

  return (
    <Box position="relative" zIndex="999">
      {showBtn && (
        <IconButton
          aria-label="Scroll to top"
          colorScheme="gray"
          icon={<IoMdArrowRoundUp />}
          position="fixed"
          bottom={[8, 12]}
          right={spacing.horizontal}
          size="lg"
          variant="solid"
          onClick={goToTop}
        />
      )}
    </Box>
  );
};

export default ScrollToTop;

// import React, { useEffect, useRef, useState } from "react";
// import { IconButton } from "@chakra-ui/react";
// import { IoMdArrowRoundUp } from "react-icons/io";
// import { gsap } from "gsap";

// const ScrollToTopButton = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const scrollButton = useRef();

//   console.log(scrollButton);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     if (isVisible) {
//       gsap.to(scrollButton.current.current, {
//         duration: 0.5,
//         opacity: 1,
//         zIndex: 999,
//       });
//     } else {
//       gsap.to(scrollButton.current, {
//         duration: 0.5,
//         opacity: 1,
//         zIndex: 999,
//       });
//     }
//   }, [isVisible]);

//   const handleScroll = () => {
//     if (window.scrollY > 300) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   };

//   const handleClick = () => {
//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: "instant",
//     });
//     scrollButton.current.blur();
//   };

//   return (
//     <>
//       <IconButton

//         aria-label="scroll to top"
//         icon={<IoMdArrowRoundUp/>}
//         size="lg"
//         colorScheme="gray"
//         variant="solid"
//         border="2px solid"
//         ref={scrollButton}
//         onClick={handleClick}
//         position="fixed"
//         bottom="4rem"
//         right="4rem"
//         zIndex="999"
//         opacity="1"
//         textAlign="center"
//       />
//     </>
//   );
// };

// export default ScrollToTopButton;
