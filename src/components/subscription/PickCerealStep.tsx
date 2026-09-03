"use client";

import { useState } from "react";
import Image from "next/image";
import StepPills from "./StepPills";
import CerealDetailModal, { CerealDetail } from "./CerealDetailModal";

interface PickCerealStepProps {
  plan: "monthly" | "single";
  onCheckout: () => void;
}

const CEREALS: CerealDetail[] = [
  {
    id: "honey-rings",
    name: "Honey Rings",
    desc: "Classic, lightly sweet, oat-based crunch",
    image: "/images/hony-rings.png",
    ingredients: "Whole grain oats, cane sugar, peanut flour, chicory root fiber, inulin syrup, pea protein, honey, molasses, rice bran, salt, natural flavor, peanut oil",
    contains: "Wheat & Peanuts",
    servings: 11,
    servingSize: "1/4 cup (26g)",
    calories: 138,
    nutrition: {
      totalFat: "2.8g", totalFatPct: "5%",
      saturatedFat: "0g", saturatedFatPct: "0%",
      transFat: "0g",
      cholesterol: "0mg", cholesterolPct: "0%",
      sodium: "14mg", sodiumPct: "1%",
      totalCarb: "22g", totalCarbPct: "8%",
      dietaryFiber: "2g", dietaryFiberPct: "7%",
      totalSugars: "7g",
      addedSugars: "5g", addedSugarsPct: "10%",
      protein: "4g",
      vitaminD: "0mcg", vitaminDPct: "0%",
      calcium: "7mg", calciumPct: "1%",
      iron: "0mg", ironPct: "0%",
      potassium: "144mg", potassiumPct: "3%",
    },
  },
  {
    id: "fruit-crunch",
    name: "Fruit Crunch",
    desc: "Fruity, colorful corn puffs",
    image: "/images/fruit-crunch.png",
    ingredients: "Corn flour, sugar, oat flour, modified corn starch, natural fruit flavors, citric acid, malic acid, salt, sodium ascorbate, red 40, blue 1, yellow 6, yellow 5",
    contains: "Oats",
    servings: 12,
    servingSize: "3/4 cup (29g)",
    calories: 110,
    nutrition: {
      totalFat: "1g", totalFatPct: "1%",
      saturatedFat: "0g", saturatedFatPct: "0%",
      transFat: "0g",
      cholesterol: "0mg", cholesterolPct: "0%",
      sodium: "135mg", sodiumPct: "6%",
      totalCarb: "25g", totalCarbPct: "9%",
      dietaryFiber: "1g", dietaryFiberPct: "4%",
      totalSugars: "12g",
      addedSugars: "12g", addedSugarsPct: "24%",
      protein: "2g",
      vitaminD: "2mcg", vitaminDPct: "10%",
      calcium: "130mg", calciumPct: "10%",
      iron: "9mg", ironPct: "50%",
      potassium: "65mg", potassiumPct: "2%",
    },
  },
  {
    id: "captains-crunch",
    name: "Captain's Crunch",
    desc: "Sweetened corn squares",
    image: "/images/captain-crunch.png",
    ingredients: "Corn flour, oat flour, sugar, brown sugar, palm and/or coconut oil, salt, modified corn starch, reduced iron, niacinamide, zinc and iron, yellow 5, yellow 6",
    contains: "Oats, Wheat",
    servings: 13,
    servingSize: "3/4 cup (27g)",
    calories: 107,
    nutrition: {
      totalFat: "1.5g", totalFatPct: "2%",
      saturatedFat: "1g", saturatedFatPct: "5%",
      transFat: "0g",
      cholesterol: "0mg", cholesterolPct: "0%",
      sodium: "202mg", sodiumPct: "9%",
      totalCarb: "23g", totalCarbPct: "8%",
      dietaryFiber: "1g", dietaryFiberPct: "4%",
      totalSugars: "12g",
      addedSugars: "12g", addedSugarsPct: "24%",
      protein: "1g",
      vitaminD: "0mcg", vitaminDPct: "0%",
      calcium: "0mg", calciumPct: "0%",
      iron: "4.5mg", ironPct: "25%",
      potassium: "40mg", potassiumPct: "0%",
    },
  },
  {
    id: "cocoa-clusters",
    name: "Cocoa Clusters",
    desc: "Crispy, chocolatey cocoa clusters",
    image: "/images/cocoa-clusters.png",
    ingredients: "Whole grain oats, sugar, oat bran, modified corn starch, cocoa powder, canola oil, salt, calcium carbonate, niacinamide, zinc and iron, vitamin B6, folic acid, vitamin B12",
    contains: "Oats, Wheat, Soy",
    servings: 10,
    servingSize: "1 cup (51g)",
    calories: 210,
    nutrition: {
      totalFat: "3g", totalFatPct: "4%",
      saturatedFat: "0.5g", saturatedFatPct: "3%",
      transFat: "0g",
      cholesterol: "0mg", cholesterolPct: "0%",
      sodium: "190mg", sodiumPct: "8%",
      totalCarb: "43g", totalCarbPct: "16%",
      dietaryFiber: "5g", dietaryFiberPct: "18%",
      totalSugars: "15g",
      addedSugars: "13g", addedSugarsPct: "26%",
      protein: "6g",
      vitaminD: "0mcg", vitaminDPct: "0%",
      calcium: "0mg", calciumPct: "0%",
      iron: "14.4mg", ironPct: "80%",
      potassium: "270mg", potassiumPct: "6%",
    },
  },
];

