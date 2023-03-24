import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

const styleActive = {
  color: "red",
  textDecoration: "underline",
};

interface ActiveLinkProps {
  text: string;
  path: string;
}

const ActiveLink = ({ text, path }: ActiveLinkProps) => {
  const { asPath } = useRouter();

  return (
    <Link style={asPath === path ? styleActive : undefined} href={path}>
      {text}
    </Link>
  );
};

export default ActiveLink;
