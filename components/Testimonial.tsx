"use client";

import React from "react";
import { Star } from "lucide-react";

export default function Testimonial() {
  return (
    <section id="reviews" className="py-24 bg-[#080808] border-t border-[#1b1915] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#c5a059]/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a059] font-medium mb-4">
          <span className="w-6 h-[1px] bg-[#c5a059]" />
          <span>Client Stories & Recognition</span>
          <span className="w-6 h-[1px] bg-[#c5a059]" />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f5f2eb] font-normal mb-8">
          Craft changes everything.
        </h2>

        {/* 5 Gold Stars */}
        <div className="flex items-center justify-center gap-1.5 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-[#c5a059] text-[#c5a059]"
            />
          ))}
        </div>

        {/* Pull Quote */}
        <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-[#f5f2eb] font-light italic leading-relaxed max-w-3xl mx-auto mb-10">
          &ldquo;I stopped guessing and settled into true distinction. The fade
          transitions are surgical, the hot-towel beard contour is unmatched, and
          reaching out directly via their Instagram and email makes booking
          effortless. Fresh Cutz sets the benchmark.&rdquo;
        </blockquote>

        {/* Author Details */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#181818] border border-[#c5a059]/40 flex items-center justify-center font-serif text-sm font-semibold text-[#c5a059]">
            JR
          </div>
          <div className="text-left">
            <p className="text-sm font-medium text-[#f5f2eb] uppercase tracking-wider">
              Julian Reed
            </p>
            <p className="text-[11px] text-[#8c7343] uppercase tracking-widest">
              Private Client & Architectural Director — Atlanta
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
