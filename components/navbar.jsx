const Navbar = () => {
  return (
    <nav className="flex justify-between ">
      <div className="flex gap-4">
        <h1 className="font-bold">Brainwave.io</h1>
        <ul className="flex gap-7 text-amber-950 ">
          <li>Demos</li>
          <li>Pages</li>
          <li>Support</li>
          <li>Contact</li>
        </ul>
      </div>
      <button className="font-bold bqck bg-blue-800 text-white pr-3 rounded h-9 text-center">
        Get started a project
      </button>
    </nav>
  );
};
export default Navbar;
