// Chakra imports
import {
  Box,
  SimpleGrid,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import {
  MdBugReport,
  MdCheckCircle,
  MdWarning,
  MdError,
} from "react-icons/md";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import BugsTable from "views/admin/bugs/components/BugsTable";
import BugTrends from "views/admin/bugs/components/BugTrends";
import BugsByCategory from "views/admin/bugs/components/BugsByCategory";
import { columnsDataBugs } from "views/admin/bugs/variables/columnsData";
import tableDataBugs from "views/admin/bugs/variables/tableDataBugs.json";

export default function Bugs() {
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* KPI Cards */}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        gap='20px'
        mb='20px'>
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg='linear-gradient(90deg, #ED8936 0%, #F6AD55 100%)'
              icon={<Icon w='28px' h='28px' as={MdBugReport} color='white' />}
            />
          }
          name='Open Bugs'
          value='23'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg='linear-gradient(90deg, #E53E3E 0%, #FC8181 100%)'
              icon={<Icon w='28px' h='28px' as={MdError} color='white' />}
            />
          }
          name='Critical'
          value='5'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg='linear-gradient(90deg, #ECC94B 0%, #F6E05E 100%)'
              icon={<Icon w='28px' h='28px' as={MdWarning} color='white' />}
            />
          }
          name='High Priority'
          value='12'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg='linear-gradient(90deg, #38A169 0%, #48BB78 100%)'
              icon={<Icon w='28px' h='28px' as={MdCheckCircle} color='white' />}
            />
          }
          growth='+15%'
          name='Resolved This Week'
          value='34'
        />
      </SimpleGrid>

      {/* Charts Row */}
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <BugTrends />
        <BugsByCategory />
      </SimpleGrid>

      {/* Bugs Table */}
      <SimpleGrid columns={{ base: 1 }} gap='20px' mb='20px'>
        <BugsTable
          columnsData={columnsDataBugs}
          tableData={tableDataBugs}
        />
      </SimpleGrid>
    </Box>
  );
}
