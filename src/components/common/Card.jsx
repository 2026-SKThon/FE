export default function Card({ children, className = "" }) {
  return (
    <div
      className={`w-full overflow-hidden rounded-[24px] bg-white p-[20px] ${className}`}
    >
      {children}
    </div>
  );
}
