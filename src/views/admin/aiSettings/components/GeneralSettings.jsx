import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Textarea,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Card from "components/card/Card.js";

export default function GeneralSettings() {
  const { t } = useTranslation();
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const cardBg = useColorModeValue("white", "navy.800");
  const borderColor = useColorModeValue("secondaryGray.400", "whiteAlpha.100");
  const brandColor = useColorModeValue("brand.500", "brand.400");

  const [settings, setSettings] = useState(
    "Response Length: Medium\nLanguage: English\nEmoji Usage: Minimal\nPersonalization: Enabled\nContext Memory: 10 messages"
  );

  const handleSave = () => {
    // Save logic here
    console.log("Settings saved:", settings);
  };

  return (
    <Card bg={cardBg} p='20px'>
      <Flex direction='column' h='100%'>
        <Text
          color={textColor}
          fontSize='xl'
          fontWeight='700'
          mb='20px'>
          {t('aiSettings.generalSettings')}
        </Text>

        <Text
          color='secondaryGray.600'
          fontSize='sm'
          mb='10px'>
          {t('aiSettings.settingsDescription')}
        </Text>

        <Textarea
          value={settings}
          onChange={(e) => setSettings(e.target.value)}
          placeholder={t('aiSettings.settingsDescription')}
          rows={8}
          mb='20px'
          borderColor={borderColor}
          color={textColor}
          _focus={{ borderColor: brandColor }}
          resize='vertical'
        />

        <Button
          bg={brandColor}
          color='white'
          _hover={{ bg: "brand.600" }}
          _active={{ bg: "brand.700" }}
          onClick={handleSave}
          mt='auto'>
          {t('aiSettings.saveSettings')}
        </Button>
      </Flex>
    </Card>
  );
}
