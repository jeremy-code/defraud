import { Eyeball } from "./_components/Eyeball";

const Page = () => {
  return (
    <main className="container py-4">
      <div className="grid size-full content-center md:grid-cols-2">
        <div />
        <div className="size-[30rem] animate-float rounded-full bg-gray-900 dark:bg-gray-700">
          <div className="relative left-4 top-1/2 h-80 w-64 -translate-y-1/2 rounded-[50%] bg-white">
            <Eyeball />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
