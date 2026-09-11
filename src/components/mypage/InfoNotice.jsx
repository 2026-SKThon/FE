export default function InfoNotice({ children }) {
  return (
    <section className="w-full mb-5 rounded-xl bg-[#F3F4F6] p-3">
      <div className="text-xs font-normal leading-4 text-[#6B7684]">
        {children}
      </div>
    </section>
  );
}