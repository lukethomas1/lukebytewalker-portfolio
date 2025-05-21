import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 p-8">
      <div className="col-span-full p-4 bg-cyan-400 rounded-md flex items-center justify-center">Header</div>
      <div className="lg:col-start-2 p-4 bg-cyan-400 rounded-md flex items-center justify-center">Luke Thomas</div>
      <div className="lg:col-start-2 p-4 bg-cyan-400 rounded-md flex items-center justify-center">Where I've worked</div>
      <div className="lg:col-start-2 p-4 bg-cyan-400 rounded-md flex items-center justify-center">Education</div>
      <div className="row-start-2 row-span-2 md:col-start-2 lg:col-start-3 p-4 bg-cyan-400 rounded-md flex items-center justify-center">Projects</div>
      <div className="md:col-start-2 lg:col-start-3 p-4 bg-cyan-400 rounded-md flex items-center justify-center">Available to work</div>
      <div className="col-span-full col-start-1 p-4 bg-cyan-400 rounded-md flex items-center justify-center">Footer</div>
    </div>
  );
}