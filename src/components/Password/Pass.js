import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const PasswordGenerator = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [generatedPassword, setGeneratedPassword] = useState('');

  const generatePassword = () => {
    const length = 10; // Length of the password
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }

    return password;
  };

  const handleGeneratePassword = () => {
    const newPassword = generatePassword();
    setGeneratedPassword(newPassword);
  };

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Handle successful sign-up
        console.log('Sign-up successful:', userCredential.user);
      })
      .catch((error) => {
        // Handle sign-up error
        console.log('Sign-up error:', error.message);
      });
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleGeneratePassword}>Generate Password</button>
      <p>Generated Password: {generatedPassword}</p>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default PasswordGenerator;
