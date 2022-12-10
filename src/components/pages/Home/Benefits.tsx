import clsx from 'clsx'
import Image from 'next/image'
export const HomeBenefits = ({ active }: { active: string }) => {
  return (
    <>
      <section
        id="benefitsHome"
        className={clsx(
          'group flex min-h-[calc(100vh-80px)]   w-full items-center justify-center  bg-dark2 transition-all duration-1000',
          {
            'gap-48': active === 'benefitsHome',
            'gap-32': active !== 'benefitsHome',
          }
        )}
      >
        <div
          className={clsx('rounded-lg    transition-all duration-1000   ', {
            'opacity-100': active === 'benefitsHome',
            'opacity-0': active !== 'benefitsHome',
          })}
        >
          <Image
            src="/assets/Rocket.svg"
            className={clsx(
              '   drop-shadow-sm transition-all duration-1000 ease-in-out  ',
              {
                'translate-y-0 translate-x-0 rotate-12 scale-100   opacity-100  brightness-125':
                  active === 'benefitsHome',
                '-translate-x-64 translate-y-52  -rotate-45 scale-50 opacity-0':
                  active !== 'benefitsHome',
              }
            )}
            width={600}
            height={600}
            alt=""
          />
        </div>
        <div
          className={clsx(
            'flex  h-full flex-col items-start justify-center gap-y-[5.925rem] rounded-lg transition-all duration-1000 ',
            {
              'opacity-100': active === 'benefitsHome',
              'opacity-0': active !== 'benefitsHome',
            }
          )}
        >
          <div className="flex w-[621px] max-w-[621px] gap-3">
            <div className="flex items-start">
              <Image
                alt="Watch"
                src="/assets/watch.svg"
                width={100}
                height={100}
              />
            </div>

            <div className="pt-3">
              <h1
                className={clsx(
                  'text-xl  font-bold  drop-shadow-sm transition-colors',
                  {
                    'text-neutral-100': active,
                  }
                )}
              >
                Economize o seu tempo!
              </h1>
              <p className=" mt-5 text-justify font-light ">
                Iniciar no mundo do desenvolvimento de software requer cuidado
                ao montar sua grade de estudos.
              </p>
              <p className=" mt-2 text-justify font-medium ">
                A plataforma cuida disso tudo pra voce! Basta acessar com sua
                conta que todo o conteudo estara disponivel e ordenado de forma
                progressiva.
              </p>
            </div>
          </div>

          <div className="flex w-[621px] max-w-[621px] gap-3">
            <div className="flex items-start">
              <Image
                alt="Watch"
                src="/assets/Rocket.svg"
                width={170}
                height={200}
              />
            </div>

            <div className="pt-3">
              <h1
                className={clsx(
                  'text-xl  font-bold  drop-shadow-sm transition-colors',
                  {
                    'text-neutral-100': active,
                  }
                )}
              >
                Masterize tecnologias avancadas!
              </h1>
              <p className=" mt-5 text-justify font-light ">
                Todo mundo precisa se especializar cada vez mais. Devido a
                grande quantidade de empresas novas que ingressam no mercado, e
                necessario que voce tenha um bom conhecimento em determinadas
                tecnologias a fim de suprir as necessidades dessa empresa.
              </p>
              <ul>
                <p className=" mt-2 text-justify font-medium ">
                  Algumas ferramentas interessantes para masterizar sao:
                </p>
                <li className=" text-justify indent-2 font-medium ">
                  • Docker/Docker Compose
                </li>
                <li className=" text-justify indent-2 font-medium ">
                  • Apache Kafka
                </li>
                <li className=" text-justify indent-2 font-medium ">
                  • RabbitMQ
                </li>
                <li className=" text-justify indent-2 font-medium ">• NGINX</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
