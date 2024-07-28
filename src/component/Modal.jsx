import React from "react";
// component me using props hum oroperty fech karenge 
function Modal(props) {
  if (!props.openModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-hidden">
      <div className="bg-white p-4 rounded shadow-lg max-w-sm w-full z-50">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{props.book.title}</h2>
          <button onClick={props.closeModal} className="text-red-500">Close</button>
        </div>
        <div>
          
          <p className="mt-2">Release Date: {props.book.release_date}</p>
          <p>No.of Pages: {props.book.pages} pages</p>
          
          <p>Description: {
         props.book.summary.length>100
            ?(props.book.summary.substring(0, 200)) + "...":(props.book.summary)
          }</p>

        </div>
      </div>
    </div>
  );
}

export default Modal;