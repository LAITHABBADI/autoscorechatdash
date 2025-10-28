// Chakra imports
import { Box, Flex, Text, useColorModeValue, Icon, Button, VStack } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import React from "react";
import { MdDescription, MdDownload } from "react-icons/md";

export default function ReportTemplates(props) {
  const { ...rest } = props;
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const bgHover = useColorModeValue("secondaryGray.100", "whiteAlpha.50");
  const itemBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  const templates = [
    {
      name: "Weekly Performance Summary",
      description: "Complete overview of chatbot performance metrics",
      downloads: 234,
    },
    {
      name: "Monthly Sentiment Analysis",
      description: "Detailed sentiment trends and user satisfaction",
      downloads: 189,
    },
    {
      name: "Bug Status Report",
      description: "Current bug status and resolution metrics",
      downloads: 156,
    },
    {
      name: "Conversation Analytics",
      description: "User engagement and conversation insights",
      downloads: 203,
    },
  ];

  return (
    <Card p='20px' direction='column' w='100%' {...rest}>
      <Flex align='center' w='100%' px='15px' py='10px' mb='20px'>
        <Text color={textColor} fontSize='22px' fontWeight='700' lineHeight='100%'>
          Report Templates
        </Text>
      </Flex>
      <VStack spacing='12px' align='stretch' px='10px'>
        {templates.map((template, index) => (
          <Flex
            key={index}
            p='16px'
            bg={itemBg}
            borderRadius='12px'
            justify='space-between'
            align='center'
            _hover={{ bg: bgHover }}
            cursor='pointer'
          >
            <Flex align='center' gap='12px'>
              <Icon as={MdDescription} color='brand.500' w='24px' h='24px' />
              <Box>
                <Text fontSize='sm' fontWeight='700' color={textColor}>
                  {template.name}
                </Text>
                <Text fontSize='xs' color='secondaryGray.600'>
                  {template.description}
                </Text>
              </Box>
            </Flex>
            <Button
              size='sm'
              variant='ghost'
              leftIcon={<Icon as={MdDownload} />}
            >
              Use
            </Button>
          </Flex>
        ))}
      </VStack>
    </Card>
  );
}
