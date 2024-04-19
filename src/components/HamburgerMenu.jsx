const HamburgerMenu = ({ isOpen, onClick }) => {
  return (
    <button className={`hamburger-btn ${isOpen ? "expanded" : ""} md:hidden`} onClick={onClick}>
      <span className={`hamburger-inner bg-neutral-grayish-violet ${isOpen && "transform rotate-45"}`}></span>
      <span className={`hamburger-inner bg-neutral-grayish-violet ${isOpen && "opacity-0"}`}></span>
      <span className={`hamburger-inner bg-neutral-grayish-violet ${isOpen && "transform -rotate-45"}`}></span>
    </button>
  );
};

export default HamburgerMenu;
