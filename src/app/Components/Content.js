"use client";
import Link from "next/link";

const Content = () => {
  return (
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
    <div className="content" style={{
         display: "grid",
         gridTemplateColumns: "auto",
         padding: "10px",
    }}>
       <div className="items">
        <Link href="#">
        Received Application
        </Link>
       </div>
       <div className="items">
        <Link href="#">
        Verified Application
        </Link>
       </div>
       <div className="items">
        <Link href="#">
        Approved Application
        </Link>
       </div>
       <div className="items">
        <Link href="#">
        Rejected Application
        </Link>
       </div>

    </div>
    </div>
  );
};
export default Content;
