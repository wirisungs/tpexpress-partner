import React from 'react';
import Image from 'next/image';

type HeroProps = {
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
};

const Hero: React.FC<HeroProps> = ({ imageSrc, title, subtitle, description }) => {
  return (
    <section className="flex flex-wrap gap-8 justify-center items-center p-8 w-full leading-none text-orange-400 max-md:px-5 max-md:max-w-full">
      <Image
        src={imageSrc}
        alt="Hero image"
        width={500}
        height={286}
        className="object-contain self-stretch my-auto aspect-[1.75] min-w-[240px] w-[500px] max-md:max-w-full"
      />
      <div className="flex flex-col justify-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
        <h2 className="text-3xl font-bold leading-none" style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.25)' }}>{title}</h2>
        <p className="mt-2.5">{subtitle}</p>
        <p className="mt-2.5 max-md:max-w-full">{description}</p>
      </div>
    </section>
  );
};

export default Hero;