import { useState } from "react";
import { Button } from "@nextui-org/react";

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
      <div className="bg-slate-950 h-screen mt-[-30px] flex justify-center">
        <div className="container text-center mt-36 p-5">
          <h1 className="text-white mb-2 text-2xl tracking-widest font-bold">
            <span className="underline decoration-sky-500">ZaalArt</span>{" "}
            <span className="underline decoration-teal-500">Photography</span>
          </h1>
          <p className="text-slate-400 mb-2 ">
            I specialise in shooting liquids and my colourful liquid work
          </p>
          <p className="text-white mb-2 bg-teal-900 py-2 rounded-3xl">
            Has become very well known and collectable.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="font-semibold rounded-2xl bg-gradient-to-r from-sky-900 via-sky-700 to-sky-500 text-white">
              Let's Collaborate
            </Button>
          </a>
        </div>
      </div>
    </>
  );
};

export default MyHeroSection;
