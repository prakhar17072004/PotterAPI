import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Modal from "./Modal";

function Book() {
  const [loading, setLoading] = useState(false);
  const [storedata, setStoreData] = useState([]);
  //store the book data useing use state
  const [showModal, setShowModal] = useState(null);
  //to open the modal
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        // show loading till is not fetch
        setLoading(true);
        //  fetch api url
        const res = await axios.get(
          "https://potterhead-api.vercel.app/api/books"
        );

        // after fetch store in setStore
        setStoreData(res.data);
        console.log("hello");

        //close the loading
        setLoading(false);
      } catch (error) {
        console.log("error while fetching the data", error);
      }
    };
    //call the function
    fetch([]);
  }, []);

  console.log(storedata);

  // modal ko open karnne k liye showmodal state use karke
  const handelmodal = (book) => {
    setShowModal(book);
    setOpenModal(true);
  };

  //modal ko close karne k liyr
  const handleCloseModal = () => {
    setOpenModal(false);
    setShowModal(null);
  };

  return (
    <>
      {/* Main div */}
      <div className="mx-auto w-full pt-10 mt-5 mb-14">
        <Link to="/">
          {/* Heading */}
          <h1 className="text-4xl font-semibold mt-4">Books Of Harry Potter</h1>
        </Link>
        {/* card main div */}
        <div className=" grid grid-cols-3 gap-[50px] mt-10 w-[1200px] mx-auto  ">
          {storedata.map((item, index) => (
            // card div
            <div className=" ">
              <div
                key={index}
                className=" bg-white w-[300px] hover:border-none hover:shadow-lg hover:shadow-white transition-all duration-500 border-2 border-slate-500 p-2 rounded-lg "
              >
                <img
                  src={item.cover}
                  alt="harry potter image"
                  className="rounded-md mx-auto h-auto"
                />
                <h1 className="text-lg font-semibold">{item.title}</h1>
                <button
                  className="outline bg-red-700 p-2 mt-4 rounded-sm cursor-pointer"
                  onClick={() => handelmodal(item)}
                >
                  More Info
                </button>
                {showModal && (
                  <Modal
                    openModal={openModal}
                    closeModal={handleCloseModal}
                    book={showModal}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Book;
