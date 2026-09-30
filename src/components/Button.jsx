import { twMerge } from "tailwind-merge";

function Button({ href, children, className }) {
  const defaultStyles =
    "inline-block px-[clamp(17px,1vw,27px)] py-[clamp(13px,1vw,16px)] font-family font-semibold tracking-[-0.04em] text-[clamp(11px,1.275vw,17px)] bg-(--blue) hover:bg-(--dark-blue) duration-300 ease-in-out text-(--white) rounded-lg items-center justify-center";
  const combinedStyles = twMerge(defaultStyles, className);

  return (
    <>
      <a href={href} id="Button" className={combinedStyles}>
        {children}
      </a>
    </>
  );
}

export default Button;
