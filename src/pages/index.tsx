import { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import { useNProgress } from '@tanem/react-nprogress';
import LoadingPage from '@/components/pages/loading';

/* Page */
export default function Home() {
  /* States */
  const [isLoading, setIsLoading] = useState(true);

  const { progress } = useNProgress({
    isAnimating: true,

    incrementDuration: 1,
  });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Transition
        show={isLoading}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <LoadingPage progress={progress} />
      </Transition>
      <div>Testing</div>
    </>
  );
}
