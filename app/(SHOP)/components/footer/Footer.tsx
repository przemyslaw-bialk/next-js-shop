import FooterCopyrights from "./FooterCopyright";
import FooterCustomerService from "./FooterCustomerService";
import FooterLogoSection from "./FooterLogoSection";
import FooterMyAccount from "./FooterMyAccount";
import FooterProductCategories from "./FooterProductCategories";

const Footer = () => {
  return (
    <>
      <footer className="flex items-start p-1 mt-8 gap-10 ">
        <FooterLogoSection />
        <FooterProductCategories />
        <FooterCustomerService />
        <FooterMyAccount />
      </footer>
      <FooterCopyrights />
    </>
  );
};

export default Footer;
