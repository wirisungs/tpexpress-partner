import React from 'react';
import Copy from '@/Svg/Copy'

interface CodeBlockProps {
  content: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ content, className = '' }) => {
  return (
    <div className={`flex flex-wrap flex-1 shrink gap-10 justify-between items-start p-3 w-full text-lg leading-none whitespace-nowrap rounded-xl bg-neutral-900 min-h-[49px] text-zinc-50 max-md:max-w-full ${className}`}>
      <div>{content}</div>
      {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7b2bf04218e58e2f7814cb0dd338d03a975442a54dffabed6a0a2248c171be9?placeholderIfAbsent=true&apiKey=15b59fc130e4444f91de6f123898acea" alt="" className="object-contain shrink-0 aspect-square w-[25px]" /> */}
      <div className="object-contain shrink-0 aspect-square w-[25px]">
        <Copy/>
      </div>
    </div>
  );
};

export default CodeBlock;