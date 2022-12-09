import {
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
      const element = document.getElementById('screenshotHome')
      if (
        window.scrollY >= element.offsetTop - 400 &&
        window.scrollY <= element?.offsetTop + 400
      ) {
        setActive('screenshotHome')
      } else {
        setActive('benefitsHome')
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
        <div className="h-screen w-full bg-dark"></div>
      </main>
    </>
  )
}
