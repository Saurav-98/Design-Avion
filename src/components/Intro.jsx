import React from 'react';
import styled from 'styled-components';
import woman from '../img/woman-ipad.jpeg';

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Adventure in Creative Age</Title>
        <Desc>
          We believe that designing products and services in close partnership
          with our clients is the only way to have a real impact on their
          business.
        </Desc>
        <Info>
          <Button>Start a Project</Button>
          <Contact>
            <Phone>Call Us (012) 345 - 6789</Phone>
            <ContactText>For any question or Concern</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={woman} />
      </Right>
    </Container>
  );
};

export default Intro;

const Container = styled.section`
  background-color: #de0101;
  height: calc(100vh - 105px);
  display: flex;
  padding: 2rem;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 60px;
  width: 60%;
`;
const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
`;

const Info = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;
const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  letter-spacing: 2px;
  cursor: pointer;
  border: none;
`;
const Contact = styled.button`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 10px;
  border: none;
`;

const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
`;
const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;

const Right = styled.div`
  width: 40%;
`;

const Image = styled.img`
  height: 375px;
  width: 250px;
  object-fit: cover;
`;
