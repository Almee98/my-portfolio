export default function Tech({ techName }) {
  return (
    <div className="inline-block px-3 py-1 bg-[#2DD4BF]/10 text-center rounded-full mt-4">
      <div className="text-sm text-[#5CEAD4]">{techName}</div>
    </div>
  );
}