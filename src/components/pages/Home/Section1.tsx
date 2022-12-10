import { Button } from '@/components'
import { ButtonOutlinedGradient } from '@/components/Button/OutlinedGradient'
export const HomeSection1 = () => {
  return (
    <section className="relative flex  flex-col  items-center justify-center gap-10 bg-black    backdrop-blur-3xl">
      <div className="relative flex min-h-[calc(80vh_-_80px)] w-full flex-col items-center justify-center gap-10 bg-neutral-900/40  backdrop-blur-3xl ">
        <div className="homeTitleShadow">
          <div className="flex flex-col items-center ">
            <div className="-mt-1 flex items-center justify-center gap-5 ">
              <div className=" homeTitleGradient flex w-auto items-center justify-center bg-clip-text pt-[1.15rem] drop-shadow-lg ">
                <h1 className="h-full w-full  text-center text-8xl font-black text-transparent">
                  DÊ O PRIMEIRO PASSO
                </h1>
              </div>
            </div>
            <div className="  -mt-4 -ml-2 flex items-center justify-center gap-3 ">
              <div className="homeTitleGradient flex w-auto items-center justify-center bg-clip-text pt-5 drop-shadow-lg">
                <h2 className=" text-center text-5xl font-black text-transparent">
                  EM BUSCA DO CONHECIMENTO
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex max-w-[650px]  flex-col items-center justify-center gap-12 text-lg">
          <div className="flex flex-col items-center justify-center gap-[3px]">
            <h3 className="text-2xl font-bold text-neutral-100">
              Decole em direção ao seu primeiro emprego
            </h3>
            <p className="max-w-[647px] text-center leading-tight text-neutral-200">
              A <span className="font-pacifico text-gray-200">Dev Running</span>{' '}
              é uma plataforma completa para te levar a lugares mais altos. Do
              básico ao avançado, do simples HTML a conexões entre
              microsserviços.
            </p>
          </div>
          <div className=" flex items-center gap-10">
            <div className="homeTitleButtonShadow">
              <Button
                text="INICIAR JORNADA"
                intent="light"
                size="lg"
                textSize="sm"
              />
            </div>{' '}
            <div className="homeTitleButtonShadow2">
              <ButtonOutlinedGradient
                intent="home"
                text="TODOS OS CURSOS"
                size="lg"
                outlinePadding="2px "
                gradient="linear-gradient(92.51deg, #ff512f 0.0%,  #dd2476 100%)"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}