// Chakra imports
import { Box, Flex, Text, useColorModeValue, Progress } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import React from "react";

export default function TopIssues(props) {
  const { ...rest } = props;
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );

  const issues = [
    { name: "Account Login Issues", count: 342, percentage: 28 },
    { name: "Payment Processing", count: 267, percentage: 22 },
    { name: "Feature Questions", count: 198, percentage: 16 },
    { name: "Technical Support", count: 156, percentage: 13 },
    { name: "General Inquiries", count: 134, percentage: 11 },
    { name: "Other", count: 123, percentage: 10 },
  ];

  return (
    <Card p='20px' align='center' direction='column' w='100%' {...rest}>
      <Flex align='center' w='100%' px='15px' py='10px'>
        <Text color={textColor} fontSize='22px' fontWeight='700' lineHeight='100%'>
          Top Issues
        </Text>
      </Flex>
      <Box px='11px' w='100%' mt='20px'>
        {issues.map((issue, index) => (
          <Flex key={index} mb='20px' direction='column'>
            <Flex justify='space-between' mb='8px'>
              <Text fontSize='sm' fontWeight='600' color={textColor}>
                {issue.name}
              </Text>
              <Text fontSize='sm' fontWeight='600' color='secondaryGray.600'>
                {issue.count} ({issue.percentage}%)
              </Text>
            </Flex>
            <Progress
              colorScheme='brandScheme'
              value={issue.percentage}
              h='8px'
              borderRadius='20px'
            />
          </Flex>
        ))}
      </Box>
    </Card>
  );
}
