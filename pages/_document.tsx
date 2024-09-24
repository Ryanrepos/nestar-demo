import { Html, Head, Main, NextScript } from "next/document";

// Meta data larni qurish uchun ishlatamiz 

export default function Document() {
  console.log("DOCUMENT - PAGER ROUTER")
  return (
    <Html lang="en">
       <Head>
        <meta charSet="UTF-8" />
        <meta name="title" content="Nestar Demo" />
        <meta name="robots" content="index,follow" />
        <link rel="icon" type="image/png" href="/img/logo/favicon.svg" />

        {/** SEO */}
        <meta name="keyword" content={"nestar, nestar.uz, devex mern, mern nestjs fullstack"}/>
        <meta name="description" content={"BUY AND SELL PROPERTIES ANYWHERE ANYTIME IN SOUTH KOREA. | " + 
        "대한민국 언제 어디서나 부동산을 사고팔 수 있습니다" + 
        "ПОКУПАЙТЕ И ПРОДАВАЙТЕ НЕДВИЖИМОСТЬ В ГДЕ В ЛЮБОЕ ВРЕМЯ В ЮЖНОЙ КОРЕЕ"
      } />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
