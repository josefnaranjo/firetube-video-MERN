import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Comment from './Comment';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Container = styled.div``;

const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const ProfilePic = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

const Input = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.soft};
    background-color: transparent;
    outline: none;
    padding: 5px;
`;

const Comments = ({videoId}) => {
    const { currentUser } = useSelector((state) => state.user);
    const [comments, setComments] = useState([]);
    const [newCommentText, setNewCommentText] = useState('');
    const { currentVideo } = useSelector((state) => state.video);

    useEffect(() => {
        const fetchComments = async () => {
          try {
            const res = await axios.get(`/comments/${videoId}`);
            setComments(res.data);
          } catch (err) {}
        };
        fetchComments();
      }, [videoId]);

      const handleAddComment = async () => {
        try {
            const currentDate = new Date(); // Get the current date and time
            // Call API to add comment
            const res = await axios.post('/comments/', {
                desc: newCommentText,
                videoId: currentVideo._id,
                createdAt: currentDate // Include the current date with the comment
            });
            // Update local state with the new comment
            setComments([...comments, res.data]);
            // Clear the input field after adding the comment
            setNewCommentText('');
        } catch (err) {
            console.error('Error adding comment:', err);
        }
    };
    

  return (
    <Container>
        <NewComment>
            <ProfilePic src={currentUser.img} alt="profile pic" />
            <Input 
                placeholder='Add a comment...'
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleAddComment();
                    }
                }}
            />
        </NewComment>
        {comments.map(comment => (
            <Comment key={comment._id} comment={comment} />
        ))}
    </Container>
  )
}

export default Comments;
