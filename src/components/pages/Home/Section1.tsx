import { Button } from '@/components'
export const HomeSection1 = () => {
  return (
    <section className="relative flex  flex-col  items-center justify-start gap-10 bg-startGradient py-[8.75rem] backdrop-blur-3xl">
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
          <h3 className="text-2xl font-bold text-white">
            Decole em direção ao seu primeiro emprego
          </h3>
          <p className="max-w-[647px] text-center leading-tight text-zinc-200">
            A <span className="font-pacifico text-gray-200">Dev Running</span> é
            uma plataforma completa para te levar a lugares mais altos. Do
            básico ao avançado, do simples HTML a conexões entre microsserviços.
          </p>
        </div>
        <div className=" flex items-center gap-10">
          <div className="flex items-center justify-center rounded-[4px]  border-white bg-white  hover:border-white/90 hover:bg-zinc-300/90">
            <Button
              text="INICIAR JORNADA"
              intent="secondary"
              size="lg"
              textSize="sm"
            />
          </div>
          <div className="gradientPrimary box-border flex h-[47px] items-center justify-center p-[2px]">
            <Button
              text="TODOS OS CURSOS"
              intent="outlineGradientPrimary"
              textSize="sm"
              size="lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
