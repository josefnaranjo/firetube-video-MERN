import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import styled from 'styled-components';
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate }  from 'react-router-dom';
import Signup from './SignUp';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
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

const Title = styled.h1`
  font-size: 24px;
`;

const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;

const Input = styled.input`
  width: 100%;
  borden: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
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

const Info = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Links = styled.div`
  margin-left: 50px;
`;

const Link = styled.span`
  margin-left: 30px;
`;

const SignIn = () => {
  const navigate = useNavigate();
  const [name, setName ] = useState("");
  const [email, setEmail ] = useState("");
  const [password, setPassword ] = useState("");
  const dispatch = useDispatch()

  const handleLogin = async (event) => {
    event.preventDefault();
    dispatch(loginStart())
    try {
      const res = await axios.post("/auth/signin", {name, password})
      dispatch(loginSuccess(res.data))
      navigate("/");
    } catch (error) {
      dispatch(loginFailure())
    }
  }

  const signInWithGoogle = async () => {
    dispatch(loginStart())
    signInWithPopup(auth, provider)
    .then((result) => {
      axios.post("/auth/google", {
        name: result.user.displayName || "Anonymous",
        email: result.user.email,
        img: result.user.photoURL,
      }).then((res) => {
        dispatch(loginSuccess(res.data));
        navigate("/");
      });
    })
    .catch((error) => {
      dispatch(loginFailure());
    });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Sign  In</Title>
        <Subtitle>to continue to FireTube</Subtitle>
        <Input placeholder='Username' onChange={(user) => setName(user.target.value)} />
        <Input type="password" placeholder='Password' onChange={(pass) => setPassword(pass.target.value)} />
        <Button onClick={handleLogin}>Sign  in</Button>
        <Title>or</Title>
        <Button onClick={signInWithGoogle}>Sign in with Google</Button>
        <Title>or</Title>
        <Title>Sign Up</Title>
        <Signup />
      </Wrapper>
      <Info>
        English (US)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </Info>
    </Container>
  )
}

export default SignIn