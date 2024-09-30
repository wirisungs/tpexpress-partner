import React from 'react';

type FooterProps = {
  email: string;
  phone: string;
};

const Footer: React.FC<FooterProps> = ({ email, phone }) => {
  return (
    <footer className="flex flex-wrap gap-2.5 px-8 py-2.5 mt-6 w-full leading-none max-md:px-5 max-md:max-w-full">
      <div className="flex-1 shrink basis-0 max-md:max-w-full">
        Email support {email}
      </div>
      <div className="flex-1 shrink text-right basis-0 max-md:max-w-full">
        Hotline {phone}
      </div>
    </footer>
  );
};

export default Footer;