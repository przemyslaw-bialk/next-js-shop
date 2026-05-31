const MiniLoader = () => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute w-8 h-8 rounded-full bg-accent opacity-10 blur-xl" />
      <div className="w-6 h-6 border-2 border-neutral-200 border-t-accent rounded-full animate-spin" />
      <div className="absolute w-1 h-1 bg-accent rounded-full" />
    </div>
  );
};

export default MiniLoader;
