import axios from "axios";
import React, { useEffect, useState } from "react";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { useParams } from "react-router-dom";

const chapters = [
  {
    _id: 1,
    title: "Chapter 1",
    content: "Loading...",
  },
];

const BookView = () => {
  const { bkName } = useParams();
  // console.log(bkName);
  const [bookDetail, setBookDetail] = useState();

  const [selectedChapter, setSelectedChapter] = useState(chapters[0]);
  const [editOpen, setEditOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("bg-white");
  const [textColor, setTextColor] = useState("text-black");
  const [textSize, setTextSize] = useState("text-base");
  const [fontStyle, setFontStyle] = useState("font-sans");

  const handleChapterClick = (chapter) => {
    setSelectedChapter(chapter);
  };

  const changeBackgroundColor = (color, text) => {
    setBackgroundColor(color);
    setTextColor(text);
  };
  const changeTextSize = (size) => {
    setTextSize(size);
  };
  const handleFontChange = (font) => {
    setFontStyle(font);
  };

  const fetchbooks = async () => {
    try {
      axios
        .post("http://localhost:3001/get-dbcollections", { bookColl: "books" })
        .then((res) => {
          const bkDetail = res.data.data;
          // console.log(res.data.message, bkDetail);
          setBookDetail(
            bkDetail.filter(
              (book) => book.bkName === decodeURIComponent(bkName)
            )[0]
          );
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!bookDetail) {
      fetchbooks();
    }
    if (bookDetail && selectedChapter == chapters[0]) {
      console.log(bookDetail?.chapters);
      setSelectedChapter(bookDetail?.chapters[0]);
    }
  });
  // console.log(bookDetail);
  // console.log(bookDetail?.chapters);
  return (
    <div className="app">
      <div className="aside">
        <div className=" text-2xl justify-center content-center text-center bold h-15">
          <h1>Chapters</h1>
        </div>
        <div className="gap-0.5 text-center  ">
          {/*  grid  hover:bg-zinc-700  */}
          <ul>
            {bookDetail?.chapters.map((i) => (
              <li key={i._id} onClick={() => handleChapterClick(i)}>
                {i.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`flex flex-col w-full text-black  ${backgroundColor} ${textColor} ${textSize} ${fontStyle} `}
      >
        <div className=" relative justify-center text-3xl text-center bg-zinc-900 text-white h-16  	">
          <h2>{selectedChapter.title}</h2>

          <div className="absolute cursor-pointer w-auto h-auto text-2xl right-2 top-5 active:scale-90 ease-in-out duration-200">
            <PiDotsThreeOutlineVerticalFill
              onClick={() => setEditOpen(!editOpen)}
              className="active:scale-90 cursor-pointer ease-in-out duration-200"
            />
          </div>
          <div
            className={`${
              editOpen ? "opacity-100" : "opacity-0 hidden"
            } absolute mt-0 w-full h-100 bg-zinc-700 flex flex-col justify-center z-50`}
          >
            {/* <form className=" relative w-[50%] h-[40rem] shadow-2xl rounded-xl flex flex-col gap-2 items-center justify-center border"> */}
            <div
              onClick={() => setEditOpen(false)}
              className="absolute cursor-pointer w-auto h-auto text-2xl right-2 top-2 active:scale-90 ease-in-out duration-200 items-center"
            >
              X
            </div>
            <div className="text-lg text-center text-white mb-2 mt-5 flex flex-col gap-2">
              Page color
              <div className="flex gap-[24rem] px-4">
                <button
                  className="bg-black px-20 grid text-black text-center "
                  onClick={() =>
                    changeBackgroundColor("bg-black", "text-white")
                  }
                >
                  BLACK
                </button>
                <button
                  className="bg-white px-20 grid text-white text-center"
                  onClick={() =>
                    changeBackgroundColor("bg-white", "text-black")
                  }
                >
                  WHITE
                </button>
                <button
                  className="bg-amber-200 px-20  grid text-amber-200 text-center"
                  onClick={() =>
                    changeBackgroundColor("bg-amber-200", "text-black")
                  }
                >
                  BLACK
                </button>
              </div>
            </div>
            <div className="text-lg text-center text-white mb-2 mt-5 flex flex-col gap-2 ">
              Font Size
              <div className="flex gap-[24.2rem] px-4">
                <button
                  className="border-white border-2 px-24 grid text-base bold text-white text-center"
                  onClick={() => changeTextSize("text-base")}
                >
                  Aa
                </button>
                <button
                  className="border-white border-2 px-24 grid text-xl bold text-white text-center"
                  onClick={() => changeTextSize("text-xl")}
                >
                  Aa
                </button>
                <button
                  className="border-white border-2 px-24 grid text-2xl bold text-white text-center"
                  onClick={() => changeTextSize("text-2xl")}
                >
                  Aa
                </button>
              </div>
            </div>
            <div className="text-lg text-center text-white mb-2 mt-5 flex flex-col gap-2 ">
              Font
              <div className="flex gap-[24.2rem] px-4">
                <button
                  className="border-white border-2 px-20 grid text-2xl font-sans		 bold text-white text-center"
                  onClick={() => handleFontChange("font-serif")}
                >
                  Serif
                </button>
                <button
                  className="border-white border-2 px-14 grid text-2xl font-serif	 bold text-white text-center"
                  onClick={() => handleFontChange("font-sans")}
                >
                  Sans-serif
                </button>
                <button
                  className="border-white border-2 px-14 grid text-2xl font-mono bold text-white text-center"
                  onClick={() => handleFontChange("font-mono")}
                >
                  Monospace
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="justify-center text-justify p-2"
          style={{ whiteSpace: "pre-wrap" }}
        >
          <p>{selectedChapter.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BookView;
