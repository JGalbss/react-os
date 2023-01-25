import Image from 'next/image';
import { useEffect, useState } from 'react';
import BackgroundGif from '@/public/images/background.gif';
import LoadingBar from '@/components/templates/loading-bar';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  });

  return (
    <>
      {!isLoading ? (
        <div className="flex h-screen items-center justify-center bg-[#4258C6] bg-cover">
          <div className="z-50">
            <LoadingBar />
          </div>
          <div className="absolute bottom-0">
            <Image alt="Background Image" src={BackgroundGif} />
          </div>
        </div>
      ) : (
        <div>Testing</div>
      )}
    </>
  );
}
