import { useEffect, useRef } from "react";

// 서버 푸시가 없어 주기적으로 다시 조회한다
// 탭이 숨겨지면 멈추고, 돌아오면 즉시 한 번 실행한다
export function usePolling(callback, intervalMs) {
  const savedCallback = useRef(callback);
  const runningRef = useRef(false);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    let timerId = null;

    const run = async () => {
      if (runningRef.current || document.hidden) return;
      runningRef.current = true;

      try {
        await savedCallback.current();
      } catch {
        // 한 번 실패해도 다음 주기에 다시 시도한다
      } finally {
        runningRef.current = false;
      }
    };

    const start = () => {
      if (timerId) return;
      timerId = setInterval(run, intervalMs);
    };

    const stop = () => {
      clearInterval(timerId);
      timerId = null;
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stop();
        return;
      }

      run();
      start();
    };

    run();
    start();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      stop();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [intervalMs]);
}
