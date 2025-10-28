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

export default function BasicRules() {
  const { t } = useTranslation();
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const cardBg = useColorModeValue("white", "navy.800");
  const borderColor = useColorModeValue("secondaryGray.400", "whiteAlpha.100");
  const brandColor = useColorModeValue("brand.500", "brand.400");

  const [rules, setRules] = useState(
    "1. Always greet customers professionally\n2. Respond within 30 seconds\n3. Never share sensitive information\n4. Escalate complex issues to human agents\n5. Use customer's name when possible"
  );

  const handleSave = () => {
    // Save logic here
    console.log("Rules saved:", rules);
  };

  return (
    <Card bg={cardBg} p='20px'>
      <Flex direction='column' h='100%'>
        <Text
          color={textColor}
          fontSize='xl'
          fontWeight='700'
          mb='20px'>
          {t('aiSettings.basicRules')}
        </Text>

        <Text
          color='secondaryGray.600'
          fontSize='sm'
          mb='10px'>
          {t('aiSettings.rulesDescription')}
        </Text>

        <Textarea
          value={rules}
          onChange={(e) => setRules(e.target.value)}
          placeholder={t('aiSettings.rulesDescription')}
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
          {t('aiSettings.saveRules')}
        </Button>
      </Flex>
    </Card>
  );
}
