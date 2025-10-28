// Chakra imports
import { Box, Flex, Text, useColorModeValue, Icon, Badge, VStack, HStack } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import React from "react";
import { MdSchedule, MdEmail } from "react-icons/md";

export default function ScheduledReports(props) {
  const { ...rest } = props;
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const bgHover = useColorModeValue("secondaryGray.100", "whiteAlpha.50");
  const itemBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  const scheduledReports = [
    {
      name: "Daily Performance Digest",
      schedule: "Every day at 9:00 AM",
      recipient: "team@autoscore.com",
      status: "Active",
    },
    {
      name: "Weekly Analytics Summary",
      schedule: "Every Monday at 8:00 AM",
      recipient: "management@autoscore.com",
      status: "Active",
    },
    {
      name: "Monthly Sentiment Report",
      schedule: "1st of every month",
      recipient: "executives@autoscore.com",
      status: "Active",
    },
    {
      name: "Bug Report Summary",
      schedule: "Every Friday at 5:00 PM",
      recipient: "devteam@autoscore.com",
      status: "Paused",
    },
  ];

  return (
    <Card p='20px' direction='column' w='100%' {...rest}>
      <Flex align='center' w='100%' px='15px' py='10px' mb='20px'>
        <Text color={textColor} fontSize='22px' fontWeight='700' lineHeight='100%'>
          Scheduled Reports
        </Text>
      </Flex>
      <VStack spacing='12px' align='stretch' px='10px'>
        {scheduledReports.map((report, index) => (
          <Flex
            key={index}
            p='16px'
            bg={itemBg}
            borderRadius='12px'
            direction='column'
            gap='8px'
            _hover={{ bg: bgHover }}
          >
            <HStack justify='space-between'>
              <Flex align='center' gap='8px'>
                <Icon as={MdSchedule} color='brand.500' w='20px' h='20px' />
                <Text fontSize='sm' fontWeight='700' color={textColor}>
                  {report.name}
                </Text>
              </Flex>
              <Badge
                colorScheme={report.status === 'Active' ? 'green' : 'orange'}
                fontSize='xs'
                px='8px'
                py='2px'
                borderRadius='6px'
              >
                {report.status}
              </Badge>
            </HStack>
            <Flex direction='column' gap='4px' ml='28px'>
              <Text fontSize='xs' color='secondaryGray.600'>
                {report.schedule}
              </Text>
              <Flex align='center' gap='4px'>
                <Icon as={MdEmail} color='secondaryGray.600' w='14px' h='14px' />
                <Text fontSize='xs' color='secondaryGray.600'>
                  {report.recipient}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        ))}
      </VStack>
    </Card>
  );
}
