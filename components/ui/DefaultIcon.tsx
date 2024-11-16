"use client";

import { DefaultIconProps } from "@/types/components/Navigation";

function DefaultIcon({ image }: DefaultIconProps) {
  return (
    <svg
      xmlns={image ? image : "http://www.w3.org/2000/svg"}
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-8 h-8 text-gray-400 focus:outline-none active:bg-transparent hover:stroke-blue-500 transition-colors duration-300"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="gray"
        strokeWidth="2"
        fill="none"
        className=""
      />
      <path
        d="M12 13.5c-2 0-3.5 1.5-3.5 3.5v1h7v-1c0-2-1.5-3.5-3.5-3.5z"
        fill="gray"
      />
      <circle cx="12" cy="9" r="2.5" fill="gray" />
    </svg>
  );
}

export default DefaultIcon;
