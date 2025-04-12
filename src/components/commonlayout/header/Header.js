'use client'

import NavbarBottom from "./NavbarBottom"
import NavbarTop from "./NavbarTop"

function Header() {
    return (
      <div className="w-full fixed top-0 left-0 right-0 z-50">
        <NavbarTop />
        <NavbarBottom />
      </div>
    )
}

export default Header;
