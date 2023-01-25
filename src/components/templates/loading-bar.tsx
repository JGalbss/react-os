import { FC } from 'react';

/* Props */
type LoadingBarProps = {
  percentage: number;
};

/* Component */
const LoadingBar: FC<LoadingBarProps> = ({ percentage }) => {
  return (
    <div className="flex h-2.5 bg-[#2D3549]">
      <div className="h-2.5 bg-gray-100" style={{ width: `${percentage}%` }}></div>
    </div>
  );
};

export default LoadingBar;
