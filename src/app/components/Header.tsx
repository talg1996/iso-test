import Image from "next/image"; // Import the Image component from Next.js

export const Header: React.FC = () => {
  return (
    <div className="flex flex-wrap  justify-start content-center mx-2 my-2 px-4 py-6 rounded  gap-5 bg-blue-100 shadow-xl">
      <div className="flex flex-wraph-10  content-center">
        <Image
          src="/enercon.png" // Adjust the path to your image file
          alt="Isolation Test"
          width={150}
          height={50}
        />
      </div>
      <h1 className="text-xl font-bold mx-10">Auto Tester Isolation Test</h1>
    </div>
  );
};
