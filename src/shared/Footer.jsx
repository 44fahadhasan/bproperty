import FooterBottom from "../components/Footer/FooterBottom";
import FooterTop from "../components/Footer/FooterTop";

const Footer = () => {
  return (
    <footer class="bg-[#E9E9E9] text-[#4a4a4a] pb-5 pt-10 open-sans">
      {/* footer top */}
      <FooterTop />

      {/* footer bottom */}
      <FooterBottom />
    </footer>
  );
};

export default Footer;
