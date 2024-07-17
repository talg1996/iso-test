import { Header } from "@/app/components/Header";

// Define Database component
const Database: React.FC = () => {
  return (
    <div className="">
      <Header />
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 shadow-md bg-white rounded-lg overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Project
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Developer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Output To Chassis
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Input To Chassis
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Input To Output
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Output To Output
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Number Of Output
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                M6029
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Tal Itzaki
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                200V
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                200V
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                200V
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                50
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                1
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                M6029
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Menshe Cohen
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                500V
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                200V
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                200V
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                50
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                3
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                M6029
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Tal Itzaki
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                200V
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                200V
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                200V
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                50
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                1
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                M8029
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Menashe Choen
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                500V
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                100V
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                200V
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                50
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                5
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex items-center m-4">
          <button
            type="button"
            disabled={false}
            className={`focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 flex gap-2 bg-blue-400 hover:bg-blue-500`}
          >
            Add
            <svg
              fill="#000000"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 45.402 45.402"
              className="invert"
            >
              <g>
                <path
                  d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
		c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
		c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
		c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"
                />
              </g>
            </svg>
          </button>
          <button
            type="button"
            disabled={false}
            className={`focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 flex gap-2 bg-orange-400 hover:bg-orange-500`}
          >
            Edit
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="20px"
              height="20px"
              className="invert"
            >
              <path d="M 43.125 2 C 41.878906 2 40.636719 2.488281 39.6875 3.4375 L 38.875 4.25 L 45.75 11.125 C 45.746094 11.128906 46.5625 10.3125 46.5625 10.3125 C 48.464844 8.410156 48.460938 5.335938 46.5625 3.4375 C 45.609375 2.488281 44.371094 2 43.125 2 Z M 37.34375 6.03125 C 37.117188 6.0625 36.90625 6.175781 36.75 6.34375 L 4.3125 38.8125 C 4.183594 38.929688 4.085938 39.082031 4.03125 39.25 L 2.03125 46.75 C 1.941406 47.09375 2.042969 47.457031 2.292969 47.707031 C 2.542969 47.957031 2.90625 48.058594 3.25 47.96875 L 10.75 45.96875 C 10.917969 45.914063 11.070313 45.816406 11.1875 45.6875 L 43.65625 13.25 C 44.054688 12.863281 44.058594 12.226563 43.671875 11.828125 C 43.285156 11.429688 42.648438 11.425781 42.25 11.8125 L 9.96875 44.09375 L 5.90625 40.03125 L 38.1875 7.75 C 38.488281 7.460938 38.578125 7.011719 38.410156 6.628906 C 38.242188 6.246094 37.855469 6.007813 37.4375 6.03125 C 37.40625 6.03125 37.375 6.03125 37.34375 6.03125 Z" />
            </svg>
          </button>
          <button
            type="button"
            disabled={false}
            className={`focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 flex gap-2 bg-red-400 hover:bg-red-500`}
          >
            Delete
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="20px"
              height="20px"
              className="invert"
            >
              {" "}
              <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Database;
