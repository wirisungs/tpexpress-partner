import React from 'react';
import ContentSection from './ContentSection';
import CodeBlock from './CodeBlock';

const PageContent: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl font-bold leading-none text-orange-400 max-md:max-w-full">
        Page title
      </h1>
      <div className="flex flex-col flex-1 mt-4 w-full text-neutral-900 max-md:max-w-full">
        <ContentSection
          title="Content title"
          content="Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content :)"
        />
        <ContentSection
          title="Content title"
          content="Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content :)"
        >
          <div className="flex flex-wrap gap-4 items-center mt-4 w-full text-zinc-50 max-md:max-w-full">
            <div className="self-stretch p-3 my-auto text-base font-medium leading-none bg-rose-500 rounded-xl">
              POST / GET
            </div>
            <CodeBlock content="content" />
          </div>
          <CodeBlock content="content" className="mt-4" />
        </ContentSection>
      </div>
    </>
  );
};

export default PageContent;