function Navbar() {
  return (
    <>
      <div className="sticky flex justify-between items-center border-b border-gray-600 py-2">
        {/* logo */}
        <div className="">GalleryPhoto</div>
        <nav className="flex items-center ">
          <a
            href=""
            className="hover:bg-white hover:text-black px-4 py-2 duration-200"
          >
            Overview
          </a>
          <a
            href=""
            className="hover:bg-white hover:text-black px-4 py-2 duration-200"
          >
            Photo
          </a>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
