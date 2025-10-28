import '../src/assets/css/App.css';
import '../src/assets/css/Contact.css';
import '../src/assets/css/MiniCalendar.css';
import '../src/i18n';
import { ChakraProvider } from '@chakra-ui/react';
import initialTheme from '../src/theme/theme';
import { LanguageProvider } from '../src/contexts/LanguageContext';
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const [currentTheme, setCurrentTheme] = useState(initialTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ChakraProvider theme={currentTheme}>
      <LanguageProvider>
        <Component {...pageProps} theme={currentTheme} setTheme={setCurrentTheme} />
      </LanguageProvider>
    </ChakraProvider>
  );
}

export default MyApp;
