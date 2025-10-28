/*eslint-disable*/
import React from "react";
import {
  Flex,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Footer() {
  const textColor = useColorModeValue("gray.400", "white");
  const brandColor = useColorModeValue("brand.500", "brand.400");

  return (
    <Flex
      zIndex='3'
      flexDirection='row'
      alignItems='center'
      justifyContent='center'
      px={{ base: "30px", md: "50px" }}
      pb='30px'>
      <Text
        color={textColor}
        textAlign='center'
        fontSize='sm'>
        Built by{" "}
        <Link
          color={brandColor}
          href='https://genailabs.agency/'
          target='_blank'
          fontWeight='600'
          _hover={{ textDecoration: 'underline' }}>
          GenAI Labs
        </Link>
      </Text>
    </Flex>
  );
}
