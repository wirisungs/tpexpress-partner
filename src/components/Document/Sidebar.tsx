import React from 'react';
import SidebarItem from './SidebarItem';

const Sidebar: React.FC = () => {
  const orderItems = [
    { label: 'Update order', isActive: true },
    { label: 'Delete order', isActive: false },
    { label: 'Order info', isActive: false },
    { label: 'Calculate', isActive: false },
  ];

  return (
    <aside className="flex overflow-hidden flex-col bg-zinc-50 min-w-[240px] w-[250px]">
      <div className="flex flex-col w-full">
        <SidebarItem label="Hướng dẫn cách lấy Token" isBold />
        <div className="flex flex-col mt-2 w-full">
          <SidebarItem label="Order" isBold hasIcon />
          {orderItems.map((item, index) => (
            <SidebarItem
              key={index}
              label={item.label}
              isActive={item.isActive}
              isIndented
            />
          ))}
        </div>
        <SidebarItem label="Shipping" isBold />
        <SidebarItem label="Address" isBold />
      </div>
    </aside>
  );
};

export default Sidebar;