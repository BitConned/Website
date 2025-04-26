
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const EventsCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const events = [
    {
      date: "2025-05-01",
      title: "BSC Network Launch",
      description: "Official launch on Binance Smart Chain",
    },
    {
      date: "2025-05-15",
      title: "Solana Integration",
      description: "Cross-chain bridge deployment",
    },
    {
      date: "2025-06-01",
      title: "EquilibriumBot Release",
      description: "Launch of automated price stabilization system",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-bitconned-dark-blue to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gradient mb-12 text-center">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6 bg-gradient-to-br from-bitconned-blue/20 to-black border-white/10">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="text-white"
            />
          </Card>
          <div className="space-y-4">
            {events.map((event, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-bitconned-blue/20 to-black border-white/10">
                <time className="text-sm text-bitconned-neon">{event.date}</time>
                <h3 className="text-xl font-bold text-white mt-2">{event.title}</h3>
                <p className="text-gray-400 mt-2">{event.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsCalendar;
