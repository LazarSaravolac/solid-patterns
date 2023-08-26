import {HiOutlineArrowNarrowRight,HiOutlineArrowNarrowLeft} from "react-icons/hi";

interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  role?: "back" | "forward" | "main" | "not-found";
  icon?: React.ReactNode;
}

export function Button(props: IButtonProps) {
  const { text, role, icon } = props;
  return (
    <button
      {...props}
    >
      {text}
      <div>
        {role === "forward" && <HiOutlineArrowNarrowRight />}
        {role === "back" && <HiOutlineArrowNarrowLeft />}
        {icon}
      </div>
    </button>
  );
}
