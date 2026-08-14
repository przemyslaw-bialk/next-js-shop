import { LiaShippingFastSolid } from "react-icons/lia";

const ShippingInfo = () => {
  return (
    <div className="mt-6 rounded-md border border-neutral-200 divide-y divide-neutral-200">
      <div className="flex items-center gap-3 p-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100">
          <LiaShippingFastSolid className="text-xl text-neutral-700" />
        </div>

        <div>
          <p className="text-sm font-semibold">
            Order before 3:00 PM - delivery tomorrow
          </p>
          <p className="text-xs text-neutral-500">Fast courier delivery</p>
        </div>
      </div>

      <div className="flex items-center gap-3 p-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100">
          <LiaShippingFastSolid className="text-xl text-neutral-700" />
        </div>

        <div>
          <p className="text-sm font-semibold">
            Free shipping for orders over 99$
          </p>
          <p className="text-xs text-neutral-500">Save on delivery costs</p>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfo;
