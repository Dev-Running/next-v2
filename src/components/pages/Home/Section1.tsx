import { Button } from '@/components'
export const HomeSection1 = () => {
  return (
    <section className="relative flex  flex-col  items-center justify-center gap-10 bg-startGradient  backdrop-blur-3xl">
      <div className="relative flex min-h-[calc(100vh_-_80px)] w-full flex-col items-center justify-center gap-10 bg-neutral-800  backdrop-blur-sm ">
        <div className="flex flex-col items-center ">
          <div className=" w- -mt-1 flex items-center justify-center gap-5 ">
            <div
              id="gradient"
              className=" flex w-auto  items-center justify-center bg-clip-text pt-[1.15rem] drop-shadow-lg "
            >
              <h1 className="h-full w-full  text-center text-8xl font-black text-transparent">
                DÊ O
              </h1>
            </div>
            <div
              id="gradient1"
              className="flex w-auto items-center justify-center bg-clip-text pt-4 drop-shadow-lg"
            >
              <h1 className="h-full w-full text-center text-8xl font-black text-transparent">
                PRIMEIRO PASSO
              </h1>
            </div>
          </div>
          <div className=" -mt-4 -ml-2 flex items-center justify-center gap-3 ">
            <div
              id="gradient2"
              className="flex w-auto items-center justify-center bg-clip-text pt-5 drop-shadow-lg"
            >
              <h2 className=" text-center text-5xl font-black text-transparent">
                EM
              </h2>
            </div>
            <div
              id="gradient1"
              className="flex w-auto items-center justify-center bg-clip-text pt-5 drop-shadow-lg"
            >
              <h2 className=" text-center text-5xl font-black text-transparent">
                BUSCA DO CONHECIMENTO
              </h2>
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
            <div className="flex items-center justify-center rounded-[4px]  border-dark bg-dark p-[2px] hover:border-neutral-700/90 hover:bg-neutral-900">
              <Button
                text="INICIAR JORNADA"
                intent="dark"
                size="lg"
                textSize="sm"
              />
            </div>
            <div className="flex items-center justify-center rounded-[4px]  border-dark bg-dark p-[2px] hover:border-neutral-700/90 hover:bg-neutral-900">
              <Button
                text="TODOS OS CURSOS"
                intent="dark"
                textSize="sm"
                size="lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
