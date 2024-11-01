import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {
  const [writePush, setWritePush] = useState();
  const [writeTitle, setWriteTitle] = useState();

  const [isVacation, setIsVacation] = useState(false);

  const [isFriday, setIsFriday] = useState(false);
  const [isAfternoon, setIsAfternoon] = useState(true);

  const [currentTime, setCurrentTime] = useState("");
  const [currentDay, setCurrentDay] = useState("");

  const [isHwarangdaeServiceEnded, setIsHwarangdaeServiceEnded] =
    useState(false);
  const [isByeollaeServiceEnded, setIsByeollaeServiceEnded] = useState(false);

  useEffect(() => {
    const now = new Date();

    // 시간 설정
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    setCurrentTime(`${hours}:${minutes}:${seconds}`);

    // 요일 설정
    const daysOfWeek = [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ];
    const dayOfWeek = now.getDay();
    setCurrentDay(daysOfWeek[dayOfWeek]);

    // 금요일 여부 설정
    setIsFriday(dayOfWeek === 5);

    // 화랑대 운행 종료 여부 설정
    if (dayOfWeek === 5) {
      if (hours > 15 || (hours === 15 && minutes >= 30)) {
        setIsHwarangdaeServiceEnded(true); // 금요일 15:30 이후 화랑대 운행 종료
      }
    } else {
      if (hours > 18 || (hours === 18 && minutes >= 15)) {
        setIsHwarangdaeServiceEnded(true); // 월~목 18:30 이후 화랑대 운행 종료하고 fetch했을때 배열이 null이면 true
      }
    }

    // 별내 운행 종료 여부 설정
    if (dayOfWeek === 5) {
      if (hours > 15 || (hours === 15 && minutes >= 40)) {
        setIsByeollaeServiceEnded(true); // 금요일 15:40 이후 별내 운행 종료
      }
    } else {
      if (hours > 17 || (hours === 17 && minutes >= 40)) {
        setIsByeollaeServiceEnded(true); // 금요일 제외 17:40 이후 별내 운행 종료
      }
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        setWritePush,
        setWriteTitle,
        writePush,
        writeTitle,
        isVacation,
        isFriday,
        isAfternoon,
        isHwarangdaeServiceEnded,
        isByeollaeServiceEnded,
        setIsByeollaeServiceEnded,
        setIsHwarangdaeServiceEnded,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
