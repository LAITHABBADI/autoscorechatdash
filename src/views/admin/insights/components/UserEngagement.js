// Chakra imports
import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import BarChart from "components/charts/BarChart";
import React from "react";
import { MdBarChart } from "react-icons/md";

export default function UserEngagement(props) {
  const { ...rest } = props;

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const iconColor = useColorModeValue("brand.500", "white");
  const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  const engagementData = [
    {
      name: "Messages",
      data: [1847, 2134, 1956, 2243, 2089, 2401, 2647],
    },
  ];

  const engagementOptions = {
    chart: {
      toolbar: { show: false },
    },
    tooltip: {
      theme: "dark",
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      labels: {
        style: {
          colors: "#A3AED0",
          fontSize: "14px",
          fontWeight: "500",
        },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      show: true,
      labels: {
        style: {
          colors: "#A3AED0",
          fontSize: "14px",
        },
      },
    },
    grid: { show: false },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        colorStops: [
          [
            { offset: 0, color: "#4481EB", opacity: 1 },
            { offset: 100, color: "rgba(67, 24, 255, 1)", opacity: 0.28 },
          ],
        ],
      },
    },
    dataLabels: { enabled: false },
    plotOptions: {
      bar: { borderRadius: 10, columnWidth: "40px" },
    },
  };

  return (
    <Card align='center' direction='column' w='100%' {...rest}>
      <Flex justify='space-between' align='start' px='10px' pt='5px'>
        <Flex flexDirection='column' align='start' me='20px'>
          <Text color='secondaryGray.600' fontSize='sm' fontWeight='500'>
            User Engagement
          </Text>
          <Text color={textColor} fontSize='34px' fontWeight='700' lineHeight='100%'>
            14,897
          </Text>
          <Text color='secondaryGray.600' fontSize='sm' fontWeight='500' mt='4px'>
            Total Messages This Week
          </Text>
        </Flex>
        <Flex align='center' justifyContent='center'
          bg={bgButton} w='37px' h='37px' borderRadius='10px'>
          <Icon as={MdBarChart} color={iconColor} w='24px' h='24px' />
        </Flex>
      </Flex>
      <Box h='240px' mt='auto'>
        <BarChart chartData={engagementData} chartOptions={engagementOptions} />
      </Box>
    </Card>
  );
}
