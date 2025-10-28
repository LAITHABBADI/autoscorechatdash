import React from "react";

// Chakra imports
import { Flex, Image } from "@chakra-ui/react";

// Custom components
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  return (
    <Flex align='center' direction='column'>
      <Image
        src='/autoscore-logo.webp'
        alt='AutoScore Logo'
        h='auto'
        w='175px'
        my='32px'
        objectFit='contain'
      />
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
