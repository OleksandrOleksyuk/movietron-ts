import { ChildrenProps } from "../types";

function Main({ children }: ChildrenProps) {
  return <main className="main">{children}</main>;
}

export default Main;
