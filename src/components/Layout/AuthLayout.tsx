import React from "react";
import TPLogo from "@/Svg/TPLogo";
import "@/Style/main.css";

interface LayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-container flex flex-row w-full h-[100vh]">
      <div className="body w-[70%] h-[100vh] flex justify-center items-center">
        {children}
      </div>
      <div className="logoArea w-[30%] h-[100vh] flex justify-center items-center right-0">
        <TPLogo />
      </div>
    </div>
  );
};

export default AuthLayout;
