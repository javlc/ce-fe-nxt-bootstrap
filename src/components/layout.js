import NavbarComp from "./navbar-comp";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <NavbarComp />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
