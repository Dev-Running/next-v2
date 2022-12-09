import { Header, HomeBenefits, HomeOrangeBar, HomeSection1 } from '@/components'
import Image from 'next/image'
export default function Home() {
  return (
    <>
      <main className="relative  bg-neutral-900 ">
        <Header />
        <HomeSection1 />
        <HomeOrangeBar />
        <section className="  flex justify-center bg-[#111] py-[4.75rem] ">
          <div className="group relative px-40">
            <Image
              alt="Foto de uma aula"
              src="/assets/home-screenshot.svg"
              width={1158}
              height={695.13}
            />
            <div className=" absolute top-0 left-0 z-10 h-full w-[1158px]"></div>
          </div>
        </section>
        <HomeBenefits />
      </main>
    </>
  )
}
