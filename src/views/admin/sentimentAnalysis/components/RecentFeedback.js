// Chakra imports
import { Box, Flex, Text, useColorModeValue, Icon, VStack, HStack, Badge } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import React from "react";
import { MdSentimentSatisfied, MdSentimentNeutral, MdSentimentDissatisfied } from "react-icons/md";

export default function RecentFeedback(props) {
  const { ...rest } = props;
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
  const feedbackBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  const feedbacks = [
    {
      sentiment: "Positive",
      text: "Amazing customer support! The bot understood my issue perfectly.",
      user: "Sarah Johnson",
      time: "2 mins ago",
    },
    {
      sentiment: "Neutral",
      text: "The chatbot works fine, but sometimes takes a while to respond.",
      user: "Michael Chen",
      time: "15 mins ago",
    },
    {
      sentiment: "Positive",
      text: "Really helpful and quick responses. Solved my problem in minutes!",
      user: "Emily Davis",
      time: "32 mins ago",
    },
    {
      sentiment: "Negative",
      text: "Bot couldn't understand my payment issue and kept giving wrong answers.",
      user: "Robert Wilson",
      time: "1 hour ago",
    },
    {
      sentiment: "Positive",
      text: "Impressed by how natural the conversation feels. Great AI!",
      user: "Lisa Anderson",
      time: "2 hours ago",
    },
  ];

  const getSentimentIcon = (sentiment) => {
    switch (sentiment) {
      case "Positive":
        return MdSentimentSatisfied;
      case "Negative":
        return MdSentimentDissatisfied;
      default:
        return MdSentimentNeutral;
    }
  };

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case "Positive":
        return "green.500";
      case "Negative":
        return "red.500";
      default:
        return "blue.500";
    }
  };

  return (
    <Card p='20px' direction='column' w='100%' {...rest}>
      <Flex align='center' w='100%' px='15px' py='10px' mb='20px'>
        <Text color={textColor} fontSize='22px' fontWeight='700' lineHeight='100%'>
          Recent Feedback
        </Text>
      </Flex>
      <VStack spacing='16px' align='stretch' px='10px'>
        {feedbacks.map((feedback, index) => (
          <Flex
            key={index}
            p='12px'
            bg={feedbackBg}
            borderRadius='12px'
            direction='column'
            gap='8px'
          >
            <HStack justify='space-between'>
              <HStack>
                <Icon
                  as={getSentimentIcon(feedback.sentiment)}
                  color={getSentimentColor(feedback.sentiment)}
                  w='20px'
                  h='20px'
                />
                <Text fontSize='sm' fontWeight='700' color={textColor}>
                  {feedback.user}
                </Text>
              </HStack>
              <Text fontSize='xs' color={textColorSecondary}>
                {feedback.time}
              </Text>
            </HStack>
            <Text fontSize='sm' color={textColor}>
              {feedback.text}
            </Text>
          </Flex>
        ))}
      </VStack>
    </Card>
  );
}
