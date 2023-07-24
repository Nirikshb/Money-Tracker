import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Heading,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import { IoMdEye, IoMdEyeOff } from "react-icons/io"; // Import the eye icons
import { client } from "../../client";
import { PATHS } from "../../paths";
import { centeredStyle } from "../../App";

const generatePassword = () => {
  const length = 10;
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
};

const Login = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in"); // Set the initial email value
  const [password, setPassword] = useState("cityslicka"); // Set the initial password value
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    name === "email" ? setEmail(value) : setPassword(value);
  };

  const handleGeneratePassword = () => {
    const password = generatePassword();
    setGeneratedPassword(password);
  };

  const handleLogin = () => {
    // Reset previous error messages
    setEmailError("");
    setPasswordError("");

    if (!email) {
      setEmailError("Please enter your email.");
      return;
    }

    if (!password) {
      setPasswordError("Please enter your password.");
      return;
    }

    const body = { email, password };
    client.post("/login", body).then((resp) => {
      window.localStorage.setItem("token", resp.data.token);
      navigate(PATHS.MANAGE_EXPENSE);
    });
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const password = generatePassword();
    setGeneratedPassword(password);
  }, []);

  return (
    <div style={centeredStyle}>
      <Card variant="elevated" size="lg" maxW="md" width="100%">
        <CardHeader size="lg" color="gray.500">
          Money Tracker App
        </CardHeader>

        <CardHeader>
          <Heading size="md">Login</Heading>
        </CardHeader>

        <CardBody>
          <>
            <Text mb="8px">Email</Text>
            <Input value={email} name="email" onChange={handleChange} size="md" />
            {emailError && <Text color="red">{emailError}</Text>}
          </>
          <>
            <Text mt={4} mb="8px">
              Password
            </Text>
            <InputGroup size="md">
              <Input
                type={showPassword ? "text" : "password"} // Use the state to toggle password visibility
                value={password}
                name="password"
                onChange={handleChange}
                pr="4rem" // Add some padding-right to accommodate the icon
              />
              <InputRightElement width="4rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={togglePasswordVisibility}
                  bg="transparent"
                  _hover={{ bg: "transparent" }}
                >
                  {showPassword ? <IoMdEye /> : <IoMdEyeOff />} {/* Render the eye icons based on state */}
                </Button>
              </InputRightElement>
            </InputGroup>
          </>
          {/* {generatedPassword && (
            <Text color="gray.500" fontSize="sm" mb={2}>
              Generated Password: {generatedPassword}
            </Text>
          )}
          {passwordError && <Text color="red">{passwordError}</Text>}
          <Button mt={2} colorScheme="gray" size="sm" onClick={handleGeneratePassword}>
            Generate Password
          </Button> */}
          <Button mt={4} ml={40} colorScheme="twitter" onClick={handleLogin}>
            Log In
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
