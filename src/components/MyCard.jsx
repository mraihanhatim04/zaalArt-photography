import { Card, CardHeader, Image } from "@nextui-org/react";

const GalleryCard = () => {
  const galleries = [
    {
      id: 1,
      title: "Gallery 1",
      image: "./src/assets/7.jpg",
      description: "Top 1 Karambol in the world",
    },
    {
      id: 2,
      title: "Gallery 2",
      image: "./src/assets/2.jpg",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      id: 3,
      title: "Gallery 3",
      image: "./src/assets/3.jpg",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      id: 4,
      title: "Gallery 4",
      image: "./src/assets/4.jpg",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      id: 5,
      title: "Gallery 5",
      image: "./src/assets/5.jpg",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      id: 6,
      title: "Gallery 6",
      image: "./src/assets/6.jpg",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      id: 7,
      title: "Gallery 7",
      image: "./src/assets/1.jpg",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      id: 8,
      title: "Gallery 8",
      image: "./src/assets/8.jpg",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      id: 9,
      title: "Gallery 9",
      image: "./src/assets/10.jpg",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      id: 10,
      title: "Gallery 10",
      image: "./src/assets/11.jpg",
      description: "Lorem ipsum dolor sit amet",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap bg-black justify-center p-4 gap-2">
        <div className="container mx-auto rounded-3xl mt-10 p-2">
          <h1 className=" text-3xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-100 via-teal-300 to-blue-500">
            Our photography
          </h1>
        </div>
        {galleries.map((gallery) => (
          <Card key={gallery.id} className="bg-slate-950 mt-4 w-[360px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-lg text-white/80 uppercase font-bold">
                {gallery.title}
              </p>
              <h4 className="text-white font-medium text-large">
                {gallery.description}
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src={gallery.image}
            />
          </Card>
        ))}
      </div>
    </>
  );
};

export default GalleryCard;
