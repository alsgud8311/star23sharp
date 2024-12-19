import { useState, useEffect } from "react";

export default function Time() {
  const [hour, setHour] = useState(new Date().getHours());
  const [minute, setMinute] = useState(new Date().getMinutes());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setHour(date.getHours());
      setMinute(date.getMinutes());
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <span className="text-black">
      {hour}:{minute < 10 ? `0${minute}` : minute}
    </span>
  );
}
