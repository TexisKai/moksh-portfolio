import React from 'react';

export default function ProjectCard({ title, subtitle, desc, imgSrc }:
  { title: string; subtitle?: string; desc?: string; imgSrc?: string }) {
  return (
    <article className="border border-gray-800 rounded-lg overflow-hidden bg-black">
      <div className="p-4">
        <h4 className="font-semibold">{title}</h4>
        <p className="text-xs text-gray-400 mt-1">{subtitle}</p>
        <p className="text-sm text-gray-300 mt-3 leading-snug">{desc}</p>
      </div>
      <div className="h-40 bg-white/5 flex items-center justify-center">
        <div className="text-gray-500 text-center text-xs">Screenshot placeholder<br/>{imgSrc}</div>
      </div>
    </article>
  );
}
