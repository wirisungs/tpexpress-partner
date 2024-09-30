import React from 'react';

interface SidebarItemProps {
  label: string;
  isBold?: boolean;
  hasIcon?: boolean;
  isActive?: boolean;
  isIndented?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  isBold = false,
  hasIcon = false,
  isActive = false,
  isIndented = false,
}) => {
  const baseClasses = "overflow-hidden flex-1 shrink gap-1 self-stretch py-2.5 w-full text-lg leading-none";
  const boldClasses = isBold ? "font-bold" : "";
  const activeClasses = isActive ? "text-teal-600" : "text-neutral-900";
  const indentClasses = isIndented ? "pr-4 pl-7 mt-3 max-md:pl-5" : "px-4";

  return (
    <div className={`${baseClasses} ${boldClasses} ${activeClasses} ${indentClasses}`}>
      <div className="flex items-center">
        {label}
        {hasIcon && (
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5c885c43b874d26c4ad64d998b034ef66a7a81e994577aaadacc24f0bd572f7?placeholderIfAbsent=true&apiKey=15b59fc130e4444f91de6f123898acea"
            alt=""
            className="object-contain aspect-square w-[18px] ml-auto"
          />
        )}
      </div>
    </div>
  );
};

export default SidebarItem;