import * as React from 'react'
import NextDocument, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class Document extends NextDocument {
  static async getInitialProps(context: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(context)
    return { ...initialProps }
  }

  render() {
    return (
      <Html className="overflow-x-hidden">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <body className="max-w-screen overflow-hidden bg-gray-100 dark:bg-gray-900 transition duration-500 ease-in-out">
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  var storageKey = 'darkMode';
                  var classNameDark = 'dark-mode';
                  var classNameLight = 'light-mode';
                
                  function setClassOnDocument(darkMode) {
                    document.documentElement.classList.add(darkMode ? classNameDark : classNameLight);
                    document.documentElement.classList.remove(darkMode ? classNameLight : classNameDark);
                  }
                  
                  var preferDarkQuery = '(prefers-color-scheme: dark)';
                  var mql = window.matchMedia(preferDarkQuery);
                  var supportsColorSchemeQuery = mql.media === preferDarkQuery;
                  var localStorageTheme = null;

                  try {
                    localStorageTheme = localStorage.getItem(storageKey);
                  } catch (err) {}

                  var localStorageExists = localStorageTheme !== null;
                  if (localStorageExists) {
                    localStorageTheme = JSON.parse(localStorageTheme);
                  }
                
                  if (localStorageExists) {
                    setClassOnDocument(localStorageTheme);
                  } else if (supportsColorSchemeQuery) {
                    setClassOnDocument(mql.matches);
                    localStorage.setItem(storageKey, mql.matches);
                  } else {
                    var isDarkMode = document.documentElement.classList.contains(classNameDark);
                    localStorage.setItem(storageKey, JSON.stringify(isDarkMode));
                  }
                })();
              `,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
