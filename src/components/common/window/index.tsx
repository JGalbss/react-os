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
        <div className="flex items-center justify-center rounded-full bg-red-500 p-2">
          <Icon.X className={'hidden fill-red-800 hover:block'} height={9} width={9} />
        </div>
      ),
      onclick: () => console.log('close'),
    },
    {
      name: 'minimize',
      icon: (
        <div className="flex items-center justify-center rounded-full bg-yellow-500 p-2">
          <div className="hidden h-full w-full hover:block">
            <Icon.Minus className={'hidden fill-yellow-800 hover:block'} height={9} width={9} />
          </div>
        </div>
      ),
      onclick: () => console.log('minimize'),
    },
    {
      name: 'expand',
      icon: (
        <div className="flex items-center justify-center rounded-full bg-green-500 p-2">
          <Icon.Expand className={'hidden fill-green-800 hover:block'} height={9} width={9} />
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
