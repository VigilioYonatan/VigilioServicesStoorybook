import Printhtml from "../../../libs/Printhtml";

function HeaderOne() {
    return (
        <>
            <Printhtml value={Header()} />
            <style jsx>
                {`
                    .delay-custom-1 {
                        transition: transform 0.3s ease;
                    }
                `}
            </style>
        </>
    );
}
function Header() {
    return `
    <header
        class="sticky top-0 right-0 z-[99] bg-secondary shadow"
    >
        <div
            class="max-w-6xl container mx-auto flex justify-between items-center py-3 px-6"
        >
           <img width="60" height="60" src="/images/logowhite.png"/>
        
           ${Aside()}
            <nav class="flex gap-6 items-center">
             <ul class="items-center gap-6 hidden lg:flex">
                <li> <a
                    href=""
                    class="text-secondary-light font-bold tracking-wider uppercase text-sm link hover:text-primary "
                    >Inicio</a
                ></li>
                <li><a
                    href=""
                    class="text-primary  font-bold tracking-wider uppercase text-sm link dark:hover:text-primary hover:text-primary "
                    >Menú</a
                ></li>
                <li><a
                    href=""
                    class="text-secondary-light font-bold tracking-wider uppercase text-sm link dark:hover:text-primary hover:text-primary "
                    >Nosotros</a
                ></li>
                <li><a
                    href=""
                    class="text-secondary-light font-bold tracking-wider uppercase link dark:hover:text-primary hover:text-primary  text-2xl"
                    ><i class="fa-solid fa-circle-user"></i></a
                ></li>
           
             </ul>   
            </nav>
        </div>
    </header>`;
}
function Aside() {
    return `<div
  x-data="{isOpen:false}"
  class="lg:hidden order-2"
  x-effect="document.body.classList.toggle('overflow-hidden',isOpen)"
>
  <div class="flex items-center gap-2">
      <button
          class=""
          type="button"
          aria-label="open aside"
          @click="isOpen=true"
      >
          <i class="fa-solid fa-bars text-3xl text-primary"></i>
      </button>
  </div>

  <aside
      class="fixed top-0 left-0 bottom-0 right-0 z-[999] h-screen w-full bg-black bg-opacity-80"
      :class="isOpen ? 'visible': 'invisible'"
      @click="isOpen=false"
  >
      <div
          class="relative w-full sm:w-[300px] h-full bg-background-light dark:bg-background-dark delay-custom-1"
          :class="isOpen ? 'translate-x-0': '-translate-x-full'"
          @click="e=>e.stopPropagation()"
      >
          <div class="flex flex-col">
              <div class="flex justify-center items-center py-4">
                <img width="60" height="60" src="/images/logowhite.png"/>
              </div>
              <web-search ></web-search>
              <nav class="flex items-center gap-3 flex-col h-full w-full">
                  <a
                      href=""
                      class="text-black dark:text-secondary-light hover:text-secondary-light font-semibold uppercase text-sm hover: hover:bg-primary w-full text-center py-2 delay-custom-1 tracking-wider"
                      >INICIO</a
                  >
                  <a
                      href=""
                      class="text-black dark:text-secondary-light hover:text-secondary-light font-semibold uppercase text-sm hover: hover:bg-primary w-full text-center py-2 delay-custom-1 tracking-wider"
                      >MENÚ</a
                  >
                  <a
                      href=""
                      class="text-black dark:text-secondary-light hover:text-secondary-light font-semibold uppercase text-sm hover: hover:bg-primary w-full text-center py-2 delay-custom-1 tracking-wider"
                      >NOSOTROS</a
                  >
              </nav>
          </div>
          <div class="absolute bottom-0 w-full right-0">
              <a
                  href=""
                  class="block text-center my-2 text-xs opacity-40 dark:text-secondary-light"
                  >Powered by <b>Vigilio Services</b></a
              >
              <button
                  class="bg-danger w-full py-3 flex gap-2 justify-center items-center uppercase text-sm text-white"
                  aria-label="close aside"
                  @click="isOpen=false"
              >
                  <i class="fa-regular fa-circle-xmark"></i>
                  Cerrar
              </button>
          </div>
      </div>
  </aside>
</div>`;
}

export default HeaderOne;
