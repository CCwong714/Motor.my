import {
  Box,
  Button,
  MenuButton,
  MenuItem,
  MenuList,
  Menu,
  Flex,
  Grid,
  Link,
  Icon,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import SideBarMenu from "../SideBarAll/SideBarMenu";
import { IoMdContact } from "react-icons/io";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

function MenuAndMenuButton() {
  let navigate = useNavigate();
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        marginLeft={["0", "6"]}
        marginRight={["0", "6"]}
        marginTop={3}
        paddingBottom="3"
      >
        <Flex>
          <SideBarMenu />
          <Link
            variant="ghost"
            _hover={{ backgroundColor: "transparent" }}
            fontWeight="bold"
            fontSize="2xl"
            marginRight={10}
            as={RouterLink}
            to="/"
          >
            Motor
          </Link>

          <Menu>
            <MenuButton>
              <Link
                marginRight={5}
                variant="ghost"
                _hover={{ backgroundColor: "transparent" }}
                display={["none", "none", "none", "none", "block"]}
                as={RouterLink}
                to="/buy-motor"
                fontWeight="bold"
              >
                Buy Motor
                <Icon as={BsChevronDown} marginLeft={1} />
              </Link>
            </MenuButton>
            <MenuList zIndex="10">
              <MenuItem>
                <Link color="blue.400" as={RouterLink} to="/buymotor">
                  View all Motor
                </Link>
              </MenuItem>
              <Grid templateColumns="repeat(2,1fr)" fontSize="sm">
                <MenuItem>Yamaha</MenuItem>
                <MenuItem>Honda</MenuItem>
                <MenuItem>Kawasaki</MenuItem>
                <MenuItem>Sym</MenuItem>
                <MenuItem>Harley-Davidson</MenuItem>
                <MenuItem>Suzuki</MenuItem>
                <MenuItem>Benelli</MenuItem>
                <MenuItem>Ducati</MenuItem>
                <MenuItem>BMW</MenuItem>
                <MenuItem>Vespa</MenuItem>
                <MenuItem>KTM</MenuItem>
                <MenuItem>Aprilia</MenuItem>
                <MenuItem>Brixton</MenuItem>
                <MenuItem>CMC</MenuItem>
                <MenuItem>Daiichi</MenuItem>
                <MenuItem>GPX</MenuItem>
                <MenuItem>Keeway</MenuItem>
                <MenuItem>KTNS</MenuItem>
                <MenuItem>Kymco</MenuItem>
                <MenuItem>Modenas</MenuItem>
                <MenuItem>Moto Guzzi</MenuItem>
                <MenuItem>Piaggio</MenuItem>
                <MenuItem>Royal Enfield</MenuItem>
                <MenuItem>Scomadi</MenuItem>
                <MenuItem>Sherco</MenuItem>
                <MenuItem>Treeletrik</MenuItem>
                <MenuItem>Triumph</MenuItem>
                <MenuItem>AJP</MenuItem>
                <MenuItem>CFMoto</MenuItem>
                <MenuItem>Eclimo</MenuItem>
                <MenuItem>Moto Morini</MenuItem>
                <MenuItem>NIU</MenuItem>
                <MenuItem>Ottimo</MenuItem>
                <MenuItem>QJ Motor</MenuItem>
                <MenuItem>SM Sport</MenuItem>
                <MenuItem>WMoto</MenuItem>
                <MenuItem>Zontes</MenuItem>
              </Grid>
            </MenuList>
          </Menu>

          <Menu>
            <Link
              marginRight={5}
              variant="ghost"
              _hover={{ backgroundColor: "transparent" }}
              display={["none", "none", "none", "none", "block"]}
              as={RouterLink}
              to="/sell-motor"
              fontWeight="bold"
              alignSelf="center"
            >
              Sell Motor
            </Link>
          </Menu>

          <Menu>
            <MenuButton>
              <Link
                marginRight={5}
                variant="ghost"
                _hover={{ backgroundColor: "transparent" }}
                display={["none", "none", "none", "none", "block"]}
                as={RouterLink}
                to=""
                fontWeight="bold"
              >
                Financing
                <Icon as={BsChevronDown} marginLeft={1} />
              </Link>
            </MenuButton>
            <MenuList zIndex="10">
              <MenuItem>
                <Link
                  as={RouterLink}
                  to="/motor-loan"
                  variant="ghost"
                  _hover={{ variant: "ghost" }}
                >
                  Motor Load
                </Link>
              </MenuItem>
              <MenuItem>Motor Insurance</MenuItem>
            </MenuList>
          </Menu>

          <Menu>
            <Link
              marginRight={5}
              variant="ghost"
              _hover={{ backgroundColor: "transparent" }}
              display={["none", "none", "none", "none", "block"]}
              as={RouterLink}
              to="/faq"
              fontWeight="bold"
              alignSelf="center"
            >
              FAQ
            </Link>
          </Menu>

          <Menu>
            <MenuButton>
              <Link
                marginRight={5}
                variant="ghost"
                _hover={{ backgroundColor: "transparent" }}
                display={["none", "none", "none", "none", "block"]}
                as={RouterLink}
                to="/buy-motor"
                fontWeight="bold"
              >
                About Motorsome
                <Icon as={BsChevronDown} marginLeft={1} />
              </Link>
            </MenuButton>
            <MenuList zIndex="10">
              <MenuItem>Our Story</MenuItem>
              <MenuItem>Motor Certified Lab</MenuItem>
              <MenuItem>Buying from Motor</MenuItem>
              <MenuItem>Quality Assured Motor</MenuItem>
              <MenuItem>Motor Capital</MenuItem>
              <MenuItem>Articles</MenuItem>
              <MenuItem>News</MenuItem>
              <MenuItem>Contact Us</MenuItem>
              <MenuItem>Locate us</MenuItem>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton>
              <Link
                marginRight={5}
                variant="ghost"
                _hover={{ backgroundColor: "transparent" }}
                display={["none", "none", "none", "none", "block"]}
                as={RouterLink}
                to="/buy-motor"
                fontWeight="bold"
              >
                Dealers
                <Icon as={BsChevronDown} marginLeft={1} />
              </Link>
            </MenuButton>
            <MenuList zIndex="10">
              <MenuItem>Dealers Sign Up</MenuItem>
              <MenuItem>Dealers Login</MenuItem>
            </MenuList>
          </Menu>
        </Flex>

        <Flex alignItems="center">
          <Button
            marginRight={5}
            variant="ghost"
            _hover={{ backgroundColor: "transparent" }}
            display={["none", "none", "none", "none", "block"]}
          >
            <Icon as={FaPhoneAlt} marginRight={1} />
            1-800-82-3388
          </Button>

          <Button
            marginRight={5}
            variant="ghost"
            _hover={{ backgroundColor: "blue.200" }}
            display={["none", "none", "none", "none", "block"]}
          >
            <Icon as={IoMdContact} w="6" h="6" mr={1} />
            Sign Up/Login
          </Button>

          <Link
            display={["block", "block", "block", "block", "none"]}
            marginRight={5}
            _hover={{ variant: "ghost" }}
          >
            Buy
          </Link>
          <Link
            display={["block", "block", "block", "block", "none"]}
            marginRight={5}
            _hover={{ variant: "ghost" }}
          >
            Sell
          </Link>
          <Icon
            display={["block", "block", "block", "block", "none"]}
            as={IoMdContact}
            h="34"
            marginRight="3"
            color="black"
          />
        </Flex>
      </Box>
    </>
  );
}

export default MenuAndMenuButton;
