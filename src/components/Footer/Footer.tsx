import { Contacts } from './Contacts'
import { Courses } from './Courses'
import { Platform } from './Platform'
import { Politics } from './Politics'

export const Footer = () => {
  return (
    <div className="bg-borderGradient pt-[1px]">
      <footer className="flex h-96 w-full items-center justify-center gap-10 bg-dark0">
        <section className="flex gap-20">
          <Courses />
          <Platform />
          <Politics />
          <Contacts />
        </section>
      </footer>
    </div>
  )
}
