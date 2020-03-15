import React from 'react'
import marked from 'marked'
import hljs from 'highlight.js'
import styles from './Markdown.module.css'

interface MarkdownProps {
  content: string
}

const Markdown: React.FC<MarkdownProps> = ({ content }) => (
  <div
    className={styles.markdown}
    dangerouslySetInnerHTML={{
      __html: marked(content, {
        highlight: (code, lang) => hljs.highlight(lang, code).value,
      }),
    }}
  />
)

export default Markdown
