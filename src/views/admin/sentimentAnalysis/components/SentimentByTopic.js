// Chakra imports
import { Box, Flex, Text, useColorModeValue, Progress } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import React from "react";

export default function SentimentByTopic(props) {
  const { ...rest } = props;
  const textColor = useColorModeValue("secondaryGray.900", "white");

  const topics = [
    { name: "Product Quality", positive: 82, neutral: 15, negative: 3 },
    { name: "Customer Service", positive: 74, neutral: 18, negative: 8 },
    { name: "Pricing", positive: 45, neutral: 35, negative: 20 },
    { name: "User Experience", positive: 78, neutral: 16, negative: 6 },
    { name: "Response Time", positive: 71, neutral: 21, negative: 8 },
  ];

  return (
    <Card p='20px' align='center' direction='column' w='100%' {...rest}>
      <Flex align='center' w='100%' px='15px' py='10px'>
        <Text color={textColor} fontSize='22px' fontWeight='700' lineHeight='100%'>
          Sentiment by Topic
        </Text>
      </Flex>
      <Box px='11px' w='100%' mt='20px'>
        {topics.map((topic, index) => (
          <Flex key={index} mb='20px' direction='column'>
            <Flex justify='space-between' mb='8px'>
              <Text fontSize='sm' fontWeight='600' color={textColor}>
                {topic.name}
              </Text>
              <Flex gap='10px'>
                <Text fontSize='xs' fontWeight='600' color='green.500'>
                  {topic.positive}%
                </Text>
                <Text fontSize='xs' fontWeight='600' color='blue.500'>
                  {topic.neutral}%
                </Text>
                <Text fontSize='xs' fontWeight='600' color='red.500'>
                  {topic.negative}%
                </Text>
              </Flex>
            </Flex>
            <Flex h='8px' w='100%' borderRadius='20px' overflow='hidden'>
              <Box bg='green.500' w={`${topic.positive}%`} />
              <Box bg='blue.500' w={`${topic.neutral}%`} />
              <Box bg='red.500' w={`${topic.negative}%`} />
            </Flex>
          </Flex>
        ))}
      </Box>
    </Card>
  );
}
