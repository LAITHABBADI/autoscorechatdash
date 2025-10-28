/* eslint-disable */
/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React, { useState } from "react";
import { useRouter } from "next/router";
// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
// Custom components
import DefaultAuth from "layouts/auth/Default";
// Assets
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";

function SignIn() {
  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const brandColor = useColorModeValue("brand.500", "brand.400");
  const borderColor = useColorModeValue("secondaryGray.400", "whiteAlpha.100");

  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const toast = useToast();

  const handleClick = () => setShow(!show);

  const handleSignIn = () => {
    setIsLoading(true);

    // Static authentication
    if (username === "admin" && password === "admin") {
      localStorage.setItem("isAuthenticated", "true");
      toast({
        title: "Sign in successful",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      setTimeout(() => {
        router.push("/admin/default");
      }, 500);
    } else {
      toast({
        title: "Invalid credentials",
        description: "Username and password must both be 'admin'",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setIsLoading(false);
    }
  };
  return (
    <DefaultAuth>
      <Flex
        maxW={{ base: "100%", md: "max-content" }}
        w='100%'
        mx={{ base: "auto", lg: "0px" }}
        me='auto'
        h='100%'
        alignItems='start'
        justifyContent='center'
        mb={{ base: "30px", md: "60px" }}
        px={{ base: "25px", md: "0px" }}
        mt={{ base: "40px", md: "14vh" }}
        flexDirection='column'>
        <Box me='auto'>
          <Heading color={textColor} fontSize={{ base: '28px', md: '36px' }} mb='10px'>
            Sign In
          </Heading>
          <Text
            mb={{ base: '24px', md: '36px' }}
            ms='4px'
            color={textColorSecondary}
            fontWeight='400'
            fontSize={{ base: 'sm', md: 'md' }}>
            Enter admin credentials to access the dashboard
          </Text>
        </Box>
        <Flex
          zIndex='2'
          direction='column'
          w={{ base: "100%", md: "420px" }}
          maxW='100%'
          background='transparent'
          borderRadius='15px'
          mx={{ base: "auto", lg: "unset" }}
          me='auto'
          mb={{ base: "20px", md: "auto" }}>
          <FormControl>
            <FormLabel
              display='flex'
              ms='4px'
              fontSize={{ base: 'xs', md: 'sm' }}
              fontWeight='500'
              color={textColor}
              mb='8px'>
              Username<Text color={brandStars}>*</Text>
            </FormLabel>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              isRequired={true}
              variant='auth'
              fontSize={{ base: 'sm', md: 'sm' }}
              type='text'
              placeholder='admin'
              mb={{ base: '16px', md: '24px' }}
              fontWeight='500'
              size={{ base: 'md', md: 'lg' }}
              borderColor={borderColor}
              _focus={{ borderColor: brandColor }}
              onKeyPress={(e) => e.key === "Enter" && handleSignIn()}
            />
            <FormLabel
              ms='4px'
              fontSize={{ base: 'xs', md: 'sm' }}
              fontWeight='500'
              color={textColor}
              display='flex'>
              Password<Text color={brandStars}>*</Text>
            </FormLabel>
            <InputGroup size={{ base: 'md', md: 'md' }}>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isRequired={true}
                fontSize={{ base: 'sm', md: 'sm' }}
                placeholder='admin'
                mb={{ base: '16px', md: '24px' }}
                size={{ base: 'md', md: 'lg' }}
                type={show ? "text" : "password"}
                variant='auth'
                borderColor={borderColor}
                _focus={{ borderColor: brandColor }}
                onKeyPress={(e) => e.key === "Enter" && handleSignIn()}
              />
              <InputRightElement display='flex' alignItems='center' mt={{ base: '0px', md: '4px' }}>
                <Icon
                  color={textColorSecondary}
                  _hover={{ cursor: "pointer" }}
                  as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                  onClick={handleClick}
                />
              </InputRightElement>
            </InputGroup>
            <Button
              fontSize={{ base: 'sm', md: 'sm' }}
              bg={brandColor}
              color='white'
              fontWeight='500'
              w='100%'
              h={{ base: '45px', md: '50px' }}
              mb={{ base: '16px', md: '24px' }}
              onClick={handleSignIn}
              isLoading={isLoading}
              _hover={{ bg: "brand.600" }}
              _active={{ bg: "brand.700" }}>
              Sign In
            </Button>
          </FormControl>
          <Text color={textColorSecondary} fontWeight='400' fontSize={{ base: 'xs', md: 'sm' }} textAlign='center'>
            Default credentials: admin / admin
          </Text>
        </Flex>
      </Flex>
    </DefaultAuth>
  );
}

export default SignIn;
