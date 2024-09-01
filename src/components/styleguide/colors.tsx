import { title } from "process";
import SectionHeader from "./section-header";
import { cn } from "@/lib/tools";

const colorList = [
  {
    title: "Gray(Light)",
    list: [
      {
        title: "DEFAULT",
        hexcode: "#ffffff",
        className: "bg-white",
      },
      {
        title: "50",
        hexcode: "#f9fafb",
        className: "bg-gray-50",
      },
      {
        title: "100",
        hexcode: "#f3f4f6",
        className: "bg-gray-100",
      },
      {
        title: "200",
        hexcode: "#e5e7eb",
        className: "bg-gray-200",
      },
      {
        title: "300",
        hexcode: "#d1d5db",
        className: "bg-gray-300",
      },
      {
        title: "400",
        hexcode: "#9ca3af",
        className: "bg-gray-400",
      },
      {
        title: "500",
        hexcode: "#6b7280",
        className: "bg-gray-500",
      },
      {
        title: "600",
        hexcode: "#4b5563",
        className: "bg-gray-600",
      },
      {
        title: "700",
        hexcode: "#374151",
        className: "bg-gray-700",
      },
      {
        title: "800",
        hexcode: "#1f2937",
        className: "bg-gray-800",
      },
      {
        title: "900",
        hexcode: "#111827",
        className: "bg-gray-900",
      },
      {
        title: "950",
        hexcode: "#030712",
        className: "bg-gray-950",
      },
    ],
  },
  {
    title: "Gray(Dark)",
    list: [
      {
        title: "DEFAULT",
        hexcode: "#030712",
        className: "bg-gray-dark",
      },
      {
        title: "50",
        hexcode: "#111827",
        className: "bg-gray-dark-50",
      },
      {
        title: "100",
        hexcode: "#1f2937",
        className: "bg-gray-dark-100",
      },
      {
        title: "200",
        hexcode: "#374151",
        className: "bg-gray-dark-200",
      },
      {
        title: "300",
        hexcode: "#4b5563",
        className: "bg-gray-dark-300",
      },
      {
        title: "400",
        hexcode: "#6b7280",
        className: "bg-gray-dark-400",
      },
      {
        title: "500",
        hexcode: "#9ca3af",
        className: "bg-gray-dark-500",
      },
      {
        title: "600",
        hexcode: "#d1d5db",
        className: "bg-gray-dark-600",
      },
      {
        title: "700",
        hexcode: "#e5e7eb",
        className: "bg-gray-dark-700",
      },
      {
        title: "800",
        hexcode: "#f3f4f6",
        className: "bg-gray-dark-800",
      },
      {
        title: "900",
        hexcode: "#f9fafb",
        className: "bg-gray-dark-900",
      },
      {
        title: "950",
        hexcode: "#ffffff",
        className: "bg-gray-dark-950",
      },
    ],
  },
  {
    title: "Emerald",
    list: [
      {
        title: "500",
        hexcode: "#10b981",
        className: "bg-emerald",
      },
    ],
  },
];

function Colors() {
  return (
    <section>
      <SectionHeader>Colors</SectionHeader>

      {colorList?.map((colorItem) => (
        <div
          key={colorItem?.title}
          className="border-t border-[#D1D5DB] flex justify-between items-start p-8 gap-10"
        >
          <span className="font-semibold">{colorItem?.title}</span>

          <div className="flex gap-8 flex-wrap justify-end">
            {colorItem?.list?.map((item) => (
              <div key={item?.title} className="flex flex-col gap-4">
                <div
                  className={cn(
                    "w-[9.375rem] h-[4.6875rem] bg-white rounded-xl border border-black",
                    item?.className
                  )}
                />
                <span className="text-lg text-gray-600">{item?.title}</span>
                <span className="text-lg text-gray-600">{item?.hexcode}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Colors;
