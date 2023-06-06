import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Buffer } from "buffer";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
const data = [
  "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png",
  "https://cdn.pixabay.com/photo/2018/08/28/14/09/avatar-3637645_1280.png",
  "https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_1280.png",
  "https://cdn.pixabay.com/photo/2017/03/01/22/18/avatar-2109804_1280.png",
];
const SetAvatar = () => {
  const api = `https://api.multiavatar.com/5329928374`;
  const navigate = useNavigate();
  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(undefined);
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const userId = localStorage.getItem("user");
  if (!userId) {
    return navigate("/login");
  }
  const setProfilePicture = () => {
    if (selectedAvatar === undefined) {
      toast.error("Please select an avatar", toastOptions);
    } else {
      setIsLoading(true);
      axios
        .post(`http://localhost:5000/setAvatar/${userId}`, {
          image: selectedAvatar,
        })
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            setIsLoading(false);
            toast.success("Profile picture is saved", toastOptions);
            navigate('/login')
          } else {
            toast.error("Something went wrong", toastOptions);
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error("Something went wrong", toastOptions);
        });
    }
  };

  return (
    <>
      {isLoading ? (
        <Container>
          <img
            src={
              "https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif"
            }
            alt="loader"
            className="loader"
          />
        </Container>
      ) : (
        <Container>
          <div className="title-container">
            <h1>Pick an Avatar as your profile picture</h1>
          </div>
          <div className="avatars">
            {data.map((avatar, index) => {
              return (
                <div
                  key={index}
                  className={`avatar ${
                    selectedAvatar == avatar ? "selected" : ""
                  }`}
                >
                  <img
                    src={avatar}
                    alt="avatar"
                    key={avatar}
                    onClick={() => {
                      setSelectedAvatar(avatar);
                      //   console.log(avatar);
                    }}
                  />
                </div>
              );
            })}
          </div>
          <button onClick={setProfilePicture} className="submit-btn">
            Set as Profile Picture
          </button>
          <ToastContainer />
        </Container>
      )}
    </>
  );
};

export default SetAvatar;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  background-color: #131324;
  height: 100vh;
  width: 100vw;

  .loader {
    max-inline-size: 100%;
  }

  .title-container {
    h1 {
      color: white;
    }
  }
  .avatars {
    display: flex;
    gap: 2rem;

    .avatar {
      border: 0.4rem solid transparent;
      padding: 0.4rem;
      border-radius: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.5s ease-in-out;
      img {
        height: 6rem;
        transition: 0.5s ease-in-out;
      }
    }
    .selected {
      border: 0.4rem solid #4e0eff;
    }
  }
  .submit-btn {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }
`;
