import Image, { StaticImageData } from "next/image";
import model from "../../../public/model.png";

interface ISlides {
  id: number;
  image: StaticImageData;
  text: string;
}

const slides = [
  { id: 1, image: model, text: "test" },
  { id: 2, image: model, text: "test2222" },
];

const Slides = () => {
  return (
    <div className="flex">
      {slides.map((slide: ISlides) => (
        <div className="min-w-full h-120 bg-[#F3EFEA] flex" key={slide.id}>
          <div className="p-6 flex-1/12 md:flex-1/2 ">
            <h1 className="text-2xl font-bold">{slide.text}</h1>
          </div>

          <div className="w-full relative  ">
            <Image
              src={slide.image}
              alt="model"
              fill
              className="object-cover "
              preload
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slides;
