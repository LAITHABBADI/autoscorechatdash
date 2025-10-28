// Chakra imports
import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import LineChart from "components/charts/LineChart";
import React from "react";
import { MdBarChart } from "react-icons/md";

export default function BugTrends(props) {
  const { ...rest } = props;
  const textColor = useColorModeValue("secondaryGray.900", "white");

  const bugTrendsData = [
    { name: "Reported", data: [12, 18, 15, 21, 16, 19, 23] },
    { name: "Resolved", data: [8, 14, 11, 17, 13, 16, 19] },
  ];

  const bugTrendsOptions = {
    chart: {
      toolbar: { show: false },
    },
    tooltip: { theme: "dark" },
    dataLabels: { enabled: false },
    stroke: { curve: "smooth" },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      labels: {
        style: { colors: "#A3AED0", fontSize: "12px", fontWeight: "500" },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      show: true,
      labels: {
        style: { colors: "#A3AED0", fontSize: "12px" },
      },
    },
    legend: { show: true },
    grid: { show: false },
    colors: ["#E53E3E", "#38A169"],
  };

  return (
    <Card align='center' direction='column' w='100%' p='20px' {...rest}>
      <Flex align='center' w='100%' px='15px' py='10px'>
        <Text color={textColor} fontSize='22px' fontWeight='700'>
          Bug Trends
        </Text>
      </Flex>
      <Box h='300px' w='100%' mt='20px'>
        <LineChart chartData={bugTrendsData} chartOptions={bugTrendsOptions} />
      </Box>
    </Card>
  );
}
