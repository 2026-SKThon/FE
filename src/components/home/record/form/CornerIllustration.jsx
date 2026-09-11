export default function CornerIllustration({ src, size, left, top }) {
  return (
    <img
      src={src}
      alt=""
      className="pointer-events-none absolute"
      style={{ width: size, height: size, left, top }}
    />
  );
}
