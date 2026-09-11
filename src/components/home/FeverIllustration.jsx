import feverCharacter from "../../assets/images/fever-character.svg";

// 캐릭터 뒤 발광 - Figma 렌더 픽셀 샘플링 기준 (1-t)^2 감쇠
const GLOW_BACKGROUND =
  "radial-gradient(50% 50% at 50% 50%," +
  " rgba(255,131,131,1) 0%," +
  " rgba(255,131,131,0.64) 20%," +
  " rgba(255,131,131,0.36) 40%," +
  " rgba(255,131,131,0.2) 55%," +
  " rgba(255,131,131,0.09) 70%," +
  " rgba(255,131,131,0.02) 85%," +
  " rgba(255,131,131,0) 100%)";

export default function FeverIllustration() {
  return (
    <>
      <div
        className="absolute left-1/2 top-[-15px] h-[303px] w-[285px] -translate-x-1/2 rounded-full"
        style={{ background: GLOW_BACKGROUND }}
      />
      <img
        src={feverCharacter}
        alt=""
        className="absolute left-1/2 top-[14px] h-[216px] w-[161px] -translate-x-1/2"
      />
    </>
  );
}
