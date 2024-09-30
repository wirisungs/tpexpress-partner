import React from 'react';

type ContentSectionProps = {
  title: string;
  paragraphs: string[];
};

const ContentSection: React.FC<ContentSectionProps> = ({ title, paragraphs }) => {
  return (
    <section className="flex flex-col justify-center px-8 py-2.5 mt-6 w-full text-base max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full leading-none max-md:max-w-full">
        <h2 className="text-3xl font-bold leading-none max-md:max-w-full">{title}</h2>
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="mt-3 leading-6 max-md:max-w-full"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}
      </div>
    </section>
  );
};

export default ContentSection;