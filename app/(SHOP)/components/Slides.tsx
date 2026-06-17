import Image, { StaticImageData } from "next/image";
import model from "../../../public/model.png";
import ButtonSlider from "./ButtonSlider";

interface ISlides {
  id: number;
  image: StaticImageData;
  heading: string;
  text: string;
  button_text: string;
}

const slides = [
  {
    id: 1,
    image: model,
    heading: "Nowa kolekcja Wiosna 2027",
    text: "Okdryj najnowsze trendy i ponadczasowe klasyki na nowy sezon.",
    button_text: "Zobacz kolekcję",
  },
  {
    id: 2,
    image: model,
    heading: "Nowa kolekcja Wiosna 2027",
    text: "test tekst",
    button_text: "test button",
  },
];

const Slides = () => {
  return (
    <div className="flex">
      {slides.map((slide: ISlides) => (
        <div className="min-w-full h-120 bg-[#F0ECE8] flex" key={slide.id}>
          <div className=" flex-1/6 md:flex-3/4 p-4 mt-8">
            <div className="flex flex-col items-start gap-7 ">
              <h1 className="text-6xl  font-display ">{slide.heading}</h1>
              <p>{slide.text}</p>
              <ButtonSlider text={slide.button_text} />
            </div>
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
