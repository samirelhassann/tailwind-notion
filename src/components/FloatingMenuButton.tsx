import React, { ReactNode } from "react";

import Image from "next/image";

interface FloatingMenuButtonProps {
  imageUrl: string;
  title: string;
  subTitle: string;
}

export function FloatingMenuButton({
  imageUrl,
  title,
  subTitle,
}: FloatingMenuButtonProps): ReactNode {
  return (
    <button
      className="flex gap-3 px-1 py-2 rounded hover:bg-zinc-600"
      type="button"
    >
      <Image
        src={imageUrl}
        alt={`${title.toLowerCase()} image icon`}
        width={40}
        height={40}
      />

      <div className="flex flex-col items-start gap-1">
        <span className="text-sm text-zinc-50">{title}</span>
        <span className="text-xs text-zinc-300">{subTitle}</span>
      </div>
    </button>
  );
}
