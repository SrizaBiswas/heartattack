import axios from "axios";
import React, { useEffect, useState } from "react";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { useParams } from "react-router-dom";
const AuthorProfile = () => {
  const { username } = useParams();
  console.log(decodeURIComponent(username));
  // const uData = JSON.parse(window.localStorage.getItem("user"));
  // console.log(uData);
  const [userDetail, setUserDetail] = useState();
  const fetchusers = async () => {
    try {
      axios.post("http://localhost:3001/get-username", {username: decodeURIComponent(username)}).then((res) => {
        if(res.data.status == "ok"){
        const usDetail = res.data.user;
        console.log(res.data.message, "\n", usDetail);
        return setUserDetail(usDetail);
        }
        alert(res.data.message);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!userDetail) {
      fetchusers();
    }
  });
  console.log(userDetail);
  return (
    <div className="flex flex-col w-full h-full  gap-10 items-center">
      <div className="w-[98%] h-[17rem] border-solid border-2 border-white rounded-lg flex flex-col items-center justify-center gap-5">
        <div className="w-[12%] h-[12rem] rounded-full bg-black text-primary flex items-center justify-center">
          pfp
        </div>
        <div className="text-white text-base font-bold">abc</div>
      </div>
      <div className="w-[98%] h-auto border-solid border-2 border-white rounded-lg items-center justify-center"></div>
    </div>
  );
};

export default AuthorProfile;
