import NavbarComp from "./navbar-comp";
import Footer from "./footer";
import CEMacroFilter from "./ce-macro-filter";

const Layout = ({ children }) => {
  return (
    <>
      <NavbarComp />
      <CEMacroFilter />

      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
