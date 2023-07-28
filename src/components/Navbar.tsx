function Navbar() {
  return (
    <nav className="not-prose m-8">
      <ul className="text-white flex gap-8 items-start justify-center">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>Resume</li>
      </ul>
    </nav>
  );
}

export default Navbar;
