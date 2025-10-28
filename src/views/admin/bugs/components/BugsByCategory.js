// Chakra imports
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import PieChart from "components/charts/PieChart";
import React from "react";

export default function BugsByCategory(props) {
  const { ...rest } = props;
  const textColor = useColorModeValue("secondaryGray.900", "white");

  const pieChartOptions = {
    labels: ["Payment", "Performance", "AI/ML", "Database", "UI/UX", "API"],
    colors: ["#E53E3E", "#ED8936", "#ECC94B", "#48BB78", "#4299E1", "#9F7AEA"],
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
      enabled: false,
    },
    hover: { mode: null },
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
      colors: ["#E53E3E", "#ED8936", "#ECC94B", "#48BB78", "#4299E1", "#9F7AEA"],
    },
    tooltip: {
      enabled: true,
      theme: "dark",
    },
  };

  const pieChartData = [28, 22, 18, 15, 10, 7];

  return (
    <Card p='20px' align='center' direction='column' w='100%' {...rest}>
      <Flex px='15px' pt='10px' flexDirection='column' align='center'>
        <Text color={textColor} fontSize='22px' fontWeight='700' mb='10px'>
          Bugs by Category
        </Text>
      </Flex>
      <Box mt='20px'>
        <PieChart chartData={pieChartData} chartOptions={pieChartOptions} />
      </Box>
    </Card>
  );
}
