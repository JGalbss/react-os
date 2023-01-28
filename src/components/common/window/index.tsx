import { FC } from 'react';
import { Rnd } from 'react-rnd';
import Icon from '../icons';

/* Props */
type WindowProps = {
  classNames?: string;
};

/* Component */
const Window: FC<WindowProps> = ({ classNames }) => {
  const WINDOW_ACTIONS = [
    {
      name: 'close',
      icon: (
        <div className="flex cursor-pointer items-center justify-center rounded-full bg-red-500 p-1">
          <div className="h-full w-full opacity-0 hover:opacity-100">
            <Icon.X className={'fill-red-800'} height={10} width={10} />
          </div>
        </div>
      ),
      onclick: () => console.log('close'),
    },
    {
      name: 'minimize',
      icon: (
        <div className="flex cursor-pointer items-center justify-center rounded-full bg-yellow-500 p-1">
          <div className="h-full w-full opacity-0 hover:opacity-100">
            <Icon.Minus className={'text-yellow-800'} height={10} width={10} />
          </div>
        </div>
      ),
      onclick: () => console.log('minimize'),
    },
    {
      name: 'expand',
      icon: (
        <div className="flex cursor-pointer items-center justify-center rounded-full bg-green-500 p-1">
          <div className="h-full w-full opacity-0 hover:opacity-100">
            <Icon.Expand className={'text-green-800'} height={10} width={10} />
          </div>
        </div>
      ),
      onclick: () => console.log('close'),
    },
  ];

  return (
    <Rnd
      className={classNames}
      default={{
        x: 0,
        y: 0,
        width: 700,
        height: 500,
      }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-xl bg-gray-200">
        <div className="flex h-[40px] w-full items-center justify-start space-x-3 bg-[#83adea] p-3">
          {WINDOW_ACTIONS.map((action, index) => {
            return action.icon;
          })}
        </div>
      </div>
    </Rnd>
  );
};

export default Window;
