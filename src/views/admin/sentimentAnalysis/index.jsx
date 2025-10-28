// Chakra imports
import {
  Box,
  SimpleGrid,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import {
  MdSentimentSatisfied,
  MdSentimentDissatisfied,
  MdSentimentNeutral,
  MdTrendingUp,
} from "react-icons/md";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import SentimentOverTime from "views/admin/sentimentAnalysis/components/SentimentOverTime";
import SentimentDistribution from "views/admin/sentimentAnalysis/components/SentimentDistribution";
import SentimentByTopic from "views/admin/sentimentAnalysis/components/SentimentByTopic";
import Suggestions from "views/admin/sentimentAnalysis/components/Suggestions";
import Insights from "views/admin/sentimentAnalysis/components/Insights";

export default function SentimentAnalysis() {
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
              bg='linear-gradient(90deg, #38A169 0%, #48BB78 100%)'
              icon={<Icon w='28px' h='28px' as={MdSentimentSatisfied} color='white' />}
            />
          }
          name='Positive'
          value='68.5%'
          growth='+3.2%'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdSentimentNeutral} color={brandColor} />
              }
            />
          }
          name='Neutral'
          value='24.1%'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg='linear-gradient(90deg, #E53E3E 0%, #FC8181 100%)'
              icon={<Icon w='28px' h='28px' as={MdSentimentDissatisfied} color='white' />}
            />
          }
          name='Negative'
          value='7.4%'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg='linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)'
              icon={<Icon w='28px' h='28px' as={MdTrendingUp} color='white' />}
            />
          }
          growth='+8.5%'
          name='Sentiment Score'
          value='8.2/10'
        />
      </SimpleGrid>

      {/* Charts Row 1 */}
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap={{ base: '15px', md: '20px' }} mb={{ base: '15px', md: '20px' }}>
        <SentimentOverTime />
        <SentimentDistribution />
      </SimpleGrid>

      {/* Charts Row 2 */}
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap={{ base: '15px', md: '20px' }} mb={{ base: '15px', md: '20px' }}>
        <SentimentByTopic />
        <Suggestions />
      </SimpleGrid>

      {/* Insights Row */}
      <Box mb={{ base: '15px', md: '20px' }}>
        <Insights />
      </Box>
    </Box>
  );
}
