import { Navbar, NavbarBrand } from "@nextui-org/react";
import logo from "../assets/logo.png";

const MyNavbar = () => {
  return (
    <>
      <Navbar className="bg-black p-2 px-6">
        <NavbarBrand className="container mx-auto flex items-center justify-between">
          <img src={logo} alt="" className="h-24 filter ml-[-30px]" />
          <p className="font-bold text-3xl tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-blue-500 to-sky-500">
            ZaalArt
          </p>
        </NavbarBrand>
      </Navbar>
    </>
  );
};

export default MyNavbar;
