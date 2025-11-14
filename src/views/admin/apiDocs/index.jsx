// Chakra imports
import {
  Box,
  SimpleGrid,
  useColorModeValue,
  Icon,
  Flex,
  Text,
  Code,
  Badge,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  VStack,
  HStack,
  Divider,
  useClipboard,
  Button,
} from "@chakra-ui/react";
import React from "react";
import {
  MdApi,
  MdCode,
  MdCheck,
  MdContentCopy,
} from "react-icons/md";
import Card from "components/card/Card";
import IconBox from "components/icons/IconBox";
import MiniStatistics from "components/card/MiniStatistics";

export default function ApiDocs() {
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.700", "secondaryGray.500");
  const cardBg = useColorModeValue("white", "navy.800");
  const codeBg = useColorModeValue("secondaryGray.300", "navy.900");
  const borderColor = useColorModeValue("secondaryGray.400", "whiteAlpha.200");

  // Example code snippets
  const trainReportExample = `// Create a new chat session with report content
const response = await fetch('/api/train-report', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    reportId: 'RPT-12345', // Required
    reportContent: 'Your report content here...' // Required
  })
});

const data = await response.json();
console.log('Chat ID:', data.chatId);
console.log('Report ID:', data.reportId);`;

  const chatExample = `// Send a message to the chat
const response = await fetch('/api/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    reportId: 'RPT-12345',
    message: 'What are the key findings?'
  })
});

const data = await response.json();
console.log('AI Response:', data.aiResponse);`;

  const curlTrainReportExample = `curl -X POST http://localhost:3000/api/train-report \\
  -H "Content-Type: application/json" \\
  -d '{
    "reportId": "RPT-12345",
    "reportContent": "Your report content here..."
  }'`;

  const curlChatExample = `curl -X POST http://localhost:3000/api/chat \\
  -H "Content-Type: application/json" \\
  -d '{
    "reportId": "RPT-12345",
    "message": "What are the key findings?"
  }'`;

  const reactExample = `import { useState } from 'react';

function ChatWithReport() {
  const [reportId, setReportId] = useState(null);
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  // Create chat session with report content
  const createSession = async (reportId, reportContent) => {
    const res = await fetch('/api/train-report', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        reportId,
        reportContent
      })
    });
    const data = await res.json();
    if (data.success) setReportId(data.reportId);
  };

  // Send message
  const sendMessage = async () => {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reportId, message })
    });
    const data = await res.json();
    if (data.success) setResponse(data.aiResponse);
  };

  return (
    <div>
      <button onClick={() => createSession('RPT-12345', 'Report content...')}>
        Start Chat
      </button>
      {reportId && (
        <>
          <input value={message} onChange={e => setMessage(e.target.value)} />
          <button onClick={sendMessage}>Send</button>
          {response && <p>AI: {response}</p>}
        </>
      )}
    </div>
  );
}`;

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }} px={{ base: "15px", md: "0" }}>
      {/* KPI Cards */}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 2 }}
        gap={{ base: '15px', md: '20px' }}
        mb={{ base: '15px', md: '20px' }}>
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg='linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)'
              icon={<Icon w='28px' h='28px' as={MdApi} color='white' />}
            />
          }
          name='API Endpoints'
          value='2'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={<Icon w='32px' h='32px' as={MdCode} color={brandColor} />}
            />
          }
          name='Base URL'
          value='/api'
        />
      </SimpleGrid>


      {/* API Endpoints */}
      <Tabs variant='soft-rounded' colorScheme='blue' mb={{ base: '15px', md: '20px' }}>
        <Card p={{ base: '15px', md: '20px' }}>
          <TabList flexWrap='wrap'>
            <Tab fontSize={{ base: 'sm', md: 'md' }}>
              <Icon as={MdApi} mr='5px' /> Train Report API
            </Tab>
            <Tab fontSize={{ base: 'sm', md: 'md' }}>
              <Icon as={MdApi} mr='5px' /> Chat API
            </Tab>
          </TabList>

          <TabPanels>
            {/* Train Report API */}
            <TabPanel px='0'>
              <VStack align='stretch' spacing='20px'>
                <Box>
                  <HStack mb='10px'>
                    <Badge colorScheme='green' fontSize='md' px='10px' py='5px'>POST</Badge>
                    <Code fontSize='md' p='5px 10px'>/api/train-report</Code>
                  </HStack>
                  <Text color={textColorSecondary} fontSize='md'>
                    Create or retrieve a chat session for a specific report. If a session already exists for the provided reportId, it returns the existing session.
                  </Text>
                </Box>

                <Divider />

                <Box>
                  <Text color={textColor} fontSize='lg' fontWeight='600' mb='10px'>
                    Request Body
                  </Text>
                  <CodeBlock
                    code={`{
  "reportId": "RPT-12345",                   // Required: unique identifier for the report
  "reportContent": "Your report content..."  // Required: the actual content of the report
}`}
                    bg={codeBg}
                  />
                </Box>

                <Box>
                  <Text color={textColor} fontSize='lg' fontWeight='600' mb='10px'>
                    Response
                  </Text>
                  <CodeBlock
                    code={`{
  "success": true,
  "chatId": "CHAT-1234567890-abc123xyz",
  "reportId": "RPT-1234567890-def456uvw",
                  "createdAt": "2025-11-11T10:30:00.000Z",
  "message": "New chat session created"
}`}
                    bg={codeBg}
                  />
                </Box>

                <Box>
                  <Text color={textColor} fontSize='lg' fontWeight='600' mb='10px'>
                    Examples
                  </Text>
                  <Tabs size='sm' variant='enclosed'>
                    <TabList>
                      <Tab>JavaScript</Tab>
                      <Tab>cURL</Tab>
                      <Tab>React</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel px='0'>
                        <CodeBlock code={trainReportExample} bg={codeBg} />
                      </TabPanel>
                      <TabPanel px='0'>
                        <CodeBlock code={curlTrainReportExample} bg={codeBg} />
                      </TabPanel>
                      <TabPanel px='0'>
                        <CodeBlock code={reactExample} bg={codeBg} />
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </Box>
              </VStack>
            </TabPanel>

            {/* Chat API */}
            <TabPanel px='0'>
              <VStack align='stretch' spacing='20px'>
                <Box>
                  <HStack mb='10px'>
                    <Badge colorScheme='green' fontSize='md' px='10px' py='5px'>POST</Badge>
                    <Code fontSize='md' p='5px 10px'>/api/chat</Code>
                  </HStack>
                  <Text color={textColorSecondary} fontSize='md'>
                    Send a message to an existing chat session and receive an AI-generated response based on the report data.
                  </Text>
                </Box>

                <Divider />

                <Box>
                  <Text color={textColor} fontSize='lg' fontWeight='600' mb='10px'>
                    Request Body
                  </Text>
                  <CodeBlock
                    code={`{
  "reportId": "RPT-12345",                   // Required
  "message": "What are the key findings?"    // Required
}`}
                    bg={codeBg}
                  />
                </Box>

                <Box>
                  <Text color={textColor} fontSize='lg' fontWeight='600' mb='10px'>
                    Response
                  </Text>
                  <CodeBlock
                    code={`{
  "success": true,
  "reportId": "RPT-12345",
  "messageId": "MSG-1234567890-xyz789abc",
  "userMessage": "What are the key findings?",
  "aiResponse": "Based on the analysis...",
  "timestamp": "2025-11-11T10:35:00.000Z",
  "messageCount": 1
}`}
                    bg={codeBg}
                  />
                </Box>

                <Box>
                  <Text color={textColor} fontSize='lg' fontWeight='600' mb='10px'>
                    Examples
                  </Text>
                  <Tabs size='sm' variant='enclosed'>
                    <TabList>
                      <Tab>JavaScript</Tab>
                      <Tab>cURL</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel px='0'>
                        <CodeBlock code={chatExample} bg={codeBg} />
                      </TabPanel>
                      <TabPanel px='0'>
                        <CodeBlock code={curlChatExample} bg={codeBg} />
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </Box>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Card>
      </Tabs>

      {/* Error Codes */}
      <Card p={{ base: '20px', md: '30px' }} mb={{ base: '15px', md: '20px' }}>
        <Text color={textColor} fontSize={{ base: '18px', md: '22px' }} fontWeight='700' mb='20px'>
          Error Codes
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap='15px'>
          <ErrorCodeItem code='200' title='Success' description='Request completed successfully' color='green' />
          <ErrorCodeItem code='201' title='Created' description='New resource created' color='green' />
          <ErrorCodeItem code='400' title='Bad Request' description='Missing or invalid parameters' color='orange' />
          <ErrorCodeItem code='404' title='Not Found' description='Resource not found' color='red' />
          <ErrorCodeItem code='405' title='Method Not Allowed' description='Wrong HTTP method used' color='red' />
          <ErrorCodeItem code='500' title='Server Error' description='Internal server error' color='red' />
        </SimpleGrid>
      </Card>

    </Box>
  );
}

