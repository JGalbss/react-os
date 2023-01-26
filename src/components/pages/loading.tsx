import { FC } from 'react';
import LoadingBar from '../templates/loading-bar';

type LoadingPageProps = {
  progress: number;
};

const LoadingPage: FC<LoadingPageProps> = ({ progress }) => {
  return (
    <div
      className="flex h-screen w-full items-center justify-center
        bg-[#171719]"
    >
      <div className="z-50">
        <h1 className="font-pixel text-3xl text-gray-100">Loading...</h1>
        <LoadingBar percentage={progress * 100} />
      </div>
    </div>
  );
};

export default LoadingPage;
