import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Heading,
  Input,
  Button,
} from "@chakra-ui/react";

import { client } from "../../client";
import { PATHS } from "../../paths";
import { centeredStyle } from "../../App";

const generatePassword = () => {
  const length = 10;
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [generatedPassword, setGeneratedPassword] = useState("");

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
    const body = { email, password };
    client.post("/login", body).then((resp) => {
      window.localStorage.setItem("token", resp.data.token);
      navigate(PATHS.MANAGE_EXPENSE);
    });
  };

  return (
    <div style={centeredStyle}>
      <Card variant="elevated" size="lg" maxW="md" width="100%">
        <CardHeader>
          <Heading size="md">Login</Heading>
        </CardHeader>

        <CardBody>
          <>
            <Text mb="8px">Email</Text>
            <Input
              value={email}
              name="email"
              onChange={handleChange}
              size="md"
            />
          </>
          <>
            <Text mt={4} mb="8px">
              Password
            </Text>
            <Input
              type="password"
              value={password}
              name="password"
              onChange={handleChange}
              size="md"
            />
            {generatedPassword && (
              <Text color="gray.500" fontSize="sm" mb={2}>
                Generated Password: {generatedPassword}
              </Text>
            )}
            <Button
              mt={2}
              colorScheme="gray"
              size="sm"
              onClick={handleGeneratePassword}
            >
              Generate Password
            </Button>
          </>
          <Button mt={4} ml={40} colorScheme="twitter" onClick={handleLogin}>
            Log In
          </Button>
          <Button mt={4} ml={40} colorScheme="twitter" onClick={handleLogin}>
            Sign Up
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
