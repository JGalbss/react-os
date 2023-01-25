import Image from 'next/image';
import { FC } from 'react';
import BackgroundGif from '@/public/images/background.gif';
import LoadingBar from '../templates/loading-bar';

type LoadingPageProps = {
  progress: number;
};

const LoadingPage: FC<LoadingPageProps> = ({ progress }) => {
  return (
    <div className="flex h-screen items-center justify-center bg-[#4258C6] bg-cover">
      <div className="z-50">
        <h1 className="font-pixel text-3xl text-gray-100">Loading...</h1>
        <LoadingBar percentage={progress * 100} />
      </div>
      <div className="absolute bottom-0">
        <Image alt="Background Image" src={BackgroundGif} />
      </div>
    </div>
  );
};

export default LoadingPage;
