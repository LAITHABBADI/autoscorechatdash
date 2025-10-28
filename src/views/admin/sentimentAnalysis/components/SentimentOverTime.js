// Chakra imports
import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import LineChart from "components/charts/LineChart";
import React from "react";
import { MdBarChart } from "react-icons/md";

export default function SentimentOverTime(props) {
  const { ...rest } = props;
  const textColor = useColorModeValue("secondaryGray.900", "white");

  const sentimentData = [
    { name: "Positive", data: [65, 67, 64, 68, 70, 69, 68.5] },
    { name: "Neutral", data: [26, 25, 27, 24, 23, 24, 24.1] },
    { name: "Negative", data: [9, 8, 9, 8, 7, 7, 7.4] },
  ];

  const sentimentOptions = {
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
        formatter: function (val) {
          return val + "%";
        },
      },
    },
    legend: { show: true },
    grid: { show: false },
    colors: ["#38A169", "#4299E1", "#E53E3E"],
  };

  return (
    <Card align='center' direction='column' w='100%' p='20px' {...rest}>
      <Flex align='center' w='100%' px='15px' py='10px'>
        <Text color={textColor} fontSize='22px' fontWeight='700'>
          Sentiment Over Time
        </Text>
      </Flex>
      <Box h='300px' w='100%' mt='20px'>
        <LineChart chartData={sentimentData} chartOptions={sentimentOptions} />
      </Box>
    </Card>
  );
}
