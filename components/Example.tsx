const ShadowExample = () => (
  <div className="w-full max-w-[360px] text-center">
    <h4 className="text-white text-2xl">Shadow</h4>
    <div className="rounded-md mt-4">
      <div className="z-10 relative w-full h-[300px] bg-slate-800 rounded-md shadow-[0_0_20px_0_rgba(0,185,255,0.9)]">
        <h4 className="z-5 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl text-white">
          Shadow
        </h4>
      </div>
    </div>
  </div>
);

const GlassExample = () => (
  <div className="w-full max-w-[360px] text-center">
    <h4 className="text-white text-2xl">Glass</h4>
    <div className="border-[0.25px] rounded-md mt-4">
      <div className="z-10 relative w-full h-[300px] rounded-md bg-gradient-to-r from-red-500 to-blue-500 bg-opacity-60 blur-sm hover:blur-none transition">
        <h4 className="z-5 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl">
          Glass
        </h4>
      </div>
    </div>
  </div>
);

const AnimationExample = () => (
  <div className="w-full max-w-[360px] text-center overflow-hidden">
    <h4 className="text-white text-2xl">Animation</h4>
    <div className="border-[0.25px] rounded-md mt-4">
      <div className="z-10 relative w-full h-[300px] rounded-md animate-big-show">
        <h4 className="z-5 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl text-white">
          Animation
        </h4>
      </div>
    </div>
  </div>
);

const Example = () => {
  return (
    <section
      className="h-screen w-full flex flex-col items-center"
      id="example"
    >
      <h2 className="text-white text-6xl mt-20">Example</h2>
      <div className="max-w-7xl w-full flex flex-col md:flex-row justify-evenly gap-4 mt-16">
        <ShadowExample />
        <GlassExample />
        <AnimationExample />
      </div>
    </section>
  );
};

export default Example;
