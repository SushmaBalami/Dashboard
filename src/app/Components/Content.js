"use client";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";
import { PiNumberZeroBold } from "react-icons/pi";

const Content = () => {
  return (
    <>
    <div
      className="border-2 border-gray-100 shadow-md"
      style={{
        width: "1000px",
        height: "500px",
        position: "absolute",
        top: "150px",
        left: "260px",
        maxHeight: "500px",
        overflowY: "auto",
        scrollbarWidth: "thin",
        scrollbarColor: "rgba(169, 169, 169, 0.3) transparent",
        WebkitScrollbarWidth: "thin",
        WebkitScrollbarColor: "rgba(169, 169, 169, 0.3) transparent",
        borderRadius: "8px",
      }}
    >
      <div className="p mx-4 mt-10 text-xl font-semibold">
        Demat Application Overview:
      </div>
      <div
        className="content"
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        <div
          className="items border border-gray-100 shadow"
          style={{
            width: "250px",
            height: "100px",
            borderRadius: "5px",
            marginRight: "10px",
            marginLeft: "10px",
            display: "flex",
            justifyContent: "space-around",
            fontSize: "14px",
          }}
        >
          <Link href="#" className="mt-1">
            Received Application
          </Link>
          <BsThreeDots className="text-gray-400 mt-1" />
          <PiNumberZeroBold className="absolute text-red-500 font-extrabold mt-16 w-6 h-5"/>
        </div>
        <div
          className="items border border-gray-100 shadow"
          style={{
            width: "250px",
            height: "100px",
            borderRadius: "5px",
            marginRight: "10px",
            marginLeft: "10px",
            display: "flex",
            justifyContent: "space-around",
            fontSize: "14px",
          
          }}
        >
          <Link href="#" className="mt-1">
            Verified Application
          </Link>
          <BsThreeDots className="text-gray-400 mt-1" />
          <PiNumberZeroBold className="absolute text-blue-500 font-extrabold mt-16 w-6 h-5"/>
        </div>
        <div
          className="items border border-gray-100 shadow"
          style={{
            width: "250px",
            height: "100px",
            borderRadius: "5px",
            marginRight: "10px",
            marginLeft: "10px",
            display: "flex",
            justifyContent: "space-around",
            fontSize: "14px",
          }}
        >
          <Link href="#"  className="mt-1">Approved Application</Link>
          <BsThreeDots className="text-gray-400 mt-1" />
          <PiNumberZeroBold className="absolute text-brown-500 font-extrabold mt-16 w-6 h-5"/>
        </div>
        <div
          className="items border border-gray-100 shadow"
          style={{
            width: "250px",
            height: "100px",
            borderRadius: "5px",
            marginRight: "10px",
            marginLeft: "10px",
            display: "flex",
            justifyContent: "space-around",
            fontSize: "14px",
          }}
        >
          <Link href="#"  className="mt-1">Rejected Application</Link>
          <BsThreeDots className="text-gray-400 mt-1"/>
          <PiNumberZeroBold className="absolute text-yellow-500 font-extrabold mt-16 w-6 h-5"/>
        </div>
      </div>
    </div>
    <div
      className=""
      style={{
        width: "1000px",
        height: "500px",
        position: "absolute",
        top: "360px",
        left: "260px",
        maxHeight: "500px",
        overflowY: "auto",
        scrollbarWidth: "thin",
        scrollbarColor: "rgba(169, 169, 169, 0.3) transparent",
        WebkitScrollbarWidth: "thin",
        WebkitScrollbarColor: "rgba(169, 169, 169, 0.3) transparent",
        borderRadius: "8px",
      }}
    >
      <div className="p mx-4 mt-10 text-xl font-semibold">
        TMS Application Overview:
      </div>
      <div
        className="content"
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        <div
          className="items border border-gray-100 shadow"
          style={{
            width: "250px",
            height: "100px",
            borderRadius: "5px",
            marginRight: "10px",
            marginLeft: "10px",
            display: "flex",
            justifyContent: "space-around",
            fontSize: "14px",
          }}
        >
          <Link href="#" className="mt-1">
            Received Application
          </Link>
          <BsThreeDots className="text-gray-400 mt-1" />
          <PiNumberZeroBold className="absolute text-red-500 font-extrabold mt-16 w-6 h-5"/>
        </div>
        <div
          className="items border border-gray-100 shadow"
          style={{
            width: "250px",
            height: "100px",
            borderRadius: "5px",
            marginRight: "10px",
            marginLeft: "10px",
            display: "flex",
            justifyContent: "space-around",
            fontSize: "14px",
          
          }}
        >
          <Link href="#" className="mt-1">
            Verified Application
          </Link>
          <BsThreeDots className="text-gray-400 mt-1" />
          <PiNumberZeroBold className="absolute text-blue-500 font-extrabold mt-16 w-6 h-5"/>
        </div>
        <div
          className="items border border-gray-100 shadow"
          style={{
            width: "250px",
            height: "100px",
            borderRadius: "5px",
            marginRight: "10px",
            marginLeft: "10px",
            display: "flex",
            justifyContent: "space-around",
            fontSize: "14px",
          }}
        >
          <Link href="#"  className="mt-1">Approved Application</Link>
          <BsThreeDots className="text-gray-400 mt-1" />
          <PiNumberZeroBold className="absolute text-brown-500 font-extrabold mt-16 w-6 h-5"/>
        </div>
        <div
          className="items border border-gray-100 shadow"
          style={{
            width: "250px",
            height: "100px",
            borderRadius: "5px",
            marginRight: "10px",
            marginLeft: "10px",
            display: "flex",
            justifyContent: "space-around",
            fontSize: "14px",
          }}
        >
          <Link href="#"  className="mt-1">Rejected Application</Link>
          <BsThreeDots className="text-gray-400 mt-1"/>
          <PiNumberZeroBold className="absolute text-yellow-500 font-extrabold mt-16 w-6 h-5"/>
        </div>
      </div>
    </div>
    
    </>
  );
};
export default Content;
