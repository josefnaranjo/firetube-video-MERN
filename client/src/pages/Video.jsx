import { AddTaskOutlined, ReplyOutlined, ThumbDownOutlined, ThumbUpOutlined } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
import Thumbnail from '../img/channel.png'
import Comments from '../components/Comments';
import Card from '../components/Card';

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div`
  
`;

const Recommendation = styled.div`
  flex: 2;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCount = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: #FF0000;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  transition: all .3s ease-in-out;
`;

const Divider = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${( {theme} ) => theme.soft};
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
        <iframe 
          width="100%" 
          height="720" 
          src="https://www.youtube.com/embed/bD4dVGhbRAQ?si=h6cN21Qvwnel6sdw" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen
        ></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>1M  views • 3 years ago</Info>
          <Buttons>
            <Button><ThumbUpOutlined />777</Button>
            <Button><ThumbDownOutlined />22</Button>
            <Button><ReplyOutlined />Share</Button>
            <Button><AddTaskOutlined />Save</Button>
          </Buttons>
        </Details>
        <Divider />
        <Channel>
          <ChannelInfo>
            <Image src={ Thumbnail } />
            <ChannelDetails>
              <ChannelName>El Shredded Cat</ChannelName>
              <ChannelCount>1.5M subscribers</ChannelCount>
              <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis placeat excepturi, maxime explicabo repudiandae saepe numquam perspiciatis minus possimus. Totam ullam porro quasi delectus necessitatibus nihil a ab, earum maxime?</Description>
            </ChannelDetails>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <Divider />
        <Comments />
      </Content>
      <Recommendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommendation>
    </Container>
  )
}

export default Video