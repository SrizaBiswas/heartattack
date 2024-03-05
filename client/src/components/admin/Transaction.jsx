import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import { IoArrowUpOutline } from "react-icons/io5";

const Transaction = () => {
  //get data
  const [bookdata, setBookdata] = useState();
  const books = "books";
  const fetchbooks = async () => {
    const bookColl = books;

    try {
      axios
        .post("http://localhost:3001/get-dbcollections", bookColl)
        .then((res) => {
          const databook = res.data.data;
          setBookdata(databook.length);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!bookdata) {
      fetchbooks();
    }
  }, []);

  //deleted books
  const [delbookdata, setDelBookdata] = useState();
  const delbooks = "delbooks";
  const fetchdelbooks = async () => {
    const delbookColl = delbooks;

    try {
      axios
        .post("http://localhost:3001/get-delbook", delbookColl)
        .then((res) => {
          const databook = res.data.data;
          console.log(databook);
          setDelBookdata(databook.length);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!delbookdata) {
      fetchdelbooks();
    }
  }, []);
  const totalBookData = bookdata + delbookdata;

  //GET AUDIOBOOKS
  const [audiobookdata, setAudiobookdata] = useState();
  const fetchaudiobooks = async () => {
    const audiobookColl = "audiobooks";

    try {
      axios
        .post("http://localhost:3001/get-audiobk", audiobookColl)
        .then((res) => {
          const databook = res.data.data;
          // alert(res.data.message);
          setAudiobookdata(databook.length);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!audiobookdata) {
      fetchaudiobooks();
    }
  }, []);
  //get delaudioboook
  const [delaudiobookdata, setDelAudiobookdata] = useState();
  const fetchdelaudiobooks = async () => {
    const audiobookColl = "audiobooks";

    try {
      axios
        .post("http://localhost:3001/get-delaudiobk", audiobookColl)
        .then((res) => {
          const databook = res.data.data;
          // alert(res.data.message);
          setDelAudiobookdata(databook.length);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!delaudiobookdata) {
      fetchdelaudiobooks();
    }
  }, []);
  const totalAudiobookData = audiobookdata + delaudiobookdata;
  //GET MAGAZINE
  const [magadata, setMagadata] = useState();
  const fetchmagazines = async () => {
    const magazineColl = "magazines";
    try {
      axios.post("http://localhost:3001/get-mag", magazineColl).then((res) => {
        const databook = res.data.data; //data.data??

        setMagadata(databook.length);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!magadata) {
      fetchmagazines();
    }
  }, []);

  //USER
  const [userdata, setUserdata] = useState();
  const fetchusers = async () => {
    const userColl = "users";
    try {
      axios.post("http://localhost:3001/get-dbuser", userColl).then((res) => {
        const databook = res.data.data; //data.data??
        // alert(res.data.message);
        setUserdata(databook.length);
        // setBkByAdmin(databook.length);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!userdata) {
      fetchusers();
    }
  }, []);
  //deluser
  const [deluserdata, setDelUserdata] = useState();
  const fetchdelusers = async () => {
    const userColl = "users";
    try {
      axios.post("http://localhost:3001/get-deluser", userColl).then((res) => {
        const databook = res.data.data; //data.data??
        // alert(res.data.message);
        setDelUserdata(databook.length);
        // setBkByAdmin(databook.length);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!deluserdata) {
      fetchdelusers();
    }
  }, []);
  const totaluserData = userdata + deluserdata;

  return (
    <div className="main-book relative overflow-hidden flex flex-col gap-2">
      <div className="scrollDi ">
        <div className="text-3xl mt-5 ml-9 font-medium">BOOKS</div>

        <div className="tcards h-auto ">
          <div className="bkcard gap-5">
            <div className="flex ">
              <h3>TOTAL COUNT OF BOOKS ENTERED INTO THE DATABASE</h3>
              <IoArrowUpOutline className="card_icon" size={100} />
            </div>
            <h1>{totalBookData}</h1>
          </div>
          <div className="bkcard gap-5">
            <h3>TOTAL COUNT OF BOOKS DELETED FROM DATABASE</h3>
            <h1>{delbookdata}</h1>
          </div>
          <div className="bkcard gap-5">
            <h3>CURRENT BOOKS PRESENT IN THE DATABASE</h3>
            <h1>{bookdata}</h1>
          </div>
        </div>

        <div className="text-3xl mt-5 ml-9 font-medium">AUDIOBOOKS</div>

        <div className="tcards h-auto ">
          <div className="bkcard gap-5">
            <h3>TOTAL COUNT OF AUDIOBOOKS ENTERED INTO THE DATABASE</h3>
            <h1>{totalAudiobookData}</h1>
          </div>
          <div className="bkcard gap-5">
            <h3>TOTAL COUNT OF AUDIOBOOKS DELETED FROM DATABASE</h3>
            <h1>{delaudiobookdata}</h1>
          </div>
          <div className="bkcard gap-5">
            <h3>CURRENT AUDIOBOOKS PRESENT IN THE DATABASE</h3>
            <h1>{audiobookdata}</h1>
          </div>
        </div>

        <div className="text-3xl mt-5 ml-9 font-medium">MAGAZINES</div>

        <div className="tcards h-auto ">
          <div className="bkcard gap-5">
            <h3>TOTAL COUNT OF MAGAZINES ENTERED INTO THE DATABASE</h3>
            <h1>{totalAudiobookData}</h1>
          </div>
          <div className="bkcard gap-5">
            <h3>TOTAL COUNT OF MAGAZINES DELETED FROM DATABASE</h3>
            <h1>{delaudiobookdata}</h1>
          </div>
          <div className="bkcard gap-5">
            <h3>CURRENT MAGAZINES PRESENT IN THE DATABASE</h3>
            <h1>{magadata}</h1>
          </div>
        </div>

        <div className="text-3xl mt-5 ml-9 font-medium">USERS</div>

        <div className="tcards h-auto ">
          <div className="bkcard gap-5">
            <h3>TOTAL COUNT OF USERS ENTERED INTO THE DATABASE</h3>
            <h1>{totaluserData}</h1>
          </div>
          <div className="bkcard gap-5">
            <h3>TOTAL COUNT OF USERS DELETED FROM DATABASE</h3>
            <h1>{deluserdata}</h1>
          </div>
          <div className="bkcard gap-5">
            <h3>CURRENT USERS PRESENT IN THE DATABASE</h3>
            <h1>{userdata}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
