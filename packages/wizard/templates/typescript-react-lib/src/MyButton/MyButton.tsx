import { IMyButtonProps } from "./MyButton.types";

const MyButton = ({ children, ...props }: IMyButtonProps) => (
  <button type="button" {...props}>
    {children}
  </button>
);

export default MyButton;
