import { LiaShippingFastSolid } from "react-icons/lia";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";

const Features = () => {
  return (
    <div className="grid grid-cols-2 gap-10 justify-items-center mt-6 md:flex md:items-center md:justify-center md:gap-20">
      <div className="flex items-center gap-3">
        <LiaShippingFastSolid className="text-primary text-3xl" />
        <div>
          <h4 className="font-bold text-sm">Free Shipping</h4>
          <p className="text-sm text-neutral-600">On orders over $100</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <BsArrowCounterclockwise className="text-primary text-3xl" />
        <div>
          <h4 className="font-bold text-sm">Free Returns</h4>
          <p className="text-sm text-neutral-600">30-day return guarantee</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <AiOutlineSafetyCertificate className="text-primary text-3xl" />
        <div>
          <h4 className="font-bold text-sm">Secure Payments</h4>
          <p className="text-sm text-neutral-600">Protected checkout</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <BiSupport className="text-primary text-3xl" />
        <div>
          <h4 className="font-bold text-sm">Dedicated Support</h4>
          <p className="text-sm text-neutral-600">Available 7 days a week</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
