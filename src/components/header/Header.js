"use Client"
import NavbarBottom from "./navbarBottom/NavbarBottom"
import NavbarTop from "./navbarTop/NavbarTop"
function Header() {
    return (
      <div className="w-full">
        <NavbarTop/>
        <NavbarBottom/>
      </div>
    )
}
export default Header