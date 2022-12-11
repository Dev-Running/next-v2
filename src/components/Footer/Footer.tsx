import Image from 'next/image'
import { Contacts } from './Contacts'
import { Courses } from './Courses'
import { Platform } from './Platform'
import { Politics } from './Politics'

export const Footer = () => {
  return (
    <div
      style={{
        backgroundImage:
          'linear-gradient(90deg, #FF512F 0%, rgba(0, 0, 0, 0) 49.97%, #DD2476 100%)',
      }}
      className="pt-[1px]"
    >
      <footer className="flex h-96 w-full items-center justify-center gap-10 bg-dark0">
        <Image
          alt=""
          src="/assets/dark-mode-logo-footer.svg"
          className="-mt-24"
          width={244}
          height={232.81}
          quality={100}
        />
        <Contacts />
        <section className="flex gap-0">
          <Courses />
          <Platform />
          <Politics />
        </section>
      </footer>
    </div>
  )
}