export default function PickCerealStep({ plan, onCheckout }: PickCerealStepProps) {
  const [selectedCereal, setSelectedCereal] = useState("honey-rings");
  const [detailCereal, setDetailCereal] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(2);

  const selectedCerealName = CEREALS.find((c) => c.id === selectedCereal)?.name ?? "";
  const detailCerealData = CEREALS.find((c) => c.id === detailCereal) ?? null;

  return (
    <div className="mx-auto px-2">
      <StepPills currentStep={2} />

      {/* Heading */}
      <h1 className="text-[41.29px] font-semibold text-ink text-center mb-1 leading-[100%] tracking-[-0.826px]">
        Pick your cereal
      </h1>
      <p className="text-[20px] font-normal text-ink-mid text-center mb-4 leading-[127.413%]">
        Choose one
      </p>

      {/* Editors Pick container */}
      <div
        className="border-[1.5px] border-black rounded-[20.802px] overflow-hidden mb-4"
        style={{ backgroundColor: "rgba(234,216,209,0.5)" }}
      >
        {/* Header row */}
        <div className="relative overflow-hidden border-b-[1.5px] border-black h-[49px] flex items-center px-4 gap-[6px] rounded-t-[20.802px]">
          <div className="absolute inset-0 bg-[url('/images/btn-light-beige-bg.png')] bg-cover bg-center" />
          <div className="relative z-10 shrink-0 w-[25px] phone:w-[30px] h-[20px] phone:h-[25px]">
            <Image src="/images/check-mark-with-square.png" alt="checked" fill className="object-contain" />
          </div>
          <p className="relative z-10 text-[24px] phone:text-[28px] font-semibold text-ink leading-none">
            Editors Pick{" "}
            <span className="text-[18px] phone:text-[20px] font-normal italic">(Most Popular)</span>
          </p>
        </div>

        {/* 2×2 cereal grid */}
        <div className="grid grid-cols-2 gap-[6.24px] p-[6.24px]">
          {CEREALS.map((cereal) => {
            const isSelected = selectedCereal === cereal.id;
            return (
              <div
                key={cereal.id}
                onClick={() => setSelectedCereal(cereal.id)}
                className={`relative cursor-pointer rounded-[5.71px] overflow-hidden bg-[url('/images/paper-texture.png')] bg-cover bg-center flex flex-col items-center pt-[14px] pb-[12px] px-[8px] ${
                  isSelected
                    ? "border-[1.467px] border-black drop-shadow-[0px_2.855px_2.855px_black]"
                    : "border-[1.467px] border-black/60"
                }`}
              >
                {/* Radio indicator */}
                <div className="absolute top-[8px] right-[8px] z-10 w-[20.557px] h-[20.557px] rounded-full border-[1.5px] border-black/70 bg-white/60 flex items-center justify-center">
                  {isSelected && (
                    <div className="w-[11.42px] h-[11.42px] rounded-full bg-ink" />
                  )}
                </div>

                {/* Bowl image */}
                <div className="w-[126px] h-[92px] relative mb-[8px] shrink-0">
                  <Image src={cereal.image} alt={cereal.name} fill className="object-contain" />
                </div>

                {/* Name */}
                <p className="text-[22px] phone:text-[24px] font-semibold text-ink leading-none tracking-[-0.4274px] text-center mb-[6px]">
                  {cereal.name}
                </p>

                {/* Description */}
                <p className="text-[15px] phone:text-[16px] font-normal text-[#2a2929] text-center leading-normal mb-[8px]">
                  {cereal.desc}
                </p>

                {/* View details */}
                <button
                  className="text-[17px] phone:text-[18px] font-semibold text-[#2a2929] text-center whitespace-nowrap cursor-pointer hover:underline"
                  onClick={(e) => { e.stopPropagation(); setDetailCereal(cereal.id); }}
                >
                  View details →
                </button>
              </div>
            );
          })}
        </div>

        {/* Quantity selector — monthly only */}
        {plan === "monthly" && (
          <div className="px-4 pb-4 pt-2">
            <p className="text-[23px] phone:text-[25px] font-semibold text-ink mb-2">
              How many boxes of {selectedCerealName}?
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-stretch h-[44px] rounded-[6px] border border-[#7D6A5F] overflow-hidden shrink-0">
                <button
                  className="w-[44px] flex items-center justify-center text-[22px] font-semibold text-ink bg-[rgba(223,209,203,0.6)] hover:bg-[rgba(223,209,203,0.8)]"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  −
                </button>
                <span className="w-[44px] flex items-center justify-center text-[20px] font-semibold text-white bg-[#3A4041] border-l border-r border-[#7D6A5F]">
                  {quantity}
                </span>
                <button
                  className="w-[44px] flex items-center justify-center text-[22px] font-semibold text-ink bg-[rgba(223,209,203,0.6)] hover:bg-[rgba(223,209,203,0.8)]"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  +
                </button>
              </div>
              <span className="text-[18px] phone:text-[20px] font-normal text-ink leading-snug">
                You&apos;ll receive {quantity} boxes monthly
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Checkout button */}
      <button
        className="relative w-full h-[50px] overflow-hidden rounded-[7.53px] border-[2.259px] border-border-outline shadow-[0px_5.271px_3.012px_0px_black,0px_6.024px_9.036px_0px_rgba(0,0,0,0.25)]"
        onClick={onCheckout}
      >
        <div className="absolute inset-0 bg-navy-mid rounded-[5.543px]" />
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('/images/button-bg.png')] bg-cover bg-center" />
        <span className="relative z-10 text-[29.171px] font-semibold text-footer whitespace-nowrap">
          Checkout
        </span>
      </button>

      {/* Divider below checkout */}
      <hr className="border border-t border-black mt-5" />

      {/* Cereal detail modal */}
      {detailCerealData && (
        <CerealDetailModal
          cereal={detailCerealData}
          onClose={() => setDetailCereal(null)}
        />
      )}
    </div>
  );
}
