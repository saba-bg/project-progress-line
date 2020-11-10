import React, { useState } from "react";
import Hamburger from "hamburger-react";

function HamburgerMenu() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </div>
  );
}

export default HamburgerMenu;
