import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
const AuthorProfile = () => {
  const { authName } = useParams();
  // console.log(decodeURIComponent(authName));

  const [userDetail, setUserDetail] = useState();
  const [bookDetail, setBookDetail] = useState();
  const fetchusers = async () => {
    try {
      axios.post("http://localhost:3001/get-user", { username: decodeURIComponent(authName) }).then((res) => {
        if (res.data.status == "ok") {
          const usDetail = res.data.user;
          // console.log(res.data.message, "\n", usDetail);
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
      // console.log(userDetail);
      fetchusers();
    }
  });

  const fetchbooks = async () => {
    const bookColl = "books";
    try {
      axios
        .post("http://localhost:3001/get-dbcollections", { bookColl })
        .then(async (res) => {
          // console.log(res.data.data);
          const bkDetail = res.data.data.filter((book) => book.authName === decodeURIComponent(authName));
          // console.log(bkDetail);
          setBookDetail(bkDetail);
        })
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(bookDetail);
  useEffect(() => {
    // if (!bookDetail) {
    fetchbooks();
  });
  // console.log(userDetail?.profileimage);
  return (
    <div className="flex flex-col w-full h-full  gap-10 items-center">
      <div className="w-[98%] h-[17rem] border-solid border-2 border-white rounded-lg flex flex-col items-center justify-center gap-5">
        <div className="w-[10rem] h-[10rem] rounded-full bg-black text-primary flex items-center justify-center">
          <img
            src={userDetail?.profileimage ?? "/assests/booksanime-ezgif.com-crop.gif"}
            alt="author pfp"
            className="w-full rounded-full"
          />
        </div>
        <div className="text-white text-base font-bold">Name : {userDetail?.name}</div>
        <div className="text-white text-base font-bold">Autor name : {userDetail?.username}</div>
      </div>
      <div className="w-[98%] h-[5rem] border-solid border-2 border-white rounded-lg items-center justify-center"></div>
    </div>
  );
};

export default AuthorProfile;
