import { Card, CardHeader, Image } from "@nextui-org/react";

const GalleryCard = () => {
  const galleries = [
    {
      id: 1,
      title: "Gallery 1",
      image: "/public/images/1.jpg",
      description: "Mathematician",
    },
    {
      id: 2,
      title: "Gallery 2",
      image: "/public/images/2.jpg",
      description: "Mathematician",
    },
    {
      id: 3,
      title: "Gallery 3",
      image: "/public/images/3.jpg",
      description: "Mathematician",
    },
    {
      id: 4,
      title: "Gallery 4",
      image: "/public/images/4.jpg",
      description: "Mathematician",
    },
    {
      id: 5,
      title: "Gallery 5",
      image: "/public/images/5.jpg",
      description: "Mathematician",
    },
    {
      id: 6,
      title: "Gallery 6",
      image: "/public/images/6.jpg",
      description: "Mathematician",
    },
    {
      id: 7,
      title: "Gallery 7",
      image: "/public/images/7.jpg",
      description: "Mathematician",
    },
    {
      id: 8,
      title: "Gallery 8",
      image: "/public/images/8.jpg",
      description: "Mathematician",
    },
    {
      id: 9,
      title: "Gallery 9",
      image: "/public/images/9.jpg",
      description: "Mathematician",
    },
    {
      id: 10,
      title: "Gallery 10",
      image: "/public/images/10.jpg",
      description: "Mathematician",
    },
    {
      id: 11,
      title: "Gallery 11",
      image: "/public/images/11.jpg",
      description: "Mathematician",
    },
  ];

  return (
    <div className="bg-slate-950 gap-2 grid grid-cols-12 grid-rows-2 px-8">
      {galleries.map((gallery) => (
        <Card
          key={gallery.id}
          className="col-span-12 mt-4 sm:col-span-4 h-[300px] gap-4"
        >
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
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
  );
};

export default GalleryCard;
