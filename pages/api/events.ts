import type { NextApiRequest, NextApiResponse } from "next";

export type EventsResponse = {
  events: { name: string; dateTime: string | number | Date }[];
};

const eventsEndpoint = (
  req: NextApiRequest,
  res: NextApiResponse<EventsResponse>
) => {
  res.status(200).json({
    events: [
      {
        name: "Biffy Clyro + Architects",
        dateTime: new Date(2022, 10, 5, 18, 0),
      },
      { name: "Stranger Things", dateTime: new Date(2022, 10, 12, 0, 0) },
      { name: "Deaf Havana", dateTime: new Date(2022, 10, 15, 18, 30) },
    ],
  });
};

export default eventsEndpoint;
