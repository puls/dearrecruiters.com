import Document, { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";
import ReactGA from "react-ga";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    useEffect(() => {
      ReactGA.initialize("UA-24555711-1");
      ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/ayr2eql.css" />
          <style type="text/css" media="screen">
            {`
						body {
							background: #eadbde;
							font-weight: 400;
							font-size: 14pt;
						}
						h1 {
							font-weight: 700;
						}
						main {
							width: 600px;
							margin: 2em auto;
							background-color: #fff;
							padding: 2em;
							border: 1px solid #ccc;
						}
						.footer {
							font-size: smaller;
							font-style: italic;
						}
						`}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
