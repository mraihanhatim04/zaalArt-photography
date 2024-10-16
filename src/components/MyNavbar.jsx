import { Navbar, NavbarBrand } from "@nextui-org/react";

const MyNavbar = () => {
  return (
    <>
      <Navbar className="bg-black p-4">
        <NavbarBrand className="container mx-auto flex items-center justify-between">
          <img
            src="/public/images/logo.png"
            alt=""
            className="h-24 filter ml-[-30px]"
          />
          <p className="font-bold text-4xl tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-blue-500 to-sky-500">
            ZaalArt
          </p>
        </NavbarBrand>
      </Navbar>
    </>
  );
};

export default MyNavbar;
