import React from "react";
import { ImCross } from "react-icons/im";


function Modal(props) {
  if (!props.openModal) return null;

  return (
    <div className="fixed inset-0 bg-amber-100 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded shadow-lg max-w-lg w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold underline ml-8">{props.book.title}</h2>
          <button onClick={props.closeModal} className="text-red-500">
            <ImCross />
          </button>
        </div>
        <div>
          <p className="mt-2"><span className="font-bold">Release Date:</span>  {props.book.release_date}</p>
          <p><span className="font-bold">No. of Pages:</span> {props.book.pages} pages</p>
          <p>
          <span className="font-bold">Description :</span>
            {props.book.summary.length > 100
              ? props.book.summary.substring(0, 500) + "..."
              : props.book.summary}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Modal;