const Loader = () => {
  return (
    <div className="fixed top-1/2 right-1/2">
      <div className="relative flex items-center justify-center">
        <div className="absolute w-16 h-16 rounded-full bg-accent opacity-10 blur-xl" />
        <div className="w-12 h-12 border-2 border-neutral-200 border-t-accent rounded-full animate-spin" />
        <div className="absolute w-2 h-2 bg-accent rounded-full" />
      </div>
    </div>
  );
};

export default Loader;
