import { ReactNode } from "react";

import Meta from "./Meta";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Meta title="WORD UP" />
      <div className="main-content">{children}</div>
    </>
  )
}

export default Layout;