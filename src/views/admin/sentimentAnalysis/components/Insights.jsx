import React from "react";
import {
  Box,
  Flex,
  Text,
  VStack,
  Icon,
  useColorModeValue,
  Progress,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import {
  MdCheckCircle,
  MdWarning,
  MdInfo,
  MdTrendingUp,
} from "react-icons/md";
import Card from "components/card/Card.js";

export default function Insights() {
  const { t } = useTranslation();
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const cardBg = useColorModeValue("white", "navy.800");
  const insightBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const brandColor = useColorModeValue("brand.500", "brand.400");

  const insights = [
    {
      icon: MdTrendingUp,
      iconColor: "green.500",
      title: t("sentiment.insights.positiveTrend"),
      description: t("sentiment.insights.positiveTrendDesc"),
      metric: "68.5%",
      change: "+3.2%",
      changeColor: "green.500",
    },
    {
      icon: MdCheckCircle,
      iconColor: "blue.500",
      title: t("sentiment.insights.peakHours"),
      description: t("sentiment.insights.peakHoursDesc"),
      metric: "2-5 PM",
      change: "Best window",
      changeColor: "blue.500",
    },
    {
      icon: MdWarning,
      iconColor: "orange.500",
      title: t("sentiment.insights.commonIssues"),
      description: t("sentiment.insights.commonIssuesDesc"),
      metric: "Payment",
      change: "32% of issues",
      changeColor: "orange.500",
    },
    {
      icon: MdInfo,
      iconColor: "purple.500",
      title: t("sentiment.insights.avgResolution"),
      description: t("sentiment.insights.avgResolutionDesc"),
      metric: "4m 32s",
      change: "-15s vs last week",
      changeColor: "green.500",
    },
  ];

  return (
    <Card bg={cardBg} p="20px" h="100%">
      <Flex direction="column" h="100%">
        <Text color={textColor} fontSize="xl" fontWeight="700" mb="20px">
          {t("sentiment.insights.title")}
        </Text>

        <VStack spacing={4} align="stretch">
          {insights.map((insight, index) => (
            <Box key={index} bg={insightBg} p="15px" borderRadius="12px">
              <Flex align="start" gap="12px" mb="10px">
                <Icon
                  as={insight.icon}
                  w="24px"
                  h="24px"
                  color={insight.iconColor}
                  mt="2px"
                />
                <Box flex="1">
                  <Text
                    color={textColor}
                    fontSize="sm"
                    fontWeight="600"
                    mb="4px"
                  >
                    {insight.title}
                  </Text>
                  <Text color="secondaryGray.600" fontSize="xs" mb="8px">
                    {insight.description}
                  </Text>
                  <Flex align="center" justify="space-between">
                    <Text color={textColor} fontSize="lg" fontWeight="700">
                      {insight.metric}
                    </Text>
                    <Text
                      color={insight.changeColor}
                      fontSize="xs"
                      fontWeight="600"
                    >
                      {insight.change}
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          ))}
        </VStack>

        <Box mt="auto" pt="20px">
          <Flex justify="space-between" align="center" mb="8px">
            <Text color={textColor} fontSize="sm" fontWeight="600">
              {t("sentiment.insights.overallHealth")}
            </Text>
            <Text color={brandColor} fontSize="sm" fontWeight="700">
              82%
            </Text>
          </Flex>
          <Progress value={82} colorScheme="green" size="sm" borderRadius="full" />
        </Box>
      </Flex>
    </Card>
  );
}
