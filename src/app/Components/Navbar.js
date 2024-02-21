import logo from "../../../public/images/bibaboimage.png";
import profile from "../../../public/images/profile.jpg";
import Image from "next/image";
import { CiBellOn , CiSearch } from "react-icons/ci";
import { BsList } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <nav className="border-b-2 border-gray-200 shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center ">
            <Image src={logo} className="h-7 w-6 mr-1" alt="not found" />
            <span className="self-center text-xs font-semibold whitespace-nowrap dark:text-blue-900">
              Bibaabo
            </span>
          </a>

          <div className="w-100">
          <div className="flex items-center">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <CiSearch size={20} color="gray" />
        </div>
        <input
          type="search"
          id="default-search"
          className="block p-2 pl-12 text-sm text-black border-gray-300 rounded-lg bg-gray-100"
          style={{width: "350px"}}
          placeholder="Search or type a command (Ctrl + G)"
          required
        />
      </div>
      <div className="ml-4">
        <CiBellOn size={20} color="gray" />
      </div>
      <span className="ml-2 pr-4 text-sm">| Help</span>
      <Image src={profile} className="h-8 w-8 mr-1   rounded-full" alt="not found" />
      
    </div>
          </div>
        </div>
      </nav>
      <div className="second-nav">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <BsList className="mr-2 ml-8 text-gray-500" size={24} />
          <h2 className="text-lg font-bold">Capital Max Dashboard</h2>
        </div>
        <div className="flex items-center mr-10">
          <button className="px-4 py-1  mr-2 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none text-sm shadow-sm">
            Create Workshop
          </button>
          <button className="px-4 py-1 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none text-sm shadow-sm">
            Edit
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;
