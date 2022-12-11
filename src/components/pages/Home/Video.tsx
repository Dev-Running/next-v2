export const HomeVideo = () => {
  return (
    <section className="flex items-center justify-center bg-dark py-20">
      <div className="videoHomeEffect relative z-10 flex items-center justify-center overflow-hidden rounded-lg p-[1px] before:absolute before:h-[10rem] before:w-[60rem]  before:animate-rotate after:absolute after:h-[15rem] after:w-[60rem] after:animate-rotate after:bg-videoGradient">
        <div className="z-20 m-[3px] flex aspect-video h-[25rem] w-[50rem] items-center justify-center rounded-md bg-dark0 outline outline-2 outline-dark3  drop-shadow-lg">
          VIDEO
        </div>
      </div>
    </section>
  )
}
