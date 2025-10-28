import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Select,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Card from "components/card/Card.js";

export default function ToneSettings() {
  const { t } = useTranslation();
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const cardBg = useColorModeValue("white", "navy.800");
  const borderColor = useColorModeValue("secondaryGray.400", "whiteAlpha.100");
  const brandColor = useColorModeValue("brand.500", "brand.400");

  const [tone, setTone] = useState("professional");

  const handleSave = () => {
    // Save logic here
    console.log("Tone saved:", tone);
  };

  return (
    <Card bg={cardBg} p='20px'>
      <Flex direction='column' h='100%'>
        <Text
          color={textColor}
          fontSize='xl'
          fontWeight='700'
          mb='20px'>
          {t('aiSettings.toneSettings')}
        </Text>

        <Text
          color='secondaryGray.600'
          fontSize='sm'
          mb='10px'>
          {t('aiSettings.toneDescription')}
        </Text>

        <Select
          value={tone}
          onChange={(e) => setTone(e.target.value)}
          mb='20px'
          borderColor={borderColor}
          color={textColor}
          _focus={{ borderColor: brandColor }}>
          <option value="professional">{t('tone.professional')}</option>
          <option value="friendly">{t('tone.friendly')}</option>
          <option value="casual">{t('tone.casual')}</option>
          <option value="formal">{t('tone.formal')}</option>
          <option value="empathetic">{t('tone.empathetic')}</option>
          <option value="concise">{t('tone.concise')}</option>
        </Select>

        <Button
          bg={brandColor}
          color='white'
          _hover={{ bg: "brand.600" }}
          _active={{ bg: "brand.700" }}
          onClick={handleSave}
          mt='auto'>
          {t('aiSettings.saveTone')}
        </Button>
      </Flex>
    </Card>
  );
}
