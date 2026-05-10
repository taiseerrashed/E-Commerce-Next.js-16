const Footer = () => {
  return (
    <footer className="bg-foreground text-secondary py-6">
      <div className="container text-center">
        <p>
          &copy; {new Date().getFullYear()} <span className="text-main-color">ShopMart</span> developed by <span className="text-main-color font-medium">Taiseer</span>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
