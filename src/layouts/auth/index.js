import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import routes from '../../routes';
import dynamic from 'next/dynamic';

// Chakra imports
import { Box, useColorModeValue } from '@chakra-ui/react';

// Layout components
import { SidebarContext } from 'contexts/SidebarContext';

const SignInCentered = dynamic(() => import('views/auth/signIn'));

// Custom Chakra theme
export default function Auth() {
  const router = useRouter();
  // states and functions
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(router.asPath);
    if (typeof document !== 'undefined') {
      document.documentElement.dir = 'ltr';
    }
  }, [router.asPath]);

  // functions for changing the states from components
  const getRoute = () => {
    return currentPath !== '/auth/full-screen-maps';
  };

  const getActiveComponent = () => {
    return <SignInCentered />;
  };

  const authBg = useColorModeValue('white', 'navy.900');
  return (
    <Box>
      <SidebarContext.Provider
        value={{
          toggleSidebar,
          setToggleSidebar,
        }}
      >
        <Box
          bg={authBg}
          float="right"
          minHeight="100vh"
          height="100%"
          position="relative"
          w="100%"
          transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
          transitionDuration=".2s, .2s, .35s"
          transitionProperty="top, bottom, width"
          transitionTimingFunction="linear, linear, ease"
        >
          {getRoute() ? (
            <Box mx="auto" minH="100vh">
              {getActiveComponent()}
            </Box>
          ) : null}
        </Box>
      </SidebarContext.Provider>
    </Box>
  );
}
