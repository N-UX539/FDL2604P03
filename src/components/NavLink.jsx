function NavLink({ href, children }) {
  return (
    <>
      <section
        id="navLink"
        className="nav-link font-family text-[clamp(14px,1vw,15px)] text-(--black) tracking-[-0.01em] underline-fx"
      >
        <a
          href={href}
          rel="noreferrer"
          className="font-semibold leading-[173%] bg-inherit max-lg:hover:bg-[rgba(71,59,240,0.08)] max-lg:hover:text-(--blue) duration-300 ease-in-out max-lg:block max-lg:px-4 max-lg:py-3.25 max-lg:rounded-lg"
        >
          {children}
        </a>
      </section>
    </>
  );
}

export default NavLink;
