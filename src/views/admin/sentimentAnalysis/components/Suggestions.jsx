import React from "react";
import {
  Box,
  Flex,
  Text,
  VStack,
  Icon,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import {
  MdLightbulbOutline,
  MdSpeed,
  MdPeople,
  MdTrendingUp,
} from "react-icons/md";
import Card from "components/card/Card.js";

export default function Suggestions() {
  const { t } = useTranslation();
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const cardBg = useColorModeValue("white", "navy.800");
  const suggestionBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const brandColor = useColorModeValue("brand.500", "brand.400");
  const iconBg = useColorModeValue("brand.100", "brand.900");

  const suggestions = [
    {
      icon: MdSpeed,
      title: t("sentiment.suggestions.improveResponse"),
      description: t("sentiment.suggestions.improveResponseDesc"),
      priority: "high",
    },
    {
      icon: MdPeople,
      title: t("sentiment.suggestions.enhancePersonalization"),
      description: t("sentiment.suggestions.enhancePersonalizationDesc"),
      priority: "medium",
    },
    {
      icon: MdTrendingUp,
      title: t("sentiment.suggestions.expandKnowledge"),
      description: t("sentiment.suggestions.expandKnowledgeDesc"),
      priority: "medium",
    },
    {
      icon: MdLightbulbOutline,
      title: t("sentiment.suggestions.addEmojis"),
      description: t("sentiment.suggestions.addEmojisDesc"),
      priority: "low",
    },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "red";
      case "medium":
        return "orange";
      case "low":
        return "green";
      default:
        return "gray";
    }
  };

  return (
    <Card bg={cardBg} p="20px" h="100%">
      <Flex direction="column" h="100%">
        <Text color={textColor} fontSize="xl" fontWeight="700" mb="20px">
          {t("sentiment.suggestions.title")}
        </Text>

        <VStack spacing={3} align="stretch">
          {suggestions.map((suggestion, index) => (
            <Flex
              key={index}
              bg={suggestionBg}
              p="15px"
              borderRadius="12px"
              align="start"
              gap="12px"
              _hover={{ transform: "translateY(-2px)", transition: "0.2s" }}
            >
              <Flex
                bg={iconBg}
                w="40px"
                h="40px"
                borderRadius="10px"
                align="center"
                justify="center"
                flexShrink={0}
              >
                <Icon as={suggestion.icon} w="20px" h="20px" color={brandColor} />
              </Flex>
              <Box flex="1">
                <Flex align="center" gap="8px" mb="6px">
                  <Text
                    color={textColor}
                    fontSize="sm"
                    fontWeight="600"
                    flex="1"
                  >
                    {suggestion.title}
                  </Text>
                  <Badge colorScheme={getPriorityColor(suggestion.priority)}>
                    {t(`sentiment.priority.${suggestion.priority}`)}
                  </Badge>
                </Flex>
                <Text color="secondaryGray.600" fontSize="xs">
                  {suggestion.description}
                </Text>
              </Box>
            </Flex>
          ))}
        </VStack>
      </Flex>
    </Card>
  );
}
