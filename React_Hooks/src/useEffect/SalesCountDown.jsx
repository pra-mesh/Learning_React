import React, { useEffect, useState } from "react";

const SalesCountDown = () => {
  const saleStart = new Date("2025-04-17T20:30:00");
  const saleEnd = new Date("2025-04-17T20:41:00");
  const [now, setNow] = useState(new Date());
  const [message, steMessage] = useState("");
  const [timeLeft, setTimeLeft] = useState("");
  const getTimeDiffernce = (endDate, currentDate) => {
    const diff = endDate - currentDate;
    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const current = new Date();
      setNow(current);
      console.log({ current, saleEnd, saleStart });
      if (current < saleStart) {
        steMessage("Sales starts in: ");
        setTimeLeft(getTimeDiffernce(current, saleStart));
      } else if (current >= saleStart && current <= saleEnd) {
        steMessage("Sale ends in :");
        setTimeLeft(getTimeDiffernce(saleEnd, current));
      } else {
        steMessage("Sale has ended");
        setTimeLeft("");
        const timeElapsed = (current - saleEnd) / 1000;
        if (timeElapsed > 60) {
          clearInterval(interval);
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [saleEnd, saleStart]);
  return (
    <div>
      <h2>Sale Count down</h2>
      <h3>{message}</h3>
      {timeLeft && <p>{timeLeft}</p>}
    </div>
  );
};

export default SalesCountDown;
