import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { siteTitle } from '../components/layout'


export default function FirstPost() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Can. A programmer who likes making fun websites and currently mastering Javascript/React 😎</p>
        <p>Also here are some contacts:</p>
        <ul>
            <li>discord: pirate#1234</li>
            <li>twitter: <a href="https://twitter.com/lelpirate">@lelpirate</a></li>
        </ul>
        <p>And <a href="https://github.com/tpirate">here</a> is my github.</p>
        <p>And a good song list cuz we have extra room: </p>
        <a href="https://www.youtube.com/watch?v=fregObNcHC8">Nirvana - The Man Who Sold The World </a><br />
        <a href="https://www.youtube.com/watch?v=kzbFxLNpguM">Muse - JFK + Defector</a><br />
        <a href="https://www.youtube.com/watch?v=fHiGbolFFGw">Radiohead - Paranoid Android</a><br />
        <a href="https://www.youtube.com/watch?v=LXEKuttVRIo">Slipknot - Snuff </a><br />
        <a href="https://www.youtube.com/watch?v=N9SZaOJEWXU">Muse - Sunburn</a><br />
        <a href="https://www.youtube.com/watch?v=N3oCS85HvpY">Pixies - Where Is My Mind</a><br />
        <a href="https://www.youtube.com/watch?v=dxytyRy-O1k">Linkin Park - BURN IT DOWN</a><br />
        <a href="https://www.youtube.com/watch?v=XCUZSS54drI">Muse - Plug In Baby - Live</a><br />
        <a href="https://www.youtube.com/watch?v=c-hAgmpkm38">Duman - Hayatı Yaşa</a><br />
      </section>
    </Layout>
  )
}
