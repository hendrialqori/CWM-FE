import React from "react";
import * as LP from "#/modules/landing-page"

export default function Home() {
  return (
    <main className="bg-background">
        <LP.Hero />
        <LP.UniqueSellingPoint />
        <LP.Testimonial />
    </main>
  )
}
