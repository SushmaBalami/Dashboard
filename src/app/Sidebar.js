"use client";

import { useState } from "react";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosHeart } from "react-icons/io";
import { TbReport } from "react-icons/tb";
import { RiHeadphoneLine } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { TbHammerOff } from "react-icons/tb";
import { RiAccountBoxLine } from "react-icons/ri";
import { IoBagOutline } from "react-icons/io5";
import { TbCoins } from "react-icons/tb";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { TbSunElectricity } from "react-icons/tb";
import { BsWallet } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";


const Sidebar = () => {
  const [publicDropdownVisible, setPublicDropdownVisible] = useState(false);
  const [accountingDropdownVisible, setAccountingDropdownVisible] =
    useState(false);
  const [capitalDropdownVisible, setcapitalDropdownVisible] = useState(false);
  const [lifecapital, setlifecapital] = useState(false);

  const [broker, setbroker] = useState(false);
  const [insurance, setinsurance] = useState(false);

  const togglePublicDropdown = () => {
    setPublicDropdownVisible(!publicDropdownVisible);
  };

  const toggleAccountingDropdown = () => {
    setAccountingDropdownVisible(!accountingDropdownVisible);
  };

  const toggleCapitalDropdown = () => {
    setcapitalDropdownVisible(!capitalDropdownVisible);
  };
  const togglelifecapital = () => {
    setlifecapital(!lifecapital);
  };
  const togglebroker = () => {
    setbroker(!broker);
  };
  const toggleinsurance = () => {
    setinsurance(!insurance);
  };
  return (
    <>
      <div className="ml-10 pt-4">
      <div className="scrollable-container"  style={{
    width: "200px",
    maxHeight: "500px",
    overflowY: "auto",
    scrollbarWidth: "thin",
    scrollbarColor: "rgba(169, 169, 169, 0.3) transparent", 
    WebkitScrollbarWidth: "thin", 
    WebkitScrollbarColor: "rgba(169, 169, 169, 0.3) transparent", 
  }}>
        <div className="dropdown ">
          <button
            onClick={togglePublicDropdown}
            className="flex items-center text-lg focus:outline-none"
          >
            <RiArrowDropDownLine color="gray" />
            <span className="text-sm text-gray-500">PUBLIC</span>
          </button>
          {publicDropdownVisible && (
            <div className="dropdown-content mt-2 ml-4 ">
              <Link href="#" passHref>
              <p className=" text-sm text-black flex my-2 mt-4">
                  <IoIosHeart className="text-red-500 w-6 h-5 mr-2 " />
                  Capital Max Dashboard
                </p>
              </Link>
              <Link href="#" passHref>
                <p className="block py-1 text-sm text-black flex my-2">
                  <TbReport className="text-gray-500 w-6 h-5 mr-2" />
                  Submit Report
                </p>
              </Link>
              <Link href="#" passHref>
                <p className="block py-1 text-sm text-black flex my-2">
                  <RiHeadphoneLine className="text-gray-500 w-6 h-5 mr-2" />
                  Bibaabo Report
                </p>
              </Link>
              <Link href="#" passHref>
                <p className="block py-1 text-sm text-black flex my-2">
                  <IoNotificationsOutline className="text-gray-500 w-6 h-5 mr-2" />
                  BFA ENROLLMENT
                </p>
              </Link>
              <Link href="#" passHref>
                <p className="block py-1 text-sm text-black flex my-2">
                  <TbHammerOff className="text-gray-500 w-6 h-5 mr-2" />
                  Home
                </p>
              </Link>
              <Link href="#" passHref>
                <p className="block py-1 text-sm text-black flex my-2 mt-4">
                  {" "}
                  <IoIosHeart className="text-red-500 w-6 h-5 mr-2" />
                  BFA Dashboard
                </p>
              </Link>
              <div className="dropdown">
                <button
                  onClick={toggleAccountingDropdown}
                  className="flex items-center text-lg focus:outline-none"
                >
                  <RiAccountBoxLine className="text-gray-500 w-6 h-5 mr-2" />
                  <span className="text-sm flex">
                    {" "}
                    Accounting
                    <RiArrowDropDownLine className="text-gray-500 w-8 h-6 " />
                  </span>
                </button>
                {accountingDropdownVisible && (
                  <div className="bg-white rounded shadow mt-2 ml-8">
                    <Link href="#" passHref>
                      <p className="block py-1 text-sm text-black flex my-2 mt-4">
                        <IoBagOutline className="text-gray-500 w-6 h-5 mr-2" />
                        Assets
                      </p>
                    </Link>
                  </div>
                )}
              </div>
              <div className="dropdown mt-4 ">
                <button
                  onClick={toggleCapitalDropdown}
                  className="flex items-center text-lg focus:outline-none"
                >
                  <TbCoins className="text-gray-500 w-6 h-5 mr-2" />
                  <span className="text-sm flex">
                    {" "}
                    Capital Market Service
                    <RiArrowDropDownLine className="text-gray-500 w-8 h-6 " />
                  </span>
                </button>
                {capitalDropdownVisible && (
                  <div className="dropdown mt-4 ">
                    <button
                      onClick={togglelifecapital}
                      className="flex items-center text-lg focus:outline-none"
                    >
                      <CiCirclePlus className="text-gray-500 w-6 h-5 ml-2 mr-2" />
                      <span className="text-sm flex">
                        {" "}
                        Capital Companies
                        <RiArrowDropDownLine className="text-gray-500 w-8 h-6 " />
                      </span>
                    </button>
                    {lifecapital && (
                      <div className="bg-white rounded shadow mt-2 ml-8">
                        <Link href="#" passHref>
                          <p className="block py-1 text-sm text-black flex my-2 mt-4">
                            <CiCircleCheck className="text-green-500 w-6 h-5 mr-2" />
                            Nepal Life Capital Limited
                          </p>
                        </Link>
                        <Link href="#" passHref>
                          <p className="block py-1 text-sm text-black flex my-2 mt-4">
                            <CiCircleCheck className="text-green-500 w-6 h-5 mr-2" />
                            Prabhu Capital
                          </p>
                        </Link>
                      </div>
                    )}
                  </div>
                )}
                {capitalDropdownVisible && (
                  <div className="dropdown mt-4 ">
                    <button
                      onClick={togglebroker}
                      className="flex items-center text-lg focus:outline-none"
                    >
                      <TbSunElectricity className="text-yellow-500 w-6 h-5 ml-2 mr-2" />
                      <span className="text-sm flex">
                        {" "}
                        Broker Companies
                        <RiArrowDropDownLine className="text-gray-500 w-8 h-6 " />
                      </span>
                    </button>
                    {broker && (
                      <div className="bg-white rounded shadow mt-2 ml-8">
                        <Link href="#" passHref>
                          <p className="block py-1 text-sm text-black flex my-2 mt-4">
                            <CiCircleCheck className="text-green-500 w-6 h-5 mr-2" />
                            Capital Max Security
                          </p>
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="dropdown mt-4">
                <button
                  onClick={toggleinsurance}
                  className="flex items-center text-lg focus:outline-none"
                >
                  <BsWallet className="text-gray-500 w-6 h-5 mr-2" />
                  <span className="text-sm flex">
                    {" "}
                    Insurance Service
                    <RiArrowDropDownLine className="text-gray-500 w-8 h-6" />
                  </span>
                </button>
                {insurance && (
                  <div className="bg-white rounded shadow mt-2 ml-8">
                    <Link href="#" passHref>
                      <p className="block py-1 text-sm text-black flex my-2 mt-4">
                        <CgProfile className="text-gray-500 w-6 h-5 mr-2" />
                        Life Insurance
                      </p>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
