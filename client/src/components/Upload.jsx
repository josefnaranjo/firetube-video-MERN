import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    background-color: #000000a9;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 600px;
    height: 450px;
    background-color: ${({ theme }) => theme.bgLighter};
    color: ${({ theme }) => theme.text};
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .16), 0 3px 6px rgba(0, 0, 0, .23);
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
`;

const Close = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
`;

const Title = styled.h1`
    text-align: center;
`;

const Input = styled.input`
    border: 1px solid ${({ theme }) => theme.soft};
    color: ${({ theme }) => theme.text};
    border-radius: 3px;
    padding: 10px;
    background-color: transparent;
    z-index: 999;
`;

const Desc = styled.textarea`
    border: 1px solid ${({ theme }) => theme.soft};
    color: ${({ theme }) => theme.text};
    border-radius: 3px;
    padding: 10px;
    background-color: transparent;
`;

const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`;

const Label = styled.label`
    font-size: 14px;
`;

const Upload = ({setOpen}) => {
  return (
    <Container>
        <Wrapper>
            <Close onClick={()=> setOpen(false)}>
                X
            </Close>
            <Title>
                Upload a video
            </Title>
            <Label>Video:</Label>
            <Input type='file' accept='video/*' />
            <Input type='text' placeholder='Video title...' />
            <Desc placeholder='Description...' rows={8} />
            <Input type='text' placeholder='Separate tags with commas...' />
            <Label>Image:</Label>
            <Input type='file' accept='image/*' />
            <Button>Upload</Button>
        </Wrapper>
    </Container>
  )
}

export default Upload