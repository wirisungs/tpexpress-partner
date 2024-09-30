import React from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}



const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex overflow-hidden flex-col bg-zinc-50">
      <div className="flex flex-col w-full min-h-[720px] max-md:max-w-full">
        <div className="flex flex-wrap flex-1 size-full max-md:max-w-full">
          <Sidebar />
          <main className="flex flex-col flex-1 shrink p-6 basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;