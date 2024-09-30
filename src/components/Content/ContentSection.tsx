import React from 'react';

interface ContentSectionProps {
  title: string;
  content: string;
  children?: React.ReactNode;
}

const ContentSection: React.FC<ContentSectionProps> = ({ title, content, children }) => {
  return (
    <section className="flex flex-col mt-4 w-full max-md:max-w-full">
      <h2 className="text-2xl font-bold leading-none max-md:max-w-full">{title}</h2>
      <p className="mt-4 text-base leading-6 max-md:max-w-full">{content}</p>
      {children}
    </section>
  );
};

export default ContentSection;