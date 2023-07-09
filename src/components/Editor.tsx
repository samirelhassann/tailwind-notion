"use client";

import React from "react";
import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
  RxChevronDown,
  RxChatBubble,
} from "react-icons/rx";

import js from "highlight.js/lib/languages/javascript";
import { lowlight } from "lowlight/lib/core";

import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import {
  EditorContent,
  useEditor,
  BubbleMenu,
  FloatingMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { BubbleButton } from "./BubbleButton";
import "highlight.js/styles/tokyo-night-dark.css";
import { FloatingMenuButton } from "./FloatingMenuButton";

lowlight.registerLanguage("js", js);

const initialContent = `
<div>

<h1>Tailwind Documentation</h1>

<h2>Introduction</h2>
<p>
  Tailwind CSS is a highly customizable, utility-first CSS framework
  that allows you to rapidly build modern and responsive user
  interfaces. It provides a vast collection of pre-built utility classes
  that can be applied directly to your HTML elements, eliminating the
  need to write custom CSS.
</p>

<h2>Key Features</h2>
<ul>
  <li>Utility-First Approach</li>
  <li>Comprehensive Set of Utility Classes</li>
  <li>Responsive Design</li>
  <li>Customizable Configuration</li>
  <li>PurgeCSS Integration</li>
</ul>

<h2>Installation</h2>
<pre>
  <code>npm install tailwindcss</code>
</pre>
<pre>
  <code>npx tailwindcss init</code>
</pre>

<h2>Usage</h2>
<p>
  Tailwind CSS provides a wide range of utility classes that you can
  apply to your HTML elements. Here are a few examples:
</p>
<pre>
  <code>
    &lt;p class="text-red-500 font-bold text-xl"&gt;Hello, Tailwind
    CSS!&lt;/p&gt;
  </code>
</pre>
<pre>
  <code>
    &lt;div class="p-4"&gt; &lt;p class="mt-2"&gt;This has top
    margin.&lt;/p&gt; &lt;/div&gt;
  </code>
</pre>
<pre>
  <code>
    &lt;div class="flex justify-center items-center"&gt; &lt;p&gt;This
    is vertically and horizontally centered.&lt;/p&gt; &lt;/div&gt;
  </code>
</pre>
<pre>
  <code>
    &lt;div class="text-center sm:text-left"&gt;Responsive Text
    Alignment&lt;/div&gt;
  </code>
</pre>

<h2>Configuration</h2>
<p>
  The Tailwind CSS configuration file allows you
  to customize various aspects of the framework. Some key customization
  options include:
</p>
<ul>
  <li>Colors</li>
  <li>Fonts</li>
  <li>Spacing</li>
  <li>Breakpoints</li>
  <li>Variants</li>
  <li>Plugins</li>
</ul>

<h2>Conclusion</h2>
<p>
  Tailwind CSS offers a highly flexible and efficient approach to
  building modern user interfaces. With its extensive collection of
  utility classes and customizable configuration, you can create
  beautiful and responsive designs while reducing the amount of custom
  CSS code you need to write.
</p>

<p>
  For more information, please visit the{" "}
  <a href="https://tailwindcss.com/docs">
    official Tailwind CSS documentation
  </a>
  .
</p>
</div>`;

function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
        defaultLanguage: "plaintext",
      }),
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
  });

  return (
    <>
      <EditorContent
        editor={editor}
        className="max-w-[80%] mx-auto pt-16 prose prose-invert"
      />
      {editor && (
        <FloatingMenu
          editor={editor}
          shouldShow={({ state }) => {
            const { $from } = state.selection;

            return $from.nodeBefore?.textContent === "/";
          }}
        >
          <div className="flex flex-col px-1 py-2 overflow-hidden border rounded-lg shadow-xl bg-zinc-700 border-zinc-600 shadow-black/20">
            <FloatingMenuButton
              imageUrl="https://www.notion.so/images/blocks/header.57a7576a.png"
              title="Heading 1"
              subTitle="Big section heading"
            />
          </div>
        </FloatingMenu>
      )}
      {editor && (
        <BubbleMenu
          editor={editor}
          className="flex overflow-hidden border rounded-lg shadow-xl divide-x-zinc-600 bg-zinc-700 border-zinc-600 shadow-black/20"
        >
          <BubbleButton>
            Text
            <RxChevronDown className="w-5 h-5" />
          </BubbleButton>
          <BubbleButton>
            <RxChatBubble className="w-5 h-5" />
            <span className="ml-2">Comment</span>
          </BubbleButton>
          <div className="flex items-center">
            <BubbleButton
              onClick={() => editor.chain().focus().toggleBold().run()}
              data-active={editor.isActive("bold")}
            >
              <RxFontBold className="w-5 h-5" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleItalic().run()}
              data-active={editor.isActive("italic")}
            >
              <RxFontItalic className="w-5 h-5" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleStrike().run()}
              data-active={editor.isActive("strike")}
            >
              <RxStrikethrough className="w-5 h-5" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleCode().run()}
              data-active={editor.isActive("code")}
            >
              <RxCode className="w-5 h-5" />
            </BubbleButton>
          </div>
        </BubbleMenu>
      )}
    </>
  );
}

export default Editor;
