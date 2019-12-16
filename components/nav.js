import React, { useContext } from "react";
import Link from "next/link";
import appContext from "../context/context";
import { toggleForm } from "../context/actions";

const links = [{ href: "https://ostaco.com", label: "Main Website" }].map(
  link => {
    link.key = `nav-link-${link.href}-${link.label}`;
    return link;
  }
);

const Nav = () => {
  const { store, dispatch } = useContext(appContext);

  const onOpen = () => {
    dispatch({ type: "TOGGLE_FORM" });
  };
  return (
    <nav>
      <ul>
        {/* <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li> */}
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <a href={href}>{label}</a>
          </li>
        ))}
        <button onClick={onOpen}>Open Form</button>
      </ul>
    </nav>
  );
};

export default Nav;
