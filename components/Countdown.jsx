import { useEffect, useState, useMemo, memo, useCallback } from "react";

const Countdown = () => {
  const futureDate = useMemo(() => {
    const currentDate = new Date();

    const fDate = new Date();
    fDate.setDate(currentDate.getDate() + 2);

    return fDate;
  }, []);

  const calculateTimeLeft = useCallback(() => {
    const difference = futureDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }, [futureDate]);

  
  const [timeLeft, setTimeLeft] = useState({
    days: "--",
    hours: "--",
    minutes: "--",
    seconds: "--",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <div className="flex gap-6 mt-2">
      <div>
        <span className="hv-center gap-1 w-12 h-12 text-xl font-digital-numbers text-ascent bg-white rounded">
          {timeLeft.days < 10 && timeLeft.days !== "--" && "0"}
          {timeLeft.days}
        </span>

        <h6 className="text-white mt-2 text-sm">Days</h6>
      </div>

      <div>
        <span className="hv-center gap-1 w-12 h-12 text-xl font-digital-numbers text-ascent bg-white rounded">
          {timeLeft.hours < 10 && timeLeft.hours !== "--" && "0"}
          {timeLeft.hours}
        </span>

        <h6 className="text-white mt-2 text-sm">Hr</h6>
      </div>

      <div>
        <span className="hv-center gap-1 w-12 h-12 text-xl font-digital-numbers text-ascent bg-white rounded">
          {timeLeft.minutes < 10 && timeLeft.minutes !== "--" && "0"}
          {timeLeft.minutes}
        </span>

        <h6 className="text-white mt-2 text-sm">Mins</h6>
      </div>

      <div>
        <span className="hv-center gap-1 w-12 h-12 text-xl font-digital-numbers text-ascent bg-white rounded">
          {timeLeft.seconds < 10 && timeLeft.seconds !== "--" && "0"}
          {timeLeft.seconds}
        </span>

        <h6 className="text-white mt-2 text-sm">Sec</h6>
      </div>
    </div>
  );
};

export default memo(Countdown);
