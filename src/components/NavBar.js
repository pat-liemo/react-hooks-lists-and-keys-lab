import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const newLinks = links.map(function(link) {
    return (
      <a key={link} href={`#${link}`}>{link}</a>
    )
  });

  return <nav>
    {/* display an <a> tag for each link here */}
    {newLinks}
    </nav>;
}

export default NavBar;
