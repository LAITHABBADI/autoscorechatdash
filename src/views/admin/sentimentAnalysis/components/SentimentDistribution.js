// Chakra imports
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import PieChart from "components/charts/PieChart";
import React from "react";

export default function SentimentDistribution(props) {
  const { ...rest } = props;
  const textColor = useColorModeValue("secondaryGray.900", "white");

  const pieChartOptions = {
    labels: ["Positive", "Neutral", "Negative"],
    colors: ["#38A169", "#4299E1", "#E53E3E"],
    chart: {
      width: "50px",
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    legend: {
      show: true,
      position: "bottom",
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val.toFixed(1) + "%";
      },
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
    fill: {
      colors: ["#38A169", "#4299E1", "#E53E3E"],
    },
    tooltip: {
      enabled: true,
      theme: "dark",
    },
  };

  const pieChartData = [68.5, 24.1, 7.4];

  return (
    <Card p='20px' align='center' direction='column' w='100%' {...rest}>
      <Flex px='15px' pt='10px' flexDirection='column' align='center'>
        <Text color={textColor} fontSize='22px' fontWeight='700' mb='10px'>
          Sentiment Distribution
        </Text>
      </Flex>
      <Box mt='20px'>
        <PieChart chartData={pieChartData} chartOptions={pieChartOptions} />
      </Box>
    </Card>
  );
}
