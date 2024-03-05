import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";

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

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <a href="/admin/books">
          <div className="card">
            <div className="card-inner">
              <h3>Books</h3>
              <BsFillArchiveFill className="card_icon" />
            </div>
            <h1>{bookdata}</h1>
          </div>
        </a>
        <a href="/admin/audiobooks">
          <div className="carda">
            <div className="card-inner">
              <h3>Audiobooks</h3>
              <BsFillBellFill className="card_icon" />
            </div>
            <h1>{delbookdata}</h1>
          </div>
        </a>
      </div>
      <div className="main-cards">
        <a href="/admin/customer">
          <div className="cardu">
            <div className="card-inner">
              <h3>Users</h3>
              <BsPeopleFill className="card_icon" />
            </div>
            <h1>56</h1>
          </div>
        </a>
        <a href="/admin/genre">
          <div className="cardg">
            <div className="card-inner">
              <h3>Magazine</h3>
              <BsFillGrid3X3GapFill className="card_icon" />
            </div>
            <h1>13</h1>
          </div>
        </a>
      </div>
    </main>
  );
};

export default Transaction;
