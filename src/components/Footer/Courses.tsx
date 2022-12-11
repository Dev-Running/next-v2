export const Courses = () => {
  return (
    <div className=" flex flex-col gap-4">
      <h1 className="font-semibold text-neutral-200">Cursos</h1>
      <div className="flex flex-col gap-[0.875rem]">
        <a href="" className="text-neutral-400 hover:text-neutral-200">
          Front-end
        </a>
        <a href="" className="text-neutral-400 hover:text-neutral-200">
          Back-end
        </a>
        <a href="" className="text-neutral-400 hover:text-neutral-200">
          Infraestrutura
        </a>
        <a href="" className="text-neutral-400 hover:text-neutral-200">
          Microsservicos
        </a>
        <a href="" className="text-neutral-400 hover:text-neutral-200">
          Observabilidade
        </a>
      </div>
    </div>
  )
}
