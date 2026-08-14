const EmptyCartInfo = () => {
  return (
    <div className="flex min-h-100 items-center justify-center rounded-md border border-neutral-200 bg-neutral-50">
      <div className="text-center">
        <h2 className="text-lg font-semibold text-neutral-800">
          Your cart is empty
        </h2>

        <p className="mt-2 text-sm text-neutral-500">
          Add some products to your cart.
        </p>
      </div>
    </div>
  );
};

export default EmptyCartInfo;
