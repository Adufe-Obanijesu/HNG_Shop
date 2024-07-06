import { useEffect, useState, useMemo, memo } from "react";

const Countdown = () => {
  const futureDate = useMemo(() => {
    const currentDate = new Date();

    const fDate = new Date();
    fDate.setDate(currentDate.getDate() + 2);

    return fDate;
  }, []);

  const calculateTimeLeft = () => {
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
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4">
      <div>
        <span className="px-1 py-2 text-xl font-digital-numbers text-ascent bg-white rounded">
          {timeLeft.days < 10 && "0"}
          {timeLeft.days}
        </span>
        <br />
        <h6 className="text-white mt-2 text-sm">Days</h6>
      </div>

      <div>
        <span className="px-1 py-2 text-xl font-digital-numbers text-ascent bg-white rounded">
          {timeLeft.hours < 10 && "0"}
          {timeLeft.hours}
        </span>
        <br />
        <h6 className="text-white mt-2 text-sm">Hr</h6>
      </div>

      <div>
        <span className="px-1 py-2 text-xl font-digital-numbers text-ascent bg-white rounded">
          {timeLeft.minutes < 10 && "0"}
          {timeLeft.minutes}
        </span>
        <br />
        <h6 className="text-white mt-2 text-sm">Mins</h6>
      </div>

      <div>
        <span className="px-1 py-2 text-xl font-digital-numbers text-ascent bg-white rounded">
          {timeLeft.seconds < 10 && "0"}
          {timeLeft.seconds}
        </span>
        <br />
        <h6 className="text-white mt-2 text-sm">Sec</h6>
      </div>
    </div>
  );
};

export default memo(Countdown);
