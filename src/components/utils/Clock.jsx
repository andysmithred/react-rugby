import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const tick = () => setTime(new Date());

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return <div>{time.toLocaleTimeString()}</div>;
};

export default Clock;
