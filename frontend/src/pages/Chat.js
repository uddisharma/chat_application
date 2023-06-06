import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ChatContainer from "../components/ChatContainer";
import Welcome from "../components/Welcome";
import Contacts from "../components/Contacts";
import axios from "axios";
import { io } from "socket.io-client";
const Chat = () => {
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [contacts, setContacts] = useState([]);
  const socket = useRef();
  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/contacts")
      .then((res) => {
        // console.log(res);
        setContacts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(contacts);
  useEffect(() => {
    if (currentUser) {
      socket.current = io("http://localhost:5000");
      socket.current.emit("add-user", currentUser._id);
    }
  }, [currentUser]);
  return (
    <>
      <Container>
        <div className="container">
          <Contacts contacts={contacts} changeChat={handleChatChange} />
          {currentChat === undefined ? (
            <Welcome />
          ) : (
            <ChatContainer currentChat={currentChat} socket={socket} />
          )}
        </div>
      </Container>
    </>
  );
};

export default Chat;
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;
