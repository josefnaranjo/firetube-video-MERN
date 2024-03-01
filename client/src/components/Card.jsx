import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Thumbnail from '../img/thumbnail1.png'
import Channel from '../img/channel.png'
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';
import axios from "axios";

const Container = styled.div`
  width: ${ (props) => props.type !== "sm" && "360px" };
  margin-bottom: ${ (props) => props.type === "sm" ? "10px" : "45px" };
  display: ${ (props) => props.type === "sm" && "flex" };
  cursor: pointer;
  gap: 10px;
`;

const Image = styled.img`
  width: 100%
  height: ${ (props) => props.type === "sm" ? "120px" : "202px" };
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${ (props) => props.type !== "sm" && "16px" };
  gap: 12px;
  flex: 1;
`;

const ChannelImg = styled.img`
  display: ${ (props) => props.type === "sm" && "none" };
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Description = styled.div`

`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 8px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type, video }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users/find/${video.userId}`);

      setUser(res.data);
    }
    fetchUser();
  }, [video.userId])

  return (
    <Link to="video/test" style={{textDecoration: "none"}}>
      <Container type={ type } >
      <Image 
        type={ type } 
        src={ video.imgUrl } 
      />
      <Details type={ type } >
        <ChannelImg 
          type={ type } 
          src={ user.img } 
        />
        <Description>
          <Title>{video.title}</Title>
          <ChannelName>{user.name}</ChannelName>
          <Info>{video.views} views • {format(video.createdAt)} </Info>
        </Description>
      </Details>
    </Container>
    </Link>

  )
}

export default Card