import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type HeaderProps = {
  title: string;
  navItems: string[];
  userImage: string;
};

const Header: React.FC<HeaderProps> = ({ title, navItems, userImage }) => {
  return (
    <header className="flex flex-wrap gap-10 justify-between self-center px-2.5 w-full font-bold bg-zinc-50 min-h-[60px] max-md:max-w-full">
      <h1 className="text-3xl leading-9 text-orange-400 w-[218px]" style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.25)' }}>{title}</h1>
      <nav className="flex gap-10 items-center h-full text-2xl leading-none min-w-[240px]">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href="#"
            className={`self-stretch p-3 my-auto whitespace-nowrap ${
              index === 0 ? 'text-teal-600 border-teal-600 border-b-[3px]' : ''
            }`}
          >
            {item}
          </Link>
        ))}
      </nav>
      <div className="flex gap-3 items-center px-1.5 py-0.5 my-auto text-base leading-none min-h-[44px]">
        <Image
          src={userImage}
          alt="User avatar"
          width={40}
          height={40}
          className="object-contain shrink-0 self-stretch my-auto rounded-full"
        />
        <span className="self-stretch my-auto">Đăng nhập</span>
      </div>
    </header>
  );
};

export default Header;