"use client";

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Image,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Logo = (props) => {
  return (
    <>
      <Box width={36}>
        <Image src="https://i.imgur.com/jTXr2zV.png" alt="logo" />
      </Box>
    </>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Logo />
        <Stack direction={"row"} spacing={6}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contribute">Contribute</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2024 Code-Budy. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"}>
              <Link to="https://twitter.com/Aspire_ssp">
                <FaTwitter />
              </Link>
            </SocialButton>
            <SocialButton label={"Github"}>
              <Link to="https://github.com/AspireSsp">
                <FaGithub />
              </Link>
            </SocialButton>
            <SocialButton label={"LinkedIn"}>
              <Link to="https://www.linkedin.com/in/sanjay-prajapat-4187a0208/" >
                <FaLinkedin />
              </Link>
            </SocialButton>
            <SocialButton label={"Instagram"}>
              <Link to="https://www.instagram.com/aspire_ssp/">
                <FaInstagram  />
              </Link>
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
