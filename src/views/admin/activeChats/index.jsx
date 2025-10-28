// Chakra imports
import {
  Box,
  SimpleGrid,
  useColorModeValue,
  Icon,
  Badge,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  MdChat,
  MdSpeed,
  MdCheckCircle,
  MdPending,
} from "react-icons/md";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import ActiveChatsTable from "views/admin/activeChats/components/ActiveChatsTable";
import ChatVolume from "views/admin/activeChats/components/ChatVolume";
import ResponseTimeChart from "views/admin/activeChats/components/ResponseTimeChart";
import { columnsDataActiveChats } from "views/admin/activeChats/variables/columnsData";
import tableDataActiveChats from "views/admin/activeChats/variables/tableDataActiveChats.json";

export default function ActiveChats() {
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
              bg='linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)'
              icon={<Icon w='28px' h='28px' as={MdChat} color='white' />}
            />
          }
          name='Active Chats'
          value='247'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdSpeed} color={brandColor} />
              }
            />
          }
          name='Avg Response Time'
          value='1.2s'
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
          growth='+12%'
          name='Resolved Today'
          value='1,482'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg='linear-gradient(90deg, #ED8936 0%, #F6AD55 100%)'
              icon={<Icon w='28px' h='28px' as={MdPending} color='white' />}
            />
          }
          name='Pending Queries'
          value='89'
        />
      </SimpleGrid>

      {/* Charts Row */}
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <ChatVolume />
        <ResponseTimeChart />
      </SimpleGrid>

      {/* Active Chats Table */}
      <SimpleGrid columns={{ base: 1 }} gap='20px' mb='20px'>
        <ActiveChatsTable
          columnsData={columnsDataActiveChats}
          tableData={tableDataActiveChats}
        />
      </SimpleGrid>
    </Box>
  );
}
