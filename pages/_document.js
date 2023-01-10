import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charset="utf-8" />
          {/* <meta name="apple-mobile-web-app-capable" content="yes"></meta>
          <meta
            property="og:title"
            content="Float – A native floating web browser for macOS"
          ></meta>
          <meta
            property="og:image"
            content="https://float.aayush.art/social-preview.jpg"
          ></meta>
          <meta
            property="og:description"
            content="A lightweight, natively built browser."
          ></meta>
          <meta property="og:url" content="https://float.aayush.art"></meta>
          <meta
            name="twitter:image"
            content="https://float.aayush.art/social-preview.jpg"
          ></meta>
          <meta
            name="twitter:image:src"
            content="https://float.aayush.art/social-preview.jpg"
          ></meta>
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:site" content="@FloatApp"></meta>
          <meta name="twitter:creator" content="@FloatApp"></meta>
          <meta name="twitter:title" content="Float for macOS"></meta>
          <meta
            name="twitter:description"
            content="Float, a lightweight, natively built browser for macOS."
          ></meta> */}
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
