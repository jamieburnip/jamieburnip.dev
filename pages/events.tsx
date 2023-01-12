import { NextPage } from "next";
import { useCountdown } from "../hooks/useCountdownTimer";
import { EventsResponse } from "./api/events";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Events: NextPage = () => {
  const { data, error } = useSWR("/api/events", fetcher);

  console.log({ data, error });

  const upcomingEvents = [
    {
      name: "Biffy Clyro + Architects",
      dateTime: new Date(2022, 10, 5, 18, 0),
    },
    { name: "Stranger Things", dateTime: new Date(2022, 10, 12, 0, 0) },
    { name: "Deaf Havana", dateTime: new Date(2022, 10, 15, 18, 30) },
  ];

  return (
    <main className="pt-20 mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white dark:bg-stone-900 px-3 text-lg font-medium text-gray-900 dark:text-stone-300">
            Events
          </span>
        </div>
      </div>

      {/* <ul role="list" className="pt-20 divide-y divide-gray-200">
        {upcomingEvents.map((event, i) => (
          <li key={i} className="py-4">
            <Event targetDate={event.dateTime} />
          </li>
        ))}
      </ul> */}

      {/* import { CheckCircleIcon, ChevronRightIcon, EnvelopeIcon } from '@heroicons/react/20/solid' */}
      <div className="overflow-hidden bg-white shadow sm:rounded-md">
        <ul role="list" className="divide-y divide-gray-200">
          {upcomingEvents.map((event, i) => (
            <li key={i}>
              <Event name={event.name} targetDate={event.dateTime} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Events;

const Event = ({
  name,
  targetDate,
}: {
  name: string;
  targetDate: string | number | Date;
}) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  return (
    <a href="" className="block hover:bg-gray-50">
      <div className="flex items-center px-4 py-4 sm:px-6">
        <div className="flex min-w-0 flex-1 items-center">
          {/* <div className="flex-shrink-0">
            <img
              className="h-12 w-12 rounded-full"
              src="application.applicant.imageUrl"
              alt=""
            />
          </div> */}
          <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
            <div>
              <p className="truncate text-sm font-medium text-indigo-600">
                {name}
              </p>
              <p className="mt-2 flex items-center text-sm text-gray-500">
                {/* <EnvelopeIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" /> */}
                <span className="truncate">application.applicant.email</span>
              </p>
            </div>
            <div className="">
              <div>
                <ShowCounter
                  days={days}
                  hours={hours}
                  minutes={minutes}
                  seconds={seconds}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" /> */}
        </div>
      </div>
    </a>
    // <div className="">
    //   <ShowCounter
    //     days={days}
    //     hours={hours}
    //     minutes={minutes}
    //     seconds={seconds}
    //   />
    // </div>
  );
};

const ShowCounter = ({
  days,
  hours,
  minutes,
  seconds,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}) => {
  return (
    <div className="flex justify-evenly">
      <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
      <p>:</p>
      <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
      <p>:</p>
      <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
      <p>:</p>
      <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
    </div>
  );
};

const DateTimeDisplay = ({
  value,
  type,
  isDanger,
}: {
  value: number;
  type: string;
  isDanger: boolean;
}) => {
  return (
    <div className="flex gap-2">
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};