// Helper Component: Code Block with Copy Button
function CodeBlock({ code, bg }) {
  const { hasCopied, onCopy } = useClipboard(code);
  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <Box position='relative'>
      <Box
        as='pre'
        bg={bg}
        p='15px'
        borderRadius='10px'
        overflow='auto'
        fontSize='sm'
        fontFamily='monospace'
        color={textColor}
      >
        <code>{code}</code>
      </Box>
      <Button
        position='absolute'
        top='10px'
        right='10px'
        size='sm'
        onClick={onCopy}
        leftIcon={<Icon as={hasCopied ? MdCheck : MdContentCopy} />}
      >
        {hasCopied ? 'Copied' : 'Copy'}
      </Button>
    </Box>
  );
}

// Helper Component: Error Code Item
function ErrorCodeItem({ code, title, description, color }) {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.700", "secondaryGray.500");
  const cardBg = useColorModeValue("secondaryGray.300", "navy.900");

  return (
    <Box bg={cardBg} p='15px' borderRadius='10px'>
      <HStack mb='5px'>
        <Badge colorScheme={color} fontSize='md' px='8px' py='3px'>
          {code}
        </Badge>
        <Text color={textColor} fontWeight='600'>
          {title}
        </Text>
      </HStack>
      <Text color={textColorSecondary} fontSize='sm'>
        {description}
      </Text>
    </Box>
  );
}

// Helper Component: Info Item
function InfoItem({ title, description }) {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.700", "secondaryGray.500");

  return (
    <Box>
      <Text color={textColor} fontWeight='600' mb='5px'>
        {title}
      </Text>
      <Text color={textColorSecondary} fontSize='sm'>
        {description}
      </Text>
    </Box>
  );
}
