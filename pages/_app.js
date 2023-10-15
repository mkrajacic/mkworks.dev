import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {" "}
      <Head>
        <title>mkworks.dev</title>
        <meta name="description" content="MK's portfolio website" />
        <link rel="icon" href="/faviconmk.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Courier+Prime&family=Loved+by+the+King&family=Merriweather&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
      <Script strategy="lazyOnload" id="sc">
        {`
            var sc_project=12776544; 
            var sc_invisible=1; 
            var sc_security="f5e87506"; 
        `}
      </Script>
      <Script
        src="https://www.statcounter.com/counter/counter.js"
        strategy="lazyOnload"
      ></Script>
      <noscript>
        <div className="statcounter">
          <a
            title="Web Analytics
Made Easy - Statcounter"
            href="https://statcounter.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="statcounter"
              src="https://c.statcounter.com/12776544/0/f5e87506/1/"
              alt="Web Analytics Made Easy - Statcounter"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </a>
        </div>
      </noscript>
    </>
  );
}

export default MyApp;
