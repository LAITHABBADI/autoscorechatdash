import React from 'react';
import { Button, useColorModeValue, HStack, Text } from '@chakra-ui/react';
import { useLanguage } from 'contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const bgColor = useColorModeValue('secondaryGray.300', 'whiteAlpha.200');
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const activeColor = useColorModeValue('brand.500', 'brand.400');

  return (
    <HStack spacing={0} bg={bgColor} borderRadius='10px' p='2px'>
      <Button
        size='sm'
        variant='ghost'
        bg={language === 'en' ? 'white' : 'transparent'}
        color={language === 'en' ? activeColor : textColor}
        _hover={{ bg: language === 'en' ? 'white' : 'whiteAlpha.100' }}
        onClick={() => language !== 'en' && toggleLanguage()}
        fontWeight={language === 'en' ? '700' : '500'}
        borderRadius='8px'>
        EN
      </Button>
      <Button
        size='sm'
        variant='ghost'
        bg={language === 'ar' ? 'white' : 'transparent'}
        color={language === 'ar' ? activeColor : textColor}
        _hover={{ bg: language === 'ar' ? 'white' : 'whiteAlpha.100' }}
        onClick={() => language !== 'ar' && toggleLanguage()}
        fontWeight={language === 'ar' ? '700' : '500'}
        borderRadius='8px'>
        AR
      </Button>
    </HStack>
  );
}
