import { Navbar, NavbarBrand } from "@nextui-org/react";

const MyNavbar = () => {
  return (
    <>
      <Navbar className="bg-slate-950 p-4">
        <NavbarBrand className="flex items-center justify-center space-x-[-35px]">
          <p className="font-bold text-2xl tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-blue-500 to-sky-500">
            Zaal
          </p>
          <img
            src="/public/images/logo.png"
            alt=""
            className="h-24 filter brightness-150 contrast-125"
          />
          <p className="font-bold text-2xl tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-500 to-teal-500">
            Art
          </p>
        </NavbarBrand>
      </Navbar>
    </>
  );
};

export default MyNavbar;
