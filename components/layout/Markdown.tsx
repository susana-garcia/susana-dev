import React from 'react'
import marked from 'marked'
import hljs from 'highlight.js'

interface MarkdownProps {
  content: string
}

const Markdown: React.FC<MarkdownProps> = ({ content }) => (
  <div
    className="markdown"
    dangerouslySetInnerHTML={{
      __html: marked(content, {
        highlight: (code, lang) => hljs.highlight(lang, code).value,
      }),
    }}
  />
)

export default Markdown
