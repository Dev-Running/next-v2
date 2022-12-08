import Image from 'next/image'
import { useState } from 'react'
import { Button } from '../Button/Button'

export const Header = () => {
  let html: HTMLHtmlElement | null
  const [darkMode, setDarkMode] = useState(false)

  return (
    <header className="sticky top-0 z-40 flex h-20 w-full justify-center gap-[12.5rem] border-b-2  border-zinc-700/20  bg-zinc-900/10 drop-shadow-xl backdrop-blur-sm transition-colors">
      <div className="flex h-full items-center gap-[23.375rem]">
        <Image
          src="/assets/short-dark-mode-logo.svg"
          className="-mt-3 scale-75"
          width={80}
          height={100}
          quality={100}
          alt=""
        />

        <ul className="flex gap-[2.45rem] font-normal  text-zinc-200">
          <li>
            <a
              href=""
              className=" font-medium text-white hover:brightness-110 "
            >
              Inicio
            </a>
          </li>
          <li>
            <a href="" className="  text-zinc-300 hover:brightness-110">
              Cursos
            </a>
          </li>
          <li>
            <a href="" className=" text-zinc-300 hover:brightness-110">
              Blog
            </a>
          </li>
          <li>
            <a href="" className=" text-zinc-300 hover:brightness-110">
              Sobre
            </a>
          </li>
        </ul>
      </div>
      <div className="flex h-full items-center gap-8">
        <a
          href=""
          className="text-sm font-semibold uppercase text-zinc-300  hover:brightness-110"
        >
          Entrar
        </a>
        <Button text="CRIAR CONTA" intent="secondary" textSize="sm" />
      </div>
    </header>
  )
}
