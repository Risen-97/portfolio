import Footer from "./Footer";
import Navbar from "./Navbar";
import Social from "./social/Social";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="max-w-[1500px] mx-auto px-10">{children}</main>
      <Social />
      <Footer />
    </>
  );
};

export default Layout;
