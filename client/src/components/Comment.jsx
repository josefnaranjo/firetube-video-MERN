import React from 'react'
import styled from 'styled-components'
import Thumbnail from '../img/channel.png'

const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0px;
`;

const ProfilePic = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${({ theme }) => theme.text};
`;

const UserName = styled.span`
    font-size: 13px;
    font-weight: 500;
`;

const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.textSoft};
    margin-left: 5px;
`;

const Text = styled.span`
    font-size: 14px;
`;

const Comment = () => {
  return (
    <Container>
        <ProfilePic src={Thumbnail} alt="User profile picture" />
        <Details>
            <UserName>J.F</UserName>
            <Date>2 days ago</Date>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in dui eget...</Text>
        </Details>
    </Container>
  )
}

export default Comment