// 전화걸기 - 해당 병원 번호로 바로 통화 연결
export function callHospital(phone) {
  window.location.href = `tel:${phone}`;
}

// 모바일 기기 여부 - nmap:// 스킴은 모바일 앱에서만 등록되어 있음
const isMobile = () =>
  /Android|iPhone|iPad|iPod/i.test(window.navigator.userAgent);

// 길찾기 - 네이버 지도 앱(nmap://)으로 이동, 앱이 없거나 모바일이 아니면 네이버 지도 웹으로 대체
export function openDirections({ name, latitude, longitude }) {
  const webUrl = `https://map.naver.com/p/search/${encodeURIComponent(name)}`;

  // 데스크톱 등 nmap:// 핸들러가 없는 환경에서는 시도조차 하지 않고 바로 웹으로
  if (!isMobile()) {
    window.open(webUrl, "_blank", "noopener,noreferrer");
    return;
  }

  const appUrl = `nmap://route/public?dlat=${latitude}&dlng=${longitude}&dname=${encodeURIComponent(
    name,
  )}&appname=${encodeURIComponent(window.location.hostname)}`;

  const fallbackTimer = setTimeout(() => {
    window.open(webUrl, "_blank", "noopener,noreferrer");
  }, 1500);

  const cancelFallback = () => clearTimeout(fallbackTimer);
  window.addEventListener("blur", cancelFallback, { once: true });
  document.addEventListener(
    "visibilitychange",
    () => {
      if (document.hidden) cancelFallback();
    },
    { once: true },
  );

  window.location.href = appUrl;
}
