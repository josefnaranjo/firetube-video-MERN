import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import moment from 'moment';

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

const Comment = ({comment}) => {
    const [channel, setChannel] = useState({});
    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
        const fetchComment = async () => {
            const res = await axios.get(`/users/find/${comment.userId}`);
            setChannel(res.data);
        };
        fetchComment();
    }, [comment.userId]);

    useEffect(() => {
        const formatDate = () => {
            const commentDate = moment(comment.createdAt).format('LLL');
            setFormattedDate(commentDate);
        };
        formatDate();
    }, [comment.createdAt]);

    return (
        <Container>
            <ProfilePic src={channel.img} alt="User profile picture" />
            <Details>
                <UserName>{channel.name}</UserName>
                <Date>{formattedDate}</Date>
                <Text>{comment.desc}</Text>
            </Details>
        </Container>
    );
};

export default Comment;
