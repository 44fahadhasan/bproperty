import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../shared/Footer";
import Header from "../shared/Header";

const Main = () => {
  const location = useLocation();

  useEffect(() => {
    // Reinitialize Preline components on route change
    if (window.HSStaticMethods) {
      window.HSStaticMethods.autoInit();
    }
  }, [location.pathname]);

  return (
    <>
      {/* header */}
      <Header />

      {/* main layout */}
      <main className="open-sans min-h-[calc(100vh-599px)]">
        <Outlet />
      </main>

      {/* footer */}
      <Footer />
    </>
  );
};

export default Main;
