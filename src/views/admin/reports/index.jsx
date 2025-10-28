// Chakra imports
import {
  Box,
  SimpleGrid,
  useColorModeValue,
  Icon,
  Button,
  Flex,
  Text,
  Select,
  Input,
} from "@chakra-ui/react";
import React from "react";
import {
  MdDescription,
  MdDownload,
  MdEmail,
  MdSchedule,
} from "react-icons/md";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import Card from "components/card/Card";
import ReportTemplates from "views/admin/reports/components/ReportTemplates";
import ScheduledReports from "views/admin/reports/components/ScheduledReports";

export default function Reports() {
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }} px={{ base: "15px", md: "0" }}>
      {/* KPI Cards */}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        gap={{ base: '15px', md: '20px' }}
        mb={{ base: '15px', md: '20px' }}>
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg='linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)'
              icon={<Icon w='28px' h='28px' as={MdDescription} color='white' />}
            />
          }
          name='Reports Generated'
          value='1,847'
          growth='+12%'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdDownload} color={brandColor} />
              }
            />
          }
          name='Downloads This Month'
          value='342'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg='linear-gradient(90deg, #38A169 0%, #48BB78 100%)'
              icon={<Icon w='28px' h='28px' as={MdEmail} color='white' />}
            />
          }
          name='Email Reports Sent'
          value='89'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={<Icon w='32px' h='32px' as={MdSchedule} color={brandColor} />}
            />
          }
          name='Scheduled Reports'
          value='12'
        />
      </SimpleGrid>

      {/* Generate Report Section */}
      <Card p={{ base: '20px', md: '30px' }} mb={{ base: '15px', md: '20px' }}>
        <Text color={textColor} fontSize={{ base: '18px', md: '22px' }} fontWeight='700' mb='20px'>
          Generate Custom Report
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap={{ base: '15px', md: '20px' }} mb='20px'>
          <Box>
            <Text fontSize='sm' fontWeight='500' mb='8px' color={textColor}>
              Report Type
            </Text>
            <Select placeholder='Select report type'>
              <option value='performance'>Performance Summary</option>
              <option value='sentiment'>Sentiment Analysis</option>
              <option value='bugs'>Bug Report</option>
              <option value='conversations'>Conversation Analytics</option>
              <option value='custom'>Custom Report</option>
            </Select>
          </Box>
          <Box>
            <Text fontSize='sm' fontWeight='500' mb='8px' color={textColor}>
              Date Range
            </Text>
            <Select placeholder='Select date range'>
              <option value='today'>Today</option>
              <option value='week'>Last 7 Days</option>
              <option value='month'>Last 30 Days</option>
              <option value='quarter'>Last Quarter</option>
              <option value='custom'>Custom Range</option>
            </Select>
          </Box>
          <Box>
            <Text fontSize='sm' fontWeight='500' mb='8px' color={textColor}>
              Format
            </Text>
            <Select placeholder='Select format'>
              <option value='pdf'>PDF</option>
              <option value='excel'>Excel (XLSX)</option>
              <option value='csv'>CSV</option>
              <option value='json'>JSON</option>
            </Select>
          </Box>
          <Flex align='flex-end'>
            <Button
              bg='linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)'
              color='white'
              _hover={{ opacity: 0.8 }}
              _active={{ opacity: 0.9 }}
              w='100%'
              leftIcon={<Icon as={MdDownload} />}
            >
              Generate Report
            </Button>
          </Flex>
        </SimpleGrid>
      </Card>

      {/* Report Templates and Scheduled Reports */}
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: '15px', md: '20px' }} mb={{ base: '15px', md: '20px' }}>
        <ReportTemplates />
        <ScheduledReports />
      </SimpleGrid>
    </Box>
  );
}
