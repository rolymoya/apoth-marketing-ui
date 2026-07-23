"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";

const fields = [
  ["Height", "ft", "feet"],
  ["Height", "in", "inches"],
  ["Weight", "lbs", "weight"],
  ["Age", "years", "age"],
] as const;

export function BmiCalculator() {
  const [values, setValues] = useState({ feet: 5, inches: 8, weight: 180, age: 34 });
  const [hasCalculated, setHasCalculated] = useState(false);

  const bmi = useMemo(() => {
    const totalInches = values.feet * 12 + values.inches;
    if (!totalInches || !values.weight) return 0;
    return (values.weight / (totalInches * totalInches)) * 703;
  }, [values]);

  const category = bmi < 18.5 ? "below the standard range" : bmi < 25 ? "within the standard range" : bmi < 30 ? "above the standard range" : "within the high range";

  return (
    <div className="rounded-[28px] bg-white p-7 shadow-soft sm:p-10">
      <p className="eyebrow text-foreground/45">Quick estimate</p>
      <h3 className="mt-3 text-3xl font-bold tracking-[-0.045em]">Check your BMI</h3>
      <p className="mt-2 text-sm text-foreground/55">Enter your height and weight below.</p>
      <div className="mt-8 grid grid-cols-2 gap-3">
        {fields.map(([label, unit, key]) => (
          <label key={key} className="rounded-2xl border bg-[#f7f7f7] px-4 py-3 focus-within:ring-2 focus-within:ring-black/60">
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-foreground/45">{label}</span>
            <span className="mt-1 flex items-end justify-between">
              <input
                type="number"
                min="0"
                aria-label={`${label} in ${unit}`}
                value={values[key]}
                onChange={(event) => setValues((current) => ({ ...current, [key]: Number(event.target.value) }))}
                className="w-20 bg-transparent text-2xl font-semibold outline-none"
              />
              <span className="pb-1 text-xs text-foreground/45">{unit}</span>
            </span>
          </label>
        ))}
      </div>
      <Button className="mt-6 w-full" onClick={() => setHasCalculated(true)}>Calculate BMI</Button>
      <p aria-live="polite" className={`mt-4 text-sm ${hasCalculated ? "text-foreground/65" : "sr-only"}`}>
        Your estimated BMI is <strong className="text-foreground">{bmi.toFixed(1)}</strong>, {category}.
      </p>
    </div>
  );
}
