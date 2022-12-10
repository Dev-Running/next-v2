import {
  Footer,
  Header,
  HomeBar,
  HomeBenefits,
  HomeScreenshot,
  HomeSection1,
} from '@/components'
import { useEffect, useState } from 'react'
export default function Home() {
  const [active, setActive] = useState('')
  useEffect(() => {
    window.onscroll = () => {
      const screenshot = document.getElementById('screenshotHome')
      const benefits = document.getElementById('benefitsHome')
      if (
        window.scrollY >= screenshot.offsetTop - 400 &&
        window.scrollY <= screenshot.offsetTop + 400
      ) {
        setActive('screenshotHome')
      } else if (
        window.scrollY >= screenshot.offsetTop + 401 &&
        window.scrollY <= benefits.offsetTop + 400
      ) {
        setActive('benefitsHome')
      } else {
        setActive('')
      }
    }
  }, [])
  return (
    <>
      <main className="relative  bg-neutral-900 ">
        <Header />
        <HomeSection1 />
        <HomeBar />
        <HomeScreenshot active={active} />
        <HomeBenefits active={active} />
        <Footer />
      </main>
    </>
  )
}
