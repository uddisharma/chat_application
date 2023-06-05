import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import Robot from "../assets/robot.gif";
export default function Welcome() {
  const [userName, setUserName] = useState("");
//   useEffect(async () => {
//     setUserName(
//       await JSON.parse(
//         localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
//       ).username
//     );
//   }, []);
  return (
    <Container>
      <img
        src={
          "https://img.freepik.com/free-vector/welcome-concept-landing-page_52683-22680.jpg?size=626&ext=jpg&ga=GA1.1.261178553.1685726782&semt=ais"
        }
        alt=""
      />
      <h1>
        Welcome, <span>{"userName"}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;
