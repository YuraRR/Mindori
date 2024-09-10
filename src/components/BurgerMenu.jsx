import NavLinks from "./NavLinks";

export default function BurgerMenu({ isActive, openMenu }) {
  return (
    <section
      className={`absolute w-full h-screen top-0 bg-lightBeige bg-opacity-90 transition-opacity ease-in-out duration-300 ${
        isActive ? "opacity-100 " : "opacity-0 pointer-events-none"
      }`}
    >
      <span className="w-full h-1 border-b border-darkGreen absolute top-10 "> </span>
      <div className="flex flex-col pt-20 p-10 text-24 gap-7">
        <NavLinks {...{ openMenu }} />
      </div>
    </section>
  );
}
