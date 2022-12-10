import clsx from 'clsx'
import Image from 'next/image'

export const HomeScreenshot = ({ active }: { active: string }) => {
  return (
    <div className=" bg-dark">
      <section
        id="screenshotHome"
        className={clsx(
          'group flex min-h-[calc(100vh-160px)] flex-row justify-center   transition-all duration-1000 ',
          {
            'gap-48 opacity-100': active === 'screenshotHome',
            'gap-32 opacity-0': active !== 'screenshotHome',
          }
        )}
      >
        <div className="flex  flex-col items-start justify-center gap-y-[5.925rem]    ">
          <div className="flex w-[621px] max-w-[621px] gap-3">
            <div className="flex items-start">
              <Image
                alt="123"
                src="/assets/codesandbox.svg"
                width={180}
                height={190}
              />
            </div>

            <div className="pt-3">
              <h1 className="text-xl font-bold text-neutral-100  drop-shadow-sm">
                Aumente sua gama de conhecimento!
              </h1>
              <p className=" mt-5 text-justify font-light ">
                A plataforma conta com o ensino de 2 linguagens de programacao:
              </p>
              <ul>
                <li className="text-justify indent-2 font-light ">
                  • <b className="font-medium text-primary">Javascript</b> -
                  Linguagem super versatil, simples e aplicavel no Front-end e
                  no Back-end.
                </li>
                <li className=" text-justify indent-2 font-light ">
                  • <b className="font-medium text-primary">GoLang</b> - A mais
                  promissora do mercado! Conta com um desempenho absurdo por sua
                  alta capacidade de trabalhar com multi-threads.
                  <span className="font-medium ">
                    {' '}
                    Normalmente aplicada na arquitetura de microsservicos para
                    gerar alto desempenho em determinadas funcionalidades da sua
                    aplicacao.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex w-[621px] max-w-[621px] gap-3">
            <div className="flex items-start">
              <Image
                alt="Watch"
                src="/assets/circleDolar.svg"
                width={90}
                height={90}
              />
            </div>

            <div className="pt-3">
              <h1 className="text-xl font-bold text-neutral-100 drop-shadow-sm">
                Voce pode ganhar mais!
              </h1>
              <p className=" mt-5 text-justify font-light ">
                Comparado com outras profissoes, um desenvolvedor tem a
                capacidade de lucrar com diversos tipos de servicos e em areas
                diferentes.
              </p>
              <ul>
                <p className=" mt-2 text-justify font-medium ">
                  Formatos de trabalho:
                </p>
                <li className=" text-justify indent-2 font-medium ">
                  • Freelancer
                </li>
                <li className=" text-justify indent-2 font-medium ">• CLT</li>
                <li className=" text-justify indent-2 font-medium ">• PJ</li>
                <p className=" mt-0 text-justify font-medium ">
                  Algumas areas:
                </p>
                <li className=" text-justify indent-2 font-medium ">
                  • Front-end - Parte visual e interativa;
                </li>
                <li className=" text-justify indent-2 font-medium ">
                  • Back-end - Regras de negocio e dados;
                </li>
                <li className=" indent-2 font-medium ">
                  • Full-stack - Soluciona problemas e desenvolve tanto no
                  front-end como no back-end;
                </li>
                <li className=" text-justify indent-2 font-medium ">
                  • DevOps - Voltado para infraestrutura monitoracao e etc...
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Image
          alt="Foto de uma aula"
          src="/assets/home-screenshot.svg"
          width={800}
          className={clsx('transition-all duration-1000 ease-in-out ', {
            'scale-125': active === 'screenshotHome',
            'scale-100': active !== 'screenshotHome',
          })}
          height={500.13}
        />
      </section>
    </div>
  )
}
