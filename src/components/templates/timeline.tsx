import { FC } from 'react';

/* Interfaces */
interface TimelineItem {
  title: string;
  date: string;
  subtitle: string;
}

/* Props */
export type TimelineProps = {
  items: TimelineItem[];
};

/* Component */
const Timeline: FC<TimelineProps> = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => {
        if (index != items.length - 1) {
          return (
            <>
              <TimelineItem key={index} {...item} />
              <div className="h-10 border-l-2 border-black" />
            </>
          );
        }

        return <TimelineItem key={index} {...item} />;
      })}
    </div>
  );
};

export default Timeline;

const TimelineItem: FC<TimelineItem> = ({ title, subtitle, date }) => {
  return (
    <div className="flex w-full items-center space-x-2">
      <div className="-ml-1.5 h-4 w-4 rounded-full border-2 border-black" />
      <div className="w-full pl-2">
        <div className="flex w-full items-center">
          <h3 className="text-lg font-medium">{title}</h3>
          <div className="grow" />
          <p>{date}</p>
        </div>
        <div>
          <h3>{subtitle}</h3>
        </div>
      </div>
    </div>
  );
};
