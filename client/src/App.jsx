import "./assets/sass/index.scss";
import { BiBot } from "react-icons/bi";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-5 uppercase cursor-pointer hover:text-blue-500">
        Hello world!
      </h1>
      <div className="flex justify-center items-center w-screen">
        <BiBot
          className="text-9xl hover:text-green-500 cursor-wait"
          size="5em"
        />
      </div>
    </>
  );
}

export default App;
