import Head from 'next/head'

import Layout from '../components/layout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>TWIST Visual</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400;500;600;700;900&display=swap" rel="stylesheet"/>
      </Head>
      <Layout/>
    </div>
  )
}
