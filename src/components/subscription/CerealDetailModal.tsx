"use client";

import Image from "next/image";

export interface CerealDetail {
  id: string;
  name: string;
  desc: string;
  image: string;
  ingredients: string;
  contains: string;
  servings: number;
  servingSize: string;
  calories: number;
  nutrition: {
    totalFat: string; totalFatPct: string;
    saturatedFat: string; saturatedFatPct: string;
    transFat: string;
    cholesterol: string; cholesterolPct: string;
    sodium: string; sodiumPct: string;
    totalCarb: string; totalCarbPct: string;
    dietaryFiber: string; dietaryFiberPct: string;
    totalSugars: string;
    addedSugars: string; addedSugarsPct: string;
    protein: string;
    vitaminD: string; vitaminDPct: string;
    calcium: string; calciumPct: string;
    iron: string; ironPct: string;
    potassium: string; potassiumPct: string;
  };
}

interface Props {
  cereal: CerealDetail;
  onClose: () => void;
}

function NutritionRow({
  label, value, percent, indent = false, boldLabel = true, italic = false,
}: {
  label: string; value: string; percent?: string; indent?: boolean; boldLabel?: boolean; italic?: boolean;
}) {
  return (
    <div className="border-t border-[#272727] pt-[2px] pb-[2px] flex items-baseline justify-between w-full">
      <span className={`text-[13.783px] leading-normal ${indent ? "pl-[13px]" : ""} ${boldLabel ? "font-bold" : ""} ${italic ? "italic" : ""} font-[Helvetica,Arial,sans-serif] text-[#272727]`}>
        {label}{" "}
        <span className="font-normal not-italic">{value}</span>
      </span>
      {percent && (
        <span className="text-[13.783px] font-bold font-[Helvetica,Arial,sans-serif] text-[#272727] whitespace-nowrap pl-2">
          {percent}
        </span>
      )}
    </div>
  );
}

function ThickDivider({ size = "medium" }: { size?: "medium" | "large" }) {
  return <div className={`bg-[#272727] w-full ${size === "large" ? "h-[8px]" : "h-[5px]"}`} />;
}

