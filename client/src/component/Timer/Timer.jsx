import { useState, useEffect } from "react";

export function useTimer(initialValue) {
  const [timer, setTimer] = useState(initialValue);

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => setTimer(timer - 1), 1000);
    }
  }, [timer]);

  return [timer, setTimer];
}
