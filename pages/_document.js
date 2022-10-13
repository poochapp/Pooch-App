import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@754&display=swap" rel="stylesheet"></link> */}
        </Head>
        <body className='bg-pooch-blue bg-center bg-cover bg-no-repeat bg-splash-mobile md:bg-splash-desk'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument