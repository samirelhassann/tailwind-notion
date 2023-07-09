/* eslint-disable jsx-a11y/control-has-associated-label */

import { RxFileText } from "react-icons/rx";

import Image from "next/image";

import Editor from "@/components/Editor";

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-r text-zinc-50 from-pink-300 via-purple-300 to-indigo-400">
      <div className="mx-auto grid min-h-[200px] w-[90%] grid-cols-[16rem_1fr] overflow-hidden rounded-xl border border-black/20 bg-zinc-800 shadow-sm">
        <aside className="flex flex-col border-r border-r-zinc-600 bg-zinc-700">
          <div className="flex gap-2 p-4 group">
            <button
              type="button"
              className="w-3 h-3 rounded-full hover:bg-red-400 bg-zinc-300"
            />
            <button
              type="button"
              className="w-3 h-3 rounded-full hover:bg-yellow-400 bg-zinc-300"
            />
            <button
              type="button"
              className="w-3 h-3 rounded-full hover:bg-green-400 bg-zinc-300"
            />
          </div>

          <div className="flex items-center gap-2 pl-3 mt-2">
            <Image
              src="https://github.com/samirelhassann.png"
              alt="Logged user image"
              width={30}
              height={30}
            />

            <span>Samir's Notion</span>
          </div>

          <div className="flex flex-col mt-8">
            <button
              type="button"
              className="flex py-1 pl-3 items-center gap-1 text-zinc-300 data-[selected=true]:bg-zinc-600 data-[selected=true]:font-bold data-[selected=true]:text-zinc-100 "
              data-selected
            >
              <RxFileText size={20} />

              <span className="text-md">Tailwind Documentation</span>
            </button>
          </div>
        </aside>

        <main className="h-[calc(100vh-70px)] p-4 overflow-y-scroll text-black scrollbar-thumb-zinc-600 scrollbar-thumb-rounded-md scrollbar-thin">
          <Editor />
        </main>
      </div>
    </main>
  );
}
