"use client";

import { BeforeAfterSlider } from "./BeforeAfterSlider";

export function BeforeAfterSliderDemo() {
  return (
    <BeforeAfterSlider
      beforeImage="/Demo/roof-before.jpg"
      afterImage="/Demo/roof-after.jpg"
      beforeLabel="Before (Worn Roof)"
      afterLabel="After (Repaired Roof)"
      aspectRatio="16:9"
    />
  );
}
