import clsx from "clsx";
import { FC, HTMLAttributes } from "react";

interface ButtonOwnProps {
  bg?: "primary" | "none";
}

type ButtonProps = HTMLAttributes<HTMLButtonElement> & ButtonOwnProps;

export const Button: FC<ButtonProps> = ({
  children,
  className,
  bg,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "flex items-center",
        "px-6 py-1 h-9 text-base rounded-md text-zinc-100",
        bg === "primary" && "bg-blue-600 hover:bg-blue-700 active:bg-blue-800",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
