import { FC, ReactNode } from "react";

interface DLProps {
  children: React.ReactNode;
}

const DarkLayout = ({ children }: DLProps): JSX.Element => {
  return (
    <div
      style={{
        backgroundColor: "blue",
        padding: "3em",
      }}
    >
      <div>{children}</div>
    </div>
  );
};

export default DarkLayout;
