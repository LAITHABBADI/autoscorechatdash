// Chakra imports
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import BarChart from "components/charts/BarChart";
import React from "react";

export default function PeakHours(props) {
  const { ...rest } = props;
  const textColor = useColorModeValue("secondaryGray.900", "white");

  const peakHoursData = [
    {
      name: "Chats",
      data: [45, 52, 68, 84, 103, 112, 98, 145, 167, 189, 156, 134, 122, 145, 167, 178, 156, 134, 112, 98, 87, 76, 65, 54],
    },
  ];

  const peakHoursOptions = {
    chart: {
      toolbar: { show: false },
    },
    tooltip: {
      theme: "dark",
      x: {
        formatter: function(val) {
          return val + ":00";
        }
      }
    },
    xaxis: {
      categories: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
      labels: {
        style: {
          colors: "#A3AED0",
          fontSize: "12px",
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
          fontSize: "12px",
        },
      },
    },
    grid: {
      strokeDashArray: 5,
      yaxis: { lines: { show: true } },
      xaxis: { lines: { show: false } },
    },
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
      bar: { borderRadius: 8, columnWidth: "20px" },
    },
  };

  return (
    <Card align='center' direction='column' w='100%' p='20px' {...rest}>
      <Flex align='center' w='100%' px='15px' py='10px'>
        <Text color={textColor} fontSize='22px' fontWeight='700' lineHeight='100%'>
          Peak Hours (24h)
        </Text>
      </Flex>
      <Box h='300px' w='100%' mt='20px'>
        <BarChart chartData={peakHoursData} chartOptions={peakHoursOptions} />
      </Box>
    </Card>
  );
}
