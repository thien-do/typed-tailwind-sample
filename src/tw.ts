// http://github.com/dvkndn/typed-tailwind
export const Tw = (): Tailwind => new Tailwind();

class Tailwind {
  value = "";

  // Getter methods
  // Why "$":
  // - https://github.com/microsoft/TypeScript/issues/2361
  // - https://github.com/microsoft/TypeScript/issues/4538
  // - https://en.wikipedia.org/wiki/Regular_expression
  $(): string { return this.value; }

  // Building methods
  private add(value: string): Tailwind {
    this.value = `${this.value} ${value}`;
    return this;
  }

  // Styling methods
  block(): Tailwind { return this.add("tw-block"); }
  inlineBlock(): Tailwind { return this.add("tw-inline-block"); }
  inline(): Tailwind { return this.add("tw-inline"); }
  flex(): Tailwind { return this.add("tw-flex"); }
  inlineFlex(): Tailwind { return this.add("tw-inline-flex"); }
  table(): Tailwind { return this.add("tw-table"); }
  tableRow(): Tailwind { return this.add("tw-table-row"); }
  tableCell(): Tailwind { return this.add("tw-table-cell"); }
  hidden(): Tailwind { return this.add("tw-hidden"); }
  static(): Tailwind { return this.add("tw-static"); }
  fixed(): Tailwind { return this.add("tw-fixed"); }
  absolute(): Tailwind { return this.add("tw-absolute"); }
  relative(): Tailwind { return this.add("tw-relative"); }
  sticky(): Tailwind { return this.add("tw-sticky"); }
  textBlack(): Tailwind { return this.add("tw-text-black"); }
  textWhite(): Tailwind { return this.add("tw-text-white"); }
  textGrayLight(): Tailwind { return this.add("tw-text-gray-light"); }
  textGrayMid(): Tailwind { return this.add("tw-text-gray-mid"); }
  textGrayDark(): Tailwind { return this.add("tw-text-gray-dark"); }
  textRedLight(): Tailwind { return this.add("tw-text-red-light"); }
  textRedMid(): Tailwind { return this.add("tw-text-red-mid"); }
  textRedDark(): Tailwind { return this.add("tw-text-red-dark"); }
  textBlueLight(): Tailwind { return this.add("tw-text-blue-light"); }
  textBlueMid(): Tailwind { return this.add("tw-text-blue-mid"); }
  textBlueDark(): Tailwind { return this.add("tw-text-blue-dark"); }
  bgBlack(): Tailwind { return this.add("tw-bg-black"); }
  bgWhite(): Tailwind { return this.add("tw-bg-white"); }
  bgGrayLight(): Tailwind { return this.add("tw-bg-gray-light"); }
  bgGrayMid(): Tailwind { return this.add("tw-bg-gray-mid"); }
  bgGrayDark(): Tailwind { return this.add("tw-bg-gray-dark"); }
  bgRedLight(): Tailwind { return this.add("tw-bg-red-light"); }
  bgRedMid(): Tailwind { return this.add("tw-bg-red-mid"); }
  bgRedDark(): Tailwind { return this.add("tw-bg-red-dark"); }
  bgBlueLight(): Tailwind { return this.add("tw-bg-blue-light"); }
  bgBlueMid(): Tailwind { return this.add("tw-bg-blue-mid"); }
  bgBlueDark(): Tailwind { return this.add("tw-bg-blue-dark"); }
  m4(): Tailwind { return this.add("tw-m-4"); }
  m8(): Tailwind { return this.add("tw-m-8"); }
  m16(): Tailwind { return this.add("tw-m-16"); }
  m24(): Tailwind { return this.add("tw-m-24"); }
  m1(): Tailwind { return this.add("tw--m-1"); }
  my4(): Tailwind { return this.add("tw-my-4"); }
  mx4(): Tailwind { return this.add("tw-mx-4"); }
  my8(): Tailwind { return this.add("tw-my-8"); }
  mx8(): Tailwind { return this.add("tw-mx-8"); }
  my16(): Tailwind { return this.add("tw-my-16"); }
  mx16(): Tailwind { return this.add("tw-mx-16"); }
  my24(): Tailwind { return this.add("tw-my-24"); }
  mx24(): Tailwind { return this.add("tw-mx-24"); }
  my1(): Tailwind { return this.add("tw--my-1"); }
  mx1(): Tailwind { return this.add("tw--mx-1"); }
  mt4(): Tailwind { return this.add("tw-mt-4"); }
  mr4(): Tailwind { return this.add("tw-mr-4"); }
  mb4(): Tailwind { return this.add("tw-mb-4"); }
  ml4(): Tailwind { return this.add("tw-ml-4"); }
  mt8(): Tailwind { return this.add("tw-mt-8"); }
  mr8(): Tailwind { return this.add("tw-mr-8"); }
  mb8(): Tailwind { return this.add("tw-mb-8"); }
  ml8(): Tailwind { return this.add("tw-ml-8"); }
  mt16(): Tailwind { return this.add("tw-mt-16"); }
  mr16(): Tailwind { return this.add("tw-mr-16"); }
  mb16(): Tailwind { return this.add("tw-mb-16"); }
  ml16(): Tailwind { return this.add("tw-ml-16"); }
  mt24(): Tailwind { return this.add("tw-mt-24"); }
  mr24(): Tailwind { return this.add("tw-mr-24"); }
  mb24(): Tailwind { return this.add("tw-mb-24"); }
  ml24(): Tailwind { return this.add("tw-ml-24"); }
  mt1(): Tailwind { return this.add("tw--mt-1"); }
  mr1(): Tailwind { return this.add("tw--mr-1"); }
  mb1(): Tailwind { return this.add("tw--mb-1"); }
  ml1(): Tailwind { return this.add("tw--ml-1"); }
  p4(): Tailwind { return this.add("tw-p-4"); }
  p8(): Tailwind { return this.add("tw-p-8"); }
  p16(): Tailwind { return this.add("tw-p-16"); }
  p24(): Tailwind { return this.add("tw-p-24"); }
  py4(): Tailwind { return this.add("tw-py-4"); }
  px4(): Tailwind { return this.add("tw-px-4"); }
  py8(): Tailwind { return this.add("tw-py-8"); }
  px8(): Tailwind { return this.add("tw-px-8"); }
  py16(): Tailwind { return this.add("tw-py-16"); }
  px16(): Tailwind { return this.add("tw-px-16"); }
  py24(): Tailwind { return this.add("tw-py-24"); }
  px24(): Tailwind { return this.add("tw-px-24"); }
  pt4(): Tailwind { return this.add("tw-pt-4"); }
  pr4(): Tailwind { return this.add("tw-pr-4"); }
  pb4(): Tailwind { return this.add("tw-pb-4"); }
  pl4(): Tailwind { return this.add("tw-pl-4"); }
  pt8(): Tailwind { return this.add("tw-pt-8"); }
  pr8(): Tailwind { return this.add("tw-pr-8"); }
  pb8(): Tailwind { return this.add("tw-pb-8"); }
  pl8(): Tailwind { return this.add("tw-pl-8"); }
  pt16(): Tailwind { return this.add("tw-pt-16"); }
  pr16(): Tailwind { return this.add("tw-pr-16"); }
  pb16(): Tailwind { return this.add("tw-pb-16"); }
  pl16(): Tailwind { return this.add("tw-pl-16"); }
  pt24(): Tailwind { return this.add("tw-pt-24"); }
  pr24(): Tailwind { return this.add("tw-pr-24"); }
  pb24(): Tailwind { return this.add("tw-pb-24"); }
  pl24(): Tailwind { return this.add("tw-pl-24"); }
  text14(): Tailwind { return this.add("tw-text-14"); }
  text16(): Tailwind { return this.add("tw-text-16"); }
  text18(): Tailwind { return this.add("tw-text-18"); }
  smBlock(): Tailwind { return this.add("sm:tw-block"); }
  smInlineBlock(): Tailwind { return this.add("sm:tw-inline-block"); }
  smInline(): Tailwind { return this.add("sm:tw-inline"); }
  smFlex(): Tailwind { return this.add("sm:tw-flex"); }
  smInlineFlex(): Tailwind { return this.add("sm:tw-inline-flex"); }
  smTable(): Tailwind { return this.add("sm:tw-table"); }
  smTableRow(): Tailwind { return this.add("sm:tw-table-row"); }
  smTableCell(): Tailwind { return this.add("sm:tw-table-cell"); }
  smHidden(): Tailwind { return this.add("sm:tw-hidden"); }
  smStatic(): Tailwind { return this.add("sm:tw-static"); }
  smFixed(): Tailwind { return this.add("sm:tw-fixed"); }
  smAbsolute(): Tailwind { return this.add("sm:tw-absolute"); }
  smRelative(): Tailwind { return this.add("sm:tw-relative"); }
  smSticky(): Tailwind { return this.add("sm:tw-sticky"); }
  smM4(): Tailwind { return this.add("sm:tw-m-4"); }
  smM8(): Tailwind { return this.add("sm:tw-m-8"); }
  smM16(): Tailwind { return this.add("sm:tw-m-16"); }
  smM24(): Tailwind { return this.add("sm:tw-m-24"); }
  smM1(): Tailwind { return this.add("sm:tw--m-1"); }
  smMy4(): Tailwind { return this.add("sm:tw-my-4"); }
  smMx4(): Tailwind { return this.add("sm:tw-mx-4"); }
  smMy8(): Tailwind { return this.add("sm:tw-my-8"); }
  smMx8(): Tailwind { return this.add("sm:tw-mx-8"); }
  smMy16(): Tailwind { return this.add("sm:tw-my-16"); }
  smMx16(): Tailwind { return this.add("sm:tw-mx-16"); }
  smMy24(): Tailwind { return this.add("sm:tw-my-24"); }
  smMx24(): Tailwind { return this.add("sm:tw-mx-24"); }
  smMy1(): Tailwind { return this.add("sm:tw--my-1"); }
  smMx1(): Tailwind { return this.add("sm:tw--mx-1"); }
  smMt4(): Tailwind { return this.add("sm:tw-mt-4"); }
  smMr4(): Tailwind { return this.add("sm:tw-mr-4"); }
  smMb4(): Tailwind { return this.add("sm:tw-mb-4"); }
  smMl4(): Tailwind { return this.add("sm:tw-ml-4"); }
  smMt8(): Tailwind { return this.add("sm:tw-mt-8"); }
  smMr8(): Tailwind { return this.add("sm:tw-mr-8"); }
  smMb8(): Tailwind { return this.add("sm:tw-mb-8"); }
  smMl8(): Tailwind { return this.add("sm:tw-ml-8"); }
  smMt16(): Tailwind { return this.add("sm:tw-mt-16"); }
  smMr16(): Tailwind { return this.add("sm:tw-mr-16"); }
  smMb16(): Tailwind { return this.add("sm:tw-mb-16"); }
  smMl16(): Tailwind { return this.add("sm:tw-ml-16"); }
  smMt24(): Tailwind { return this.add("sm:tw-mt-24"); }
  smMr24(): Tailwind { return this.add("sm:tw-mr-24"); }
  smMb24(): Tailwind { return this.add("sm:tw-mb-24"); }
  smMl24(): Tailwind { return this.add("sm:tw-ml-24"); }
  smMt1(): Tailwind { return this.add("sm:tw--mt-1"); }
  smMr1(): Tailwind { return this.add("sm:tw--mr-1"); }
  smMb1(): Tailwind { return this.add("sm:tw--mb-1"); }
  smMl1(): Tailwind { return this.add("sm:tw--ml-1"); }
  smP4(): Tailwind { return this.add("sm:tw-p-4"); }
  smP8(): Tailwind { return this.add("sm:tw-p-8"); }
  smP16(): Tailwind { return this.add("sm:tw-p-16"); }
  smP24(): Tailwind { return this.add("sm:tw-p-24"); }
  smPy4(): Tailwind { return this.add("sm:tw-py-4"); }
  smPx4(): Tailwind { return this.add("sm:tw-px-4"); }
  smPy8(): Tailwind { return this.add("sm:tw-py-8"); }
  smPx8(): Tailwind { return this.add("sm:tw-px-8"); }
  smPy16(): Tailwind { return this.add("sm:tw-py-16"); }
  smPx16(): Tailwind { return this.add("sm:tw-px-16"); }
  smPy24(): Tailwind { return this.add("sm:tw-py-24"); }
  smPx24(): Tailwind { return this.add("sm:tw-px-24"); }
  smPt4(): Tailwind { return this.add("sm:tw-pt-4"); }
  smPr4(): Tailwind { return this.add("sm:tw-pr-4"); }
  smPb4(): Tailwind { return this.add("sm:tw-pb-4"); }
  smPl4(): Tailwind { return this.add("sm:tw-pl-4"); }
  smPt8(): Tailwind { return this.add("sm:tw-pt-8"); }
  smPr8(): Tailwind { return this.add("sm:tw-pr-8"); }
  smPb8(): Tailwind { return this.add("sm:tw-pb-8"); }
  smPl8(): Tailwind { return this.add("sm:tw-pl-8"); }
  smPt16(): Tailwind { return this.add("sm:tw-pt-16"); }
  smPr16(): Tailwind { return this.add("sm:tw-pr-16"); }
  smPb16(): Tailwind { return this.add("sm:tw-pb-16"); }
  smPl16(): Tailwind { return this.add("sm:tw-pl-16"); }
  smPt24(): Tailwind { return this.add("sm:tw-pt-24"); }
  smPr24(): Tailwind { return this.add("sm:tw-pr-24"); }
  smPb24(): Tailwind { return this.add("sm:tw-pb-24"); }
  smPl24(): Tailwind { return this.add("sm:tw-pl-24"); }
  smText14(): Tailwind { return this.add("sm:tw-text-14"); }
  smText16(): Tailwind { return this.add("sm:tw-text-16"); }
  smText18(): Tailwind { return this.add("sm:tw-text-18"); }
}
