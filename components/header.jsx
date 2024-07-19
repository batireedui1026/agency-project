const Header = () => {
  return (
    <div>
      <p className="text-neutral-700">lets shift your business </p>
      <h1 className="font-bold text-4xl">
        {" "}
        shiftt your business fast with Shade Pro
      </h1>
      <p className="text-slate-600">
        with lots of unique blocks, you can easily build
        <br />a Page wihtout coding. Build your next consultancy website <br />
        within few minutes.
      </p>
      <button className="font-bold bqck bg-blue-800 text-white pr-3 rounded h-9 text-center">
        Get started a project
      </button>
      <div>
        <img
          className="rounded-full w-96 height-96"
          src="./images/woman-img.png"
          alt=""
        />
      </div>
    </div>
  );
};
export default Header;
