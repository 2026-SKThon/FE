import calmFace from "../../assets/images/calm_face.svg";
import characterDanger from "../../assets/images/character_danger.svg";
import characterNormal from "../../assets/images/character_normal.svg";
import characterOffline from "../../assets/images/character_offline.svg";
import feverCharacter from "../../assets/images/fever-character.svg";

// Figma 렌더 픽셀 측정값 기준 (카드 기준 좌표, 가로는 가운데 정렬)
const CHARACTER_LAYOUT = {
  NORMAL: {
    src: characterNormal,
    width: 145,
    height: 165,
    top: 40,
    glow: { color: "#64A8FF", width: 301, height: 301, top: -19 },
    face: { src: calmFace, width: 68, height: 38, left: 146, top: 122 },
  },
  CAUTION: {
    src: feverCharacter,
    width: 161,
    height: 216,
    top: 14,
    glow: { color: "#FF8383", width: 285, height: 303, top: -15 },
  },
  DANGER: {
    src: characterDanger,
    width: 161,
    height: 216,
    top: 14,
    glow: { color: "#FF8383", width: 285, height: 303, top: -15 },
    badge: "!",
  },
  OFFLINE: {
    src: characterOffline,
    width: 161,
    height: 184,
    top: 47,
    glow: null,
    eyes: [147, 187],
  },
};

// 발광 감쇠 - Figma 렌더 샘플링 기준 (1-t)^2
const GLOW_STOPS = [
  [0, 1],
  [20, 0.64],
  [40, 0.36],
  [55, 0.2],
  [70, 0.09],
  [85, 0.02],
  [100, 0],
];

function buildGlow(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  const stops = GLOW_STOPS.map(
    ([offset, alpha]) => `rgba(${r},${g},${b},${alpha}) ${offset}%`,
  ).join(", ");

  return `radial-gradient(50% 50% at 50% 50%, ${stops})`;
}

export default function FeverIllustration({ level }) {
  const layout = CHARACTER_LAYOUT[level];

  return (
    <>
      {layout.glow && (
        <div
          className="absolute left-1/2 -translate-x-1/2 rounded-full"
          style={{
            width: layout.glow.width,
            height: layout.glow.height,
            top: layout.glow.top,
            background: buildGlow(layout.glow.color),
          }}
        />
      )}
      <img
        src={layout.src}
        alt=""
        className="absolute left-1/2 -translate-x-1/2"
        style={{ width: layout.width, height: layout.height, top: layout.top }}
      />
      {layout.face && (
        <img
          src={layout.face.src}
          alt=""
          className="absolute"
          style={{
            width: layout.face.width,
            height: layout.face.height,
            left: layout.face.left,
            top: layout.face.top,
          }}
        />
      )}
      {layout.badge && (
        <span className="absolute left-1/2 top-[120px] flex h-[60px] w-[40px] -translate-x-1/2 items-center justify-center text-[84px] font-black leading-none text-[#FFEBE9]">
          {layout.badge}
        </span>
      )}
      {layout.eyes?.map((left) => (
        <span
          key={left}
          className="absolute top-[136px] h-[3px] w-[27px] rounded-full bg-[#E4A79C]"
          style={{ left }}
        />
      ))}
    </>
  );
}
