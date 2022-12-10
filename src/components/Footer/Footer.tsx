import Image from 'next/image'

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
          className="-mt-5"
          width={244}
          height={232.81}
          quality={100}
        />
        <section className="flex gap-10">
          <div className="mr-20 flex flex-col gap-4">
            <h1 className="font-semibold text-neutral-200">Contatos</h1>
            <div>
              <h2 className="font-medium text-neutral-300">Lucas Laurentino</h2>
              <a href="" className="text-neutral-400">
                laurentinodeev@gmail.com
              </a>
            </div>
            <div>
              <h2 className="font-medium text-neutral-300">Suporte</h2>
              <a href="" className="text-neutral-400">
                devrunning@gmail.com
              </a>
            </div>
          </div>
        </section>
      </footer>
    </div>
  )
}
