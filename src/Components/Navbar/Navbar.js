import React from "react";
import logo from "../../assets/mslogo.png"
import { AiOutlineSearch ,AiOutlineShoppingCart,AiOutlineDown} from "react-icons/ai";
import { MdOutlineAccountCircle} from "react-icons/md";



const Navbar = () => {
  return (
    <div className="navbar flex justify-between items-center p-4">
      <div className="flex justify-center items-center md:order-2">
        <div className="hamburgur p-4 inline-block cursor-pointer md:hidden">
          <div className="line h-0.5 w-6 my-1 bg-black "></div>
          <div className="line h-0.5 w-6 my-1 bg-black "></div>
          <div className="line h-0.5 w-6 my-1 bg-black "></div>
        </div>
        <div className="search md:hidden "><AiOutlineSearch/></div>
      </div>

      <div className="logo text-center flex md:order-1">
        <div className="w-32 md:w-48  p-4 cursor-pointer"><img src={logo} alt="" /></div>
        <div className="features md:static absolute inset-0 w-fit bg-gray-300 md:bg-white md:w-auto md:flex md:mx-4
         md:space-x-2 -translate-x-96 md:translate-x-0 flex items-center cursor-pointer">
          <div className="items">Microsoft 365</div>
          <div className="items">Office</div>
          <div className="items">Windows</div>
          <div className="items">Sureface</div>
          <div className="items">Xbox</div>
          <div className="items">Support</div>
        </div>
      </div>
      <div className="cart text-center md:order-3 flex">
        <div className="flex">
        <div className="hidden md:block ">All Microsoft  </div>
        <div className="hidden md:block mx-2 mt-1.5 cursor-pointer "><AiOutlineDown/></div>
        </div>
        <div className="flex items-center mx-2 mt-2 cursor-pointer"><AiOutlineSearch/></div>
        <div className="flex items-center mx-2 mt-2 cursor-pointer"><AiOutlineShoppingCart/> </div>
        <div className="flex items-center mx-2 mt-2 cursor-pointer"><MdOutlineAccountCircle/></div>
      </div>
    </div>
  );
};

export default Navbar;
