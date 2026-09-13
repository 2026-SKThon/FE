export function formatTime(isoString) {
  const date = new Date(isoString);
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  return `${hour}:${minute}`;
}

// 그래프 하단 시간축 라벨 - 점 개수가 아닌 시간 범위를 균등 분할한다
// 센서가 몰려 찍히는 구간이 있어 인덱스로 나누면 라벨이 중복된다
const HOUR_LABEL_MIN_SPAN_HOURS = 3;

export function buildTimeAxisLabels(points, count = 4) {
  if (!points?.length) return [];
  if (count < 2) return ["지금"];

  const start = new Date(points[0].measuredAt).getTime();
  const end = new Date(points.at(-1).measuredAt).getTime();
  const spanHours = (end - start) / (60 * 60 * 1000);
  const useHourOnly = spanHours >= HOUR_LABEL_MIN_SPAN_HOURS;

  return Array.from({ length: count }, (_, index) => {
    if (index === count - 1) return "지금";

    const date = new Date(start + ((end - start) * index) / (count - 1));

    return useHourOnly
      ? `${date.getHours()}시`
      : `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
  });
}

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"];

export function formatDateLabel(isoString) {
  const date = new Date(isoString);

  return `${date.getMonth() + 1}월 ${date.getDate()}일 ${WEEKDAYS[date.getDay()]}요일`;
}

export function formatDateTimeLabel(isoString) {
  const date = new Date(isoString);
  const hours = date.getHours();
  const meridiem = hours < 12 ? "오전" : "오후";
  const hour12 = hours % 12 === 0 ? 12 : hours % 12;
  const minute = String(date.getMinutes()).padStart(2, "0");

  return `${date.getMonth() + 1}월 ${date.getDate()}일 ${meridiem} ${hour12}:${minute}`;
}

export function formatShortDateTime(isoString) {
  const date = new Date(isoString);

  return `${date.getMonth() + 1}월 ${date.getDate()}일 ${formatTime(isoString)}`;
}

// 서버가 타임존 없는 문자열로 저장하므로 로컬 시각을 그대로 보낸다
// new Date().toISOString() 은 UTC라 9시간 이르게 기록된다
export function toServerDateTime(date = new Date()) {
  const pad = (value) => String(value).padStart(2, "0");

  return (
    `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}` +
    `T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`
  );
}

export function formatWeekRangeLabel(startIso, endIso) {
  const start = new Date(startIso);
  const end = new Date(endIso);

  return `${start.getMonth() + 1}월 ${start.getDate()}일 - ${end.getMonth() + 1}월 ${end.getDate()}일`;
}

export function formatMonthLabel(isoString) {
  const date = new Date(isoString);

  return `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
}
