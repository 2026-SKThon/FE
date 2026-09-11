export default function CornerIllustration({ src, width, height, left, top }) {
  return (
    <img
      src={src}
      alt=""
      className="pointer-events-none absolute"
      style={{ width, height, left, top }}
    />
  );
}
