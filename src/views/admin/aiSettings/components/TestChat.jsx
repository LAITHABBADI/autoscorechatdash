import React, { useState, useRef } from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
  IconButton,
  Badge,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { MdSend, MdAttachFile, MdClose } from "react-icons/md";
import Card from "components/card/Card.js";

export default function TestChat() {
  const { t } = useTranslation();
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const cardBg = useColorModeValue("white", "navy.800");
  const messageBg = useColorModeValue("secondaryGray.300", "navy.700");
  const aiBg = useColorModeValue("brand.100", "brand.900");
  const borderColor = useColorModeValue("secondaryGray.400", "whiteAlpha.100");
  const brandColor = useColorModeValue("brand.500", "brand.400");

  const [messages, setMessages] = useState([
    {
      role: "ai",
      content: t('chat.greeting'),
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleSendMessage = () => {
    if (inputValue.trim() === "" && !uploadedFile) return;

    // Add user message
    const userMessage = {
      role: "user",
      content: inputValue,
      timestamp: new Date().toLocaleTimeString(),
      file: uploadedFile,
    };
    setMessages([...messages, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage = {
        role: "ai",
        content: uploadedFile
          ? `${t('chat.fileReceived')} "${uploadedFile.name}". ${t('chat.analyzing')}`
          : t('chat.testResponse'),
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);

    setInputValue("");
    setUploadedFile(null);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Card bg={cardBg} p='20px'>
      <Flex direction='column'>
        <Text
          color={textColor}
          fontSize='xl'
          fontWeight='700'
          mb='20px'>
          {t('aiSettings.testChat')}
        </Text>

        {/* Chat Messages */}
        <Box
          h={{ base: '300px', md: '400px' }}
          overflowY='auto'
          mb='20px'
          p={{ base: '10px', md: '15px' }}
          borderRadius='15px'
          bg={messageBg}
          borderWidth='1px'
          borderColor={borderColor}>
          <VStack spacing={3} align='stretch'>
            {messages.map((message, index) => (
              <Flex
                key={index}
                justify={message.role === "user" ? "flex-end" : "flex-start"}>
                <Box
                  maxW={{ base: '85%', md: '70%' }}
                  bg={message.role === "user" ? brandColor : aiBg}
                  color={message.role === "user" ? "white" : textColor}
                  p={{ base: '10px 12px', md: '12px 16px' }}
                  borderRadius='12px'>
                  {message.file && (
                    <Badge colorScheme='red' mb='8px'>
                      📎 {message.file.name}
                    </Badge>
                  )}
                  <Text fontSize='sm'>{message.content}</Text>
                  <Text
                    fontSize='xs'
                    opacity={0.7}
                    mt='4px'>
                    {message.timestamp}
                  </Text>
                </Box>
              </Flex>
            ))}
          </VStack>
        </Box>

        {/* File Upload Preview */}
        {uploadedFile && (
          <Flex
            mb='10px'
            p='10px'
            bg={messageBg}
            borderRadius='8px'
            align='center'
            justify='space-between'>
            <HStack>
              <Icon as={MdAttachFile} color={brandColor} />
              <Text fontSize='sm' color={textColor}>
                {uploadedFile.name}
              </Text>
            </HStack>
            <IconButton
              size='sm'
              icon={<MdClose />}
              onClick={handleRemoveFile}
              variant='ghost'
            />
          </Flex>
        )}

        {/* Input Area */}
        <Flex gap={{ base: '8px', md: '10px' }} flexWrap={{ base: 'wrap', sm: 'nowrap' }}>
          <input
            ref={fileInputRef}
            type='file'
            accept='.pdf,.doc,.docx,.txt,.csv,.xlsx'
            style={{ display: "none" }}
            onChange={handleFileUpload}
          />
          <IconButton
            icon={<Icon as={MdAttachFile} w='20px' h='20px' />}
            onClick={() => fileInputRef.current?.click()}
            variant='outline'
            borderColor={borderColor}
            color={brandColor}
            _hover={{ bg: messageBg }}
            size={{ base: 'sm', md: 'md' }}
          />
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={t('aiSettings.typeMessage')}
            borderColor={borderColor}
            color={textColor}
            _focus={{ borderColor: brandColor }}
            flex='1'
            size={{ base: 'sm', md: 'md' }}
          />
          <Button
            bg={brandColor}
            color='white'
            _hover={{ bg: "brand.600" }}
            _active={{ bg: "brand.700" }}
            onClick={handleSendMessage}
            leftIcon={<Icon as={MdSend} />}
            size={{ base: 'sm', md: 'md' }}
            minW={{ base: '80px', md: 'auto' }}>
            {t('aiSettings.send')}
          </Button>
        </Flex>

        <Text fontSize='xs' color='secondaryGray.600' mt='10px'>
          {t('aiSettings.uploadHint')}
        </Text>
      </Flex>
    </Card>
  );
}
