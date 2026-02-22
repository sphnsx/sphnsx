import React, { useEffect, useCallback } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import { TextStyle, FontSize, LineHeight } from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import { plainTextToHtml } from '../utils/plainTextToHtml';

const FONT_SIZES = ['14', '16', '18', '20', '24'];
const LINE_HEIGHTS = ['1.2', '1.4', '1.5', '1.75', '2'];

export interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
  className?: string;
  minHeight?: string;
}

function useRichTextExtensions(content: string) {
  return React.useMemo(
    () => [
      StarterKit.configure({
        blockquote: {},
        bold: {},
        heading: { levels: [1, 2, 3] },
        italic: {},
        paragraph: {},
        underline: {},
        link: {
          openOnClick: false,
          HTMLAttributes: { target: '_blank', rel: 'noopener noreferrer' },
        },
        strike: false,
        code: false,
        codeBlock: false,
        bulletList: false,
        orderedList: false,
        listItem: false,
        listKeymap: false,
        horizontalRule: false,
      }),
      TextAlign.configure({ types: ['heading', 'paragraph', 'blockquote'] }),
      TextStyle,
      FontSize,
      LineHeight,
      Underline,
    ],
    []
  );
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({
  value,
  onChange,
  placeholder = 'Write something…',
  className = '',
  minHeight = '12rem',
}) => {
  const initialContent = value?.trim() ? (value.includes('<') ? value : plainTextToHtml(value)) : '';

  const extensions = useRichTextExtensions(initialContent);

  const editor = useEditor({
    extensions,
    content: initialContent,
    editorProps: {
      attributes: {
        class: 'prose prose-sm max-w-none font-sans text-textPrimary focus:outline-none min-h-[8rem]',
      },
      handleDOMEvents: {
        blur: () => {
          if (editor) onChange(editor.getHTML());
        },
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  }, [extensions]);

  useEffect(() => {
    if (!editor) return;
    const current = editor.getHTML();
    const next = value?.trim() ? (value.includes('<') ? value : plainTextToHtml(value)) : '<p></p>';
    if (current !== next && document.activeElement !== editor.view.dom) {
      editor.commands.setContent(next, false);
    }
  }, [editor, value]);

  const setLink = useCallback(() => {
    if (!editor) return;
    const url = window.prompt('URL:', editor.getAttributes('link').href || 'https://');
    if (url == null) return;
    if (url === '') editor.chain().focus().extendMarkRange('link').unsetLink().run();
    else editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }, [editor]);

  if (!editor) {
    return (
      <div
        className={`border border-paletteBorder rounded-sm overflow-hidden bg-bgMain ${className}`}
        style={{ minHeight }}
      >
        <div className="p-3 text-textSecondary font-mono text-sm">Loading editor…</div>
      </div>
    );
  }

  return (
    <div className={`border border-paletteBorder rounded-sm overflow-hidden bg-bgMain ${className}`}>
      <div className="flex flex-wrap items-center gap-1 p-2 border-b border-paletteBorder bg-neutral-100 font-mono text-xs">
        {/* Block style */}
        <select
          className="border border-paletteBorder bg-bgMain text-textPrimary px-2 py-1.5 rounded-sm uppercase tracking-wider"
          value={
            editor.isActive('heading', { level: 1 }) ? 'h1' :
            editor.isActive('heading', { level: 2 }) ? 'h2' :
            editor.isActive('heading', { level: 3 }) ? 'h3' :
            editor.isActive('blockquote') ? 'blockquote' : 'p'
          }
          onChange={(e) => {
            const v = e.target.value;
            if (v === 'p') editor.chain().focus().setParagraph().run();
            else if (v === 'h1') editor.chain().focus().toggleHeading({ level: 1 }).run();
            else if (v === 'h2') editor.chain().focus().toggleHeading({ level: 2 }).run();
            else if (v === 'h3') editor.chain().focus().toggleHeading({ level: 3 }).run();
            else if (v === 'blockquote') editor.chain().focus().toggleBlockquote().run();
          }}
        >
          <option value="p">Paragraph</option>
          <option value="h1">Heading 1</option>
          <option value="h2">Heading 2</option>
          <option value="h3">Heading 3</option>
          <option value="blockquote">Blockquote</option>
        </select>

        <span className="text-textSecondary mx-1">|</span>

        {/* Font size */}
        <select
          className="border border-paletteBorder bg-bgMain text-textPrimary px-2 py-1.5 rounded-sm w-12"
          onChange={(e) => {
            const v = e.target.value;
            if (v) editor.chain().focus().setFontSize(v + 'px').run();
            else editor.chain().focus().unsetFontSize().run();
          }}
        >
          <option value="">—</option>
          {FONT_SIZES.map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>

        {/* Line height */}
        <select
          className="border border-paletteBorder bg-bgMain text-textPrimary px-2 py-1.5 rounded-sm w-12"
          onChange={(e) => {
            const v = e.target.value;
            if (v) editor.chain().focus().setLineHeight(v).run();
            else editor.chain().focus().unsetLineHeight().run();
          }}
        >
          <option value="">—</option>
          {LINE_HEIGHTS.map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>

        <span className="text-textSecondary mx-1">|</span>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-2 py-1.5 rounded-sm border border-paletteBorder font-bold ${editor.isActive('bold') ? 'bg-neutral-300' : 'bg-bgMain text-textPrimary'}`}
          title="Bold"
        >
          B
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-2 py-1.5 rounded-sm border border-paletteBorder italic ${editor.isActive('italic') ? 'bg-neutral-300' : 'bg-bgMain text-textPrimary'}`}
          title="Italic"
        >
          I
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`px-2 py-1.5 rounded-sm border border-paletteBorder underline ${editor.isActive('underline') ? 'bg-neutral-300' : 'bg-bgMain text-textPrimary'}`}
          title="Underline"
        >
          U
        </button>

        <span className="text-textSecondary mx-1">|</span>

        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={`px-2 py-1.5 rounded-sm border border-paletteBorder ${editor.isActive({ textAlign: 'left' }) ? 'bg-neutral-300' : 'bg-bgMain text-textPrimary'}`}
          title="Align left"
        >
          ≡
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={`px-2 py-1.5 rounded-sm border border-paletteBorder ${editor.isActive({ textAlign: 'center' }) ? 'bg-neutral-300' : 'bg-bgMain text-textPrimary'}`}
          title="Align center"
        >
          ≡
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={`px-2 py-1.5 rounded-sm border border-paletteBorder ${editor.isActive({ textAlign: 'right' }) ? 'bg-neutral-300' : 'bg-bgMain text-textPrimary'}`}
          title="Align right"
        >
          ≡
        </button>

        <span className="text-textSecondary mx-1">|</span>

        <button
          type="button"
          onClick={setLink}
          className={`px-2 py-1.5 rounded-sm border border-paletteBorder ${editor.isActive('link') ? 'bg-neutral-300' : 'bg-bgMain text-textPrimary'}`}
          title="Link"
        >
          🔗
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().unsetLink().run()}
          className="px-2 py-1.5 rounded-sm border border-paletteBorder bg-bgMain text-textPrimary"
          title="Unlink"
        >
          Unlink
        </button>

        <span className="text-textSecondary mx-1">|</span>

        <button
          type="button"
          onClick={() => {
            editor.chain().focus().unsetAllMarks().run();
            editor.chain().focus().clearNodes().run();
          }}
          className="px-2 py-1.5 rounded-sm border border-paletteBorder bg-bgMain text-textPrimary"
          title="Clear formatting"
        >
          Clear
        </button>
      </div>
      <EditorContent
        editor={editor}
        style={{ minHeight }}
        className="p-3 text-base leading-relaxed [&_.ProseMirror]:min-h-[8rem] [&_.ProseMirror]:outline-none [&_.ProseMirror_p]:mb-4 [&_.ProseMirror_p:last-child]:mb-0 [&_.ProseMirror_h1]:text-2xl [&_.ProseMirror_h1]:font-bold [&_.ProseMirror_h2]:text-xl [&_.ProseMirror_h2]:font-bold [&_.ProseMirror_h3]:text-lg [&_.ProseMirror_h3]:font-bold [&_.ProseMirror_blockquote]:border-l-2 [&_.ProseMirror_blockquote]:border-paletteBorder [&_.ProseMirror_blockquote]:pl-4 [&_.ProseMirror_blockquote]:italic [&_.ProseMirror_a]:underline"
      />
    </div>
  );
};

export default RichTextEditor;
