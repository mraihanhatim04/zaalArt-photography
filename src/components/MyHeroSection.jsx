import { useState } from "react";
import { Button } from "@nextui-org/react";
import { ReactTyped } from "react-typed";

const MyHeroSection = () => {
  const [phoneNumber] = useState("6285774979149");
  const [message] = useState(
    "Hallo Zaal, saya ingin tau lebih lanjut untuk bekerjasama dengan anda"
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      <div className=" h-screen mt-[-30px] flex justify-center">
        <div className="container text-center mt-36 p-5">
          <h1 className="text-white mb-2 text-2xl tracking-widest font-bold">
            <span className="underline decoration-sky-500 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-slate-100 to-sky-500">
              <ReactTyped
                strings={["ZaalArt Photography"]}
                typeSpeed={100}
                backSpeed={100}
                loop
              />
            </span>
          </h1>
          <p className="text-slate-200 mb-2 text-md font-semibold">
            I specialise in shooting liquids and my colourful liquid work
          </p>
          <p className="text-white mb-2 bg-sky-800 py-2 rounded-2xl">
            Has become very well known and collectable.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="font-semibold mt-2 px-20 rounded-2xl bg-gradient-to-r from-sky-900 via-sky-700 to-sky-500 text-white">
              Let's Collaborate
            </Button>
          </a>
        </div>
      </div>
    </>
  );
};

export default MyHeroSection;
