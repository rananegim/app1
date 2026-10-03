"use client";

export default function CompareBtn({ prodId }: { prodId: string }) {
  return (
    <button
      onClick={() => console.log("compare", prodId)}
      className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm hover:text-green-600"
    >
      {/* nafs el svg */}
    </button>
  );
}