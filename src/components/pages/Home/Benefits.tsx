import Image from 'next/image'

export const HomeBenefits = () => {
  return (
    <>
      <section className=" group flex w-full items-center justify-center gap-32 bg-neutral-900 py-28">
        <div className="flex max-w-[1520px]  flex-col items-start justify-center gap-y-[5.938rem]   ">
          <Image
            src="/assets/Rocket.svg"
            className=" -translate-x-20 translate-y-20 drop-shadow-md transition-all duration-[3s] hover:brightness-110 group-hover:translate-x-10 group-hover:-translate-y-10"
            width={600}
            height={600}
            alt=""
          />
        </div>
        <div className="flex max-w-[1520px] flex-col items-start justify-center gap-y-[5.938rem]   ">
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
              <h1 className="text-xl font-bold  drop-shadow-sm">
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
              <h1 className="text-xl font-bold  drop-shadow-sm">
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
      <div className=" flex w-full items-center justify-center  bg-[#111] py-28">
        <section className="flex max-w-[1520px] flex-col items-start justify-center gap-y-[5.938rem]   ">
          {
            // 10.938rem
          }

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
              <h1 className="text-xl font-bold  drop-shadow-sm">
                Aumente sua gama de conhecimento!
              </h1>
              <p className=" mt-5 text-justify font-light ">
                A plataforma conta com o ensino de 2 linguagens de programacao:
              </p>
              <ul>
                <li className="text-justify indent-2 font-light ">
                  • Javascript - Linguagem super versatil, simples e aplicavel
                  no Front-end e no Back-end.
                </li>
                <li className=" text-justify indent-2 font-light ">
                  • GoLang - A mais promissora do mercado! Conta com um
                  desempenho absurdo por sua alta capacidade de trabalhar com
                  multi-threads.
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
              <h1 className="text-xl font-bold  drop-shadow-sm">
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
                  front-end components;
                </li>
                <li className=" text-justify indent-2 font-medium ">
                  • DevOps - Voltado para infraestrutura monitoracao e etc...
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
