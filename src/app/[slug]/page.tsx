import React, { useState } from "react";
import Catergories from "./Catergories";
import { catergoriesSlug } from "@/src/constants";

export async function generateStaticParams() {
  return catergoriesSlug.navigatorts.map(item => ({
    slug: item.slug,
  }));
}

// Type for Price Range
type PriceRange = 'all' | 'under10' | '10-16' | '16-22' | 'above22';

const CatergoriesPages = () => {
  return (
    <Catergories />
  )
};

export default CatergoriesPages;
