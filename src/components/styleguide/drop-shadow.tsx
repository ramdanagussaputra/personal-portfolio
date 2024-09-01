import SectionHeader from "./section-header";

function DropShadow() {
  return (
    <section>
      <SectionHeader>Drop Shadows</SectionHeader>

      <div className="border-t border-[#D1D5DB] flex justify-between items-start p-8">
        <span className="font-semibold">md</span>

        <div className="bg-gray-100 shadow-md w-[9.375rem] h-[9.375rem] rounded-xl" />
      </div>

      <div className="border-t border-[#D1D5DB] flex justify-between items-start p-8">
        <span className="font-semibold">lg</span>

        <div className="bg-gray-100 shadow-lg w-[9.375rem] h-[9.375rem] rounded-xl" />
      </div>

      <div className="border-t border-[#D1D5DB] flex justify-between items-start p-8">
        <span className="font-semibold">2xl</span>

        <div className="bg-gray-100 shadow-2xl w-[9.375rem] h-[9.375rem] rounded-xl" />
      </div>
    </section>
  );
}

export default DropShadow;
