import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import ToneSettings from "./components/ToneSettings";
import BasicRules from "./components/BasicRules";
import GeneralSettings from "./components/GeneralSettings";
import TestChat from "./components/TestChat";

export default function AISettings() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }} px={{ base: "15px", md: "0" }}>
      {/* Settings Row */}
      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={{ base: '15px', md: '20px' }} mb={{ base: '15px', md: '20px' }}>
        <ToneSettings />
        <BasicRules />
        <GeneralSettings />
      </SimpleGrid>

      {/* Test Chat */}
      <TestChat />
    </Box>
  );
}
