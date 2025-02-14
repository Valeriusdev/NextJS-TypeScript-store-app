import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex">
      <Link href="/" className="mr-5">
        NavBar
      </Link>
      <Link href="/users">Users</Link>
    </div>
  );
};

export default NavBar;
