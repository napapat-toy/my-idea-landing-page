import Link from "next/link";

const About = () => {
  return (
    <section
      className="h-screen w-full flex items-center justify-center max-w-7xl"
      id="about"
    >
      <h2 className="font-semibold text-2xl text-white p-4 bg-slate-400 rounded-xl">
        This page created for testing how far i understand about using{" "}
        <span className="text-blue-500 hover:underline hover:underline-offset-4">
          <Link href={"https://tailwindcss.com"}>tailwindcss</Link>
        </span>{" "}
        and{" "}
        <span className="text-black hover:underline hover:underline-offset-4">
          <Link href={"https://ui.shadcn.com"}>shadcn</Link>
        </span>
        .
      </h2>
    </section>
  );
};

export default About;
