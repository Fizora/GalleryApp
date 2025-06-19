import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="mx-10 ">
        <Navbar></Navbar>
        <div className="h-screen flex items-center justify-center">
          <h1 className="text-center text-8xl">
            <span className="hover:bg-white hover:text-black px-2 duration-200">
              Come
            </span>
            <span className="hover:bg-white hover:text-black px-2 duration-200">
              With
            </span>
            <span className="hover:bg-white hover:text-black px-2 duration-200">
              Me,
            </span>
            <span className="hover:bg-white hover:text-black px-2 duration-200">
              Creating
            </span>
            <span className="hover:bg-white hover:text-black px-2 duration-200">
              Full{" "}
            </span>
            <span className="hover:bg-white hover:text-black px-2 duration-200">
              Photo
            </span>
            <span className="hover:bg-white hover:text-black px-2 duration-200">
              HD
            </span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default App;
