// Chakra imports
import {
  Box,
  SimpleGrid,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import {
  MdChat,
  MdTimeline,
  MdTrendingUp,
  MdPeople,
} from "react-icons/md";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import ConversationMetrics from "views/admin/insights/components/ConversationMetrics";
import TopIssues from "views/admin/insights/components/TopIssues";
import UserEngagement from "views/admin/insights/components/UserEngagement";
import PeakHours from "views/admin/insights/components/PeakHours";

export default function Insights() {
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
          name='Total Conversations'
          value='12,847'
          growth='+18%'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdTimeline} color={brandColor} />
              }
            />
          }
          name='Avg Session Length'
          value='4m 32s'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg='linear-gradient(90deg, #38A169 0%, #48BB78 100%)'
              icon={<Icon w='28px' h='28px' as={MdTrendingUp} color='white' />}
            />
          }
          name='Resolution Rate'
          value='87.3%'
          growth='+5.2%'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={<Icon w='32px' h='32px' as={MdPeople} color={brandColor} />}
            />
          }
          name='Unique Users'
          value='8,425'
          growth='+12%'
        />
      </SimpleGrid>

      {/* Charts Row 1 */}
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <ConversationMetrics />
        <UserEngagement />
      </SimpleGrid>

      {/* Charts Row 2 */}
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <TopIssues />
        <PeakHours />
      </SimpleGrid>
    </Box>
  );
}
