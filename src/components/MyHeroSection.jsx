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
      <div className="h-screen mt-[-60px] bg-black flex justify-center items-center relative">
        <div className="container mx-auto p-5 rounded-xl z-10 text-center">
          <h1 className="text-white mb-2 text-4xl tracking-tight font-bold">
            <span className="shadow-2xl decoration-teal-500 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-slate-200 to-sky-500">
              <ReactTyped
                strings={["ZaalArt Photography"]}
                typeSpeed={130}
                backSpeed={100}
                loop
              />
            </span>
          </h1>
          <p className="text-slate-200 mb-2 text-lg font-semibold">
            <span className="underline decoration-sky-500">
              I specialise in shooting liquids
            </span>{" "}
            and{" "}
            <span className="underline decoration-red-500">
              Colourful liquid work🚬
            </span>
          </p>
          <p className="text-slate-200 mb-2 text-sm tracking-tight italic">
            " My work is known for its vibrant colors and creative expression.
            Let's create captivating visuals that bring your brand to life.
            Reach out for stunning collaborations "
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="font-semibold mt-2 px-20 rounded-2xl bg-gradient-to-r from-teal-500 via-sky-700 to-sky-500 text-white">
              Let's Collaborate
            </Button>
          </a>
        </div>
      </div>
    </>
  );
};

export default MyHeroSection;
