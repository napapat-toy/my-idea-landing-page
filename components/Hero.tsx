const Hero = () => {
  return (
    <section
      className="h-screen max-w-[80%] md:w-full flex items-center justify-center"
      id="hero"
    >
      <div className="group border-[0.5px] border-black p-6 hover:bg-white hover:ring-8 hover:ring-slate-500 rounded-md transition">
        <h1 className="text-8xl text-white group-hover:text-black transition cursor-default select-none">
          My <span className="text-blue-500 group-hover:text-[#F6AF3B] transition">IDEA</span> space
        </h1>
      </div>
    </section>
  );
};

export default Hero;
