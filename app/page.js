'use client'

import React from "react";
import Main from "@/components/blocks/home/main";
import About from "@/components/blocks/home/about";
import Gardens from "@/components/blocks/home/gardens";
import Manufacture from "@/components/blocks/home/manufacture";
import Compound from "@/components/blocks/home/compound";

export default function Home() {

  return (
    <main>
      <Main />
      <About />
      <Gardens />
      <Manufacture />
      <Compound />
    </main>
  );
}
