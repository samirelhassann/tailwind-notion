import React, { ComponentProps, ReactNode } from "react";

interface BubbleButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
}

export function BubbleButton(props: BubbleButtonProps): ReactNode {
  return (
    <button
      type="button"
      className="flex items-center p-2 text-sm font-medium leading-none text-zinc-200 hover:text-zinc-50 hover:bg-zinc-600 data-[active=true]:text-violet-400"
      {...props}
    />
  );
}
