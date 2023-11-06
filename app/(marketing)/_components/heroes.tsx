import Image from "next/image";

const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
          <Image
            src="/documents.svg"
            fill
            className="object-contain dark:hidden"
            alt="Documents"
            priority
          />
          <Image
            src="/documents-dark.svg"
            fill
            className="object-contain hidden dark:block"
            alt="Documents"
            priority
          />
        </div>
        <div className="relative h-[300px] w-[400px] hidden md:block">
          <Image
            src="/notes.svg"
            fill
            className="object-contain transform -scale-x-100 dark:hidden"
            alt="Laptop"
          />
          <Image
            src="/notes-dark.svg"
            fill
            className="object-contain transform -scale-x-100 hidden dark:block"
            alt="Laptop"
          />
        </div>
      </div>
    </div>
  );
};

export default Heroes;
