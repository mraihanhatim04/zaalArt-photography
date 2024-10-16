import { useState } from "react";
import { Button } from "@nextui-org/react";
import { ReactTyped } from "react-typed";
import zaal from "../assets/zaal.png";

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
      <div
        className="h-screen mt-[-10px] p-2 flex justify-center items-center relative"
        style={{
          backgroundImage: `url${zaal}`, // Replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto p-2 py-5 mt-20 rounded-3xl z-10 text-center bg-black opacity-85 ">
          <h1 className="text-white mb-2 text-4xl tracking-tight font-bold">
            <span className="shadow-2xl underline decoration-slate-900 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-blue-500 to-sky-500">
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
          <p className="text-white mb-1 text-sm tracking-tight italic">
            " My work is known for its vibrant colors and creative expression.
            Let's create captivating visuals that bring your brand to life.
            Reach out for stunning collaborations "
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="font-bold mt-2 px-28 rounded-2xl bg-gradient-to-r from-teal-600 via-sky-800 to-sky-900 text-white">
              Let's Collaborate
            </Button>
          </a>
        </div>
      </div>
    </>
  );
};

export default MyHeroSection;
