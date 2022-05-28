import NavItem from "./NavItem";
export default function Nav() {
    return (
        <ul className=" font-Archivo flex justify-center space-x-10 py-20">
              <NavItem>Home</NavItem>
              <NavItem>Our Menu</NavItem>
              <NavItem>Store</NavItem>
              <NavItem>Contact Us</NavItem>
            </ul>
    );
}