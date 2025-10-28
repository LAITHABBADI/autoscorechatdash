/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  Box,
  Icon,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  MdChat,
  MdSpeed,
  MdSentimentSatisfied,
  MdBugReport,
  MdTrendingUp,
  MdPeople,
  MdTimeline,
} from "react-icons/md";
// Insights components
import ConversationMetrics from "views/admin/insights/components/ConversationMetrics";
import UserEngagement from "views/admin/insights/components/UserEngagement";
import TopIssues from "views/admin/insights/components/TopIssues";
import PeakHours from "views/admin/insights/components/PeakHours";

export default function UserReports() {
  // Chakra Color Mode
  const { t } = useTranslation();
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }} px={{ base: "15px", md: "0" }}>
      {/* KPI Cards */}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        gap={{ base: '15px', md: '20px' }}
        mb={{ base: '15px', md: '20px' }}>
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg='linear-gradient(90deg, #DC143C 0%, #C41E3A 100%)'
              icon={<Icon w='28px' h='28px' as={MdChat} color='white' />}
            />
          }
          name={t('dashboard.totalConversations')}
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
          name={t('dashboard.avgSessionLength')}
          value='4m 32s'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg='linear-gradient(90deg, #38A169 0%, #48BB78 100%)'
              icon={<Icon w='28px' h='28px' as={MdSentimentSatisfied} color='white' />}
            />
          }
          growth='+3.2%'
          name={t('dashboard.sentimentScore')}
          value='8.2/10'
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
          name={t('dashboard.uniqueUsers')}
          value='8,425'
          growth='+12%'
        />
      </SimpleGrid>

      {/* Analytics Charts Row 1 */}
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap={{ base: '15px', md: '20px' }} mb={{ base: '15px', md: '20px' }}>
        <ConversationMetrics />
        <UserEngagement />
      </SimpleGrid>

      {/* Analytics Charts Row 2 */}
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap={{ base: '15px', md: '20px' }} mb={{ base: '15px', md: '20px' }}>
        <TopIssues />
        <PeakHours />
      </SimpleGrid>
    </Box>
  );
}
