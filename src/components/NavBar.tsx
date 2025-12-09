const NavBar = () => {
  const navItems = [
    { label: "HOME", href: "header" },
    { label: "SERVICES", href: "services" },
    { label: "PROJECTS", href: "projects" },
    { label: "ABOUT", href: "about" },
    { label: "CONTACT", href: "contact" },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const elementTop = el.getBoundingClientRect().top + window.scrollY;
    const offset = window.innerHeight / 2 - el.offsetHeight / 2;
    // This scrolls section to center of page

    window.scrollTo({
      top: elementTop - offset,
      behavior: "smooth",
    });
  };
  return (
    <div className="navbar shadow-sm text-md mt-2">
      <div className="navbar-start"></div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((i) => (
            <li key={i.label}>
              <button onClick={() => scrollToSection(i.href)} className="">
                {i.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default NavBar;
