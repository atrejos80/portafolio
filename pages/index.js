import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Proyects from '../components/Projects'
import Contact from '../components/Contact'
import PageFooter from '../components/Footer'
import React, { useEffect, useState } from 'react'


export default function Home() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  return (
        <div>
          <Head>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
            <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-chrome-192x192.png"></link>
            <title> Abraham | Developer </title>
            <meta name="description" content="Hi, I'm Abraham 👋" />
          </Head>
          <Navbar />
          <Main />
          <Education />
          <Experience />
          <Skills />
          <Proyects />
          <Contact />
          <PageFooter />
        </div>
  )
}