export default function CerealDetailModal({ cereal, onClose }: Props) {
  const n = cereal.nutrition;

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-2"
      onClick={onClose}
    >
      {/* Modal */}
      <div
        className="relative w-full max-w-[375px] max-h-[90vh] overflow-y-auto rounded-[20px] border border-black bg-[url('/images/paper-texture.png')] bg-cover"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Paper texture overlay */}
        <div className="absolute inset-0 rounded-[20px] bg-[url('/images/paper-texture.png')] bg-cover opacity-90 pointer-events-none" />

        <div className="relative z-10 pb-6">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-[20px] right-[16px] z-20 w-[25px] h-[25px] rounded-full border border-black/70 flex items-center justify-center hover:bg-white transition-colors"
            aria-label="Close"
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M1 1L12 12M12 1L1 12" stroke="#1e1e1e" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* Title */}
          <div className="px-4 pt-8 text-center">
            <h2 className="text-[41.29px] font-semibold text-ink leading-none tracking-[-0.826px]">
              {cereal.name}
            </h2>
            <p className="text-[20px] font-normal text-[#2a2929] leading-[1.274] mt-1">
              {cereal.desc}
            </p>
          </div>

          {/* Divider */}
          <hr className="border-0 border-t border-black mx-6 mt-3" />

          {/* Bowl image */}
          <div className="flex justify-center mt-4">
            <div className="relative w-[218px] h-[146px]">
              <Image src={cereal.image} alt={cereal.name} fill className="object-contain" />
            </div>
          </div>

          {/* Ingredients */}
          <div className="px-4 mt-4">
            <p className="text-[28.107px] font-semibold text-ink leading-none tracking-[-0.562px] mb-2">
              Ingredients:
            </p>
            <p className="text-[18.163px] font-normal text-[#2a2929] leading-normal">
              {cereal.ingredients}
            </p>
            <p className="text-[19.449px] font-semibold text-ink leading-none tracking-[-0.389px] mt-4 mb-1">
              Contains:
            </p>
            <p className="text-[16.671px] font-normal text-ink leading-none tracking-[-0.333px]">
              {cereal.contains}
            </p>
          </div>

          {/* Nutrition Facts box */}
          <div className="mx-6 mt-6 rounded-[7.726px] border border-[#90847c] bg-[rgba(189,171,159,0.3)]">
            <div className="border border-black rounded-[4px] m-[9px] p-[6px] bg-white/60">
              {/* Title */}
              <p className="font-[Inter,sans-serif] font-black text-[37.455px] leading-none text-[#272727]">
                Nutrition Facts
              </p>
              <div className="bg-[#272727] h-[1.3px] w-full mt-1" />

              {/* Servings */}
              <p className="font-[Helvetica,Arial,sans-serif] text-[16.052px] leading-normal text-[#272727] mt-1">
                {cereal.servings} Servings per container
              </p>
              <div className="flex justify-between items-baseline font-[Helvetica,Arial,sans-serif] font-bold text-[16.052px] text-[#272727]">
                <span>Serving size</span>
                <span>{cereal.servingSize}</span>
              </div>

              <ThickDivider size="large" />

              {/* Calories */}
              <div className="mt-1">
                <p className="font-[Helvetica,Arial,sans-serif] font-bold text-[12.405px] text-[#272727] leading-tight">
                  Amount per serving
                </p>
                <div className="flex justify-between items-end">
                  <span className="font-[Helvetica,Arial,sans-serif] font-bold text-[21.403px] text-[#272727]">
                    Calories
                  </span>
                  <span className="font-[Helvetica,Arial,sans-serif] font-bold text-[32px] text-[#272727] leading-none">
                    {cereal.calories}
                  </span>
                </div>
              </div>

              <ThickDivider size="medium" />

              {/* % Daily Value header */}
              <div className="flex justify-end">
                <span className="font-[Helvetica,Arial,sans-serif] font-bold text-[11px] text-[#272727]">
                  % Daily Value*
                </span>
              </div>

              {/* Nutrition rows */}
              <NutritionRow label="Total Fat" value={n.totalFat} percent={n.totalFatPct} />
              <NutritionRow label="Saturated Fat" value={n.saturatedFat} percent={n.saturatedFatPct} indent boldLabel={false} />
              <NutritionRow label="Trans Fat" value={n.transFat} indent boldLabel={false} italic />
              <NutritionRow label="Cholesterol" value={n.cholesterol} percent={n.cholesterolPct} />
              <NutritionRow label="Sodium" value={n.sodium} percent={n.sodiumPct} />
              <NutritionRow label="Total Carbohydrate" value={n.totalCarb} percent={n.totalCarbPct} />
              <NutritionRow label="Dietary Fiber" value={n.dietaryFiber} percent={n.dietaryFiberPct} indent boldLabel={false} />
              <NutritionRow label="Total Sugars" value={n.totalSugars} indent boldLabel={false} />
              <div className="border-t border-[#272727] pt-[2px] pb-[2px] flex items-baseline justify-between w-full pl-[26px]">
                <span className="text-[13.783px] font-normal font-[Helvetica,Arial,sans-serif] text-[#272727]">
                  Includes {n.addedSugars} added sugars
                </span>
                <span className="text-[13.783px] font-bold font-[Helvetica,Arial,sans-serif] text-[#272727] pl-2">
                  {n.addedSugarsPct}
                </span>
              </div>
              <NutritionRow label="Protein" value={n.protein} boldLabel />

              <ThickDivider size="large" />

              {/* Vitamins */}
              <NutritionRow label="Vitamin D" value={n.vitaminD} percent={n.vitaminDPct} />
              <NutritionRow label="Calcium" value={n.calcium} percent={n.calciumPct} />
              <NutritionRow label="Iron" value={n.iron} percent={n.ironPct} />
              <NutritionRow label="Potassium" value={n.potassium} percent={n.potassiumPct} />

              <ThickDivider size="medium" />

              {/* Footnote */}
              <p className="font-[Helvetica,Arial,sans-serif] text-[10.701px] text-[#272727] leading-[1.2] mt-1">
                *The % Daily Value tells you how much a nutrient in a serving food contributes to a daily die. 2000 calories a day is used for general nutrition advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
