type Props = {
  testResult: string;
  detailesResult: string;
};

export const Log: React.FC<Props> = ({ testResult, detailesResult }) => {
  const color = {
    red: "bg-gradient-to-r from-red-500 via-red-400 to-red-500",
    green: "bg-gradient-to-r from-green-500 via-green-400 to-green-500",
    white: "bg-white dark:bg-gray-700",
  };

  return (
    <div className="m-2 px-4 py-8 flex flex-col flex-wrap gap-5 rounded shadow-xl grow  bg-white/30 dark:bg-gray-200/30">
      <div className="text-2xl text-gray-900 dark:text-white border-b-2">
        <h1>LOG RESULTS</h1>
      </div>
      <div className="mx-2 my-2 px-4 py-8 flex-1 flex-wrap rounded backdrop-blur-xl bg-white/30 dark:bg-gray-700/30">
        <p className=" text-1xl">{detailesResult}</p>
      </div>

      <div className="flex justify-center items-center mx-2 my-2 ">
        <div
          className={` px-4 py-8 border border-black rounded hover:scale-125 transform-gpu transition-transform duration-300  ${
            testResult === "Pass"
              ? color.green
              : testResult === "Fail"
              ? color.red
              : color.white
          } w-full ho sm:w-96`}
        >
          <p className="text-center font-bold text-2xl dark:text-white">
            {testResult}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Log;
