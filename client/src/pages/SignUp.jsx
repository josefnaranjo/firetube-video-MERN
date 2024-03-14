import React, { useState } from "react";
import axios from "axios";
import styled from 'styled-components';
import { useNavigate }  from 'react-router-dom';

const Input = styled.input`
  width: 100%;
  borden: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  transition: all .2s ease-in-out;
`;

const Signup = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/auth/signup", formData);
            // Handle successful sign-up (e.g., redirect user to login page)
            navigate("/");
        } catch (error) {
        // Handle sign-up error (e.g., display error message to user)
        }
    };

  return (
    <Container>
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                />
                <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
                <Input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                />
                <Button type="submit">Sign Up</Button>
            </form>
        </Wrapper>
    </Container>
  );
};

export default Signup;
