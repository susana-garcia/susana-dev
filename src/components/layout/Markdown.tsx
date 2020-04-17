import React from 'react'
import marked from 'marked'
import hljs from 'highlight.js'
import { ContentType } from 'utils/contents'

interface MarkdownProps {
  content: string
  contentType?: ContentType
}

const Markdown: React.FC<MarkdownProps> = ({ content, contentType = 'article' }) => (
  <div
    className="markdown"
    id={contentType}
    dangerouslySetInnerHTML={{
      __html: marked(content, {
        highlight: (code, lang) => hljs.highlight(lang, code).value,
      }),
    }}
  />
)

export default Markdown
