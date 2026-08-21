import { MdOutlineEmail, MdPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";

const ContactIcons = () => {
  return (
    <div className="flex flex-col gap-8 mt-6">
      <div className="flex items-center gap-3">
        <div className="bg-neutral-100 rounded-full p-4">
          <MdOutlineEmail className=" text-accent text-xl" />
        </div>
        <div>
          <span className="tracking-wider">e-mail</span>
          <a
            href="mailto:contact@shopio.com"
            className="text-sm text-neutral-600 block"
          >
            contact@shopio.com
          </a>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="bg-neutral-100 rounded-full p-4">
          <MdPhone className=" text-accent text-xl" />
        </div>
        <div>
          <span className="tracking-wider">phone</span>
          <a href="tel:+48530034701" className="text-sm text-neutral-600 block">
            +48 530 034 701
          </a>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="bg-neutral-100 rounded-full p-4">
          <FaLocationDot className=" text-accent text-xl" />
        </div>
        <div>
          <span className="tracking-wider">address</span>
          <address className="text-sm text-neutral-600 block">
            ul. Zwyciestwa 2, 84-200 Wejherowo
          </address>
        </div>
      </div>
      <div className="flex items-start ml-1 gap-1">
        <IoIosInformationCircleOutline className="text-accent" />
        <p className="text-neutral-600 text-xs ">
          we respond within 24h from Monday to Friday
        </p>
      </div>
    </div>
  );
};

export default ContactIcons;
