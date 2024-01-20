import Printhtml from "../../../libs/Printhtml";

function Carousels() {
    return (
        <div class="flex flex-col gap-12">
            <a
                target="_blank"
                href="https://ganlanyuan.github.io/tiny-slider/demo/"
            >
                MORE EXAMPLES
            </a>
            <Printhtml value={One()} />
        </div>
    );
}

function One() {
    return `
    <div class="relative">
      <div class="" x-data=""  id="categories-carousel">
        <div class="h-[200px]">
            <div class="flex justify-center items-center h-full w-full relative  rounded-md overflow-hidden">
                <img class="object-cover absolute inset-0 -z-10 h-full w-full" width="300" height="300" src="https://loremflickr.com/640/360" alt="">
                <a href="" class="text-white bg-primary px-4 py-2 rounded-sm">hola2</a>
            </div>
        </div>
        <div class="h-[200px]">
            <div class="flex justify-center items-center h-full w-full relative  rounded-md overflow-hidden">
                <img class="object-cover absolute inset-0 -z-10 h-full w-full" width="300" height="300" src="https://loremflickr.com/640/360" alt="">
                <a href="" class="text-white bg-primary px-4 py-2 rounded-sm">hola2</a>
            </div>
        </div>
      </div>
      <div class="">
        <button type="button" aria-label="previous" class="absolute top-[35%] left-0 z-10 text-3xl w-[50px] h-[50px] flex justify-center items-center bg-white shadow-md rounded-full" onclick="prevSlide()"><i class="fas fa-caret-left"></i></button>
        <button type="button" aria-label="next" class="absolute top-[35%] right-0 z-10 text-3xl w-[50px] h-[50px] flex justify-center items-center bg-white shadow-md rounded-full" onclick="nextSlide()"><i class="fas fa-caret-right"></i></button>
      </div>
      <script src="/js/tiny-slider.min.js"></script>
      <script>
      // https://www.npmjs.com/package/tiny-slider
        const slider = tns({
          container: '#categories-carousel',
          items: 1,
          autoplay: true,
          loop: false,
          nav: false,
          autoplayButtonOutput: false,
          controls: false,
          mouseDrag: true,
          gutter: 10, // space items like margin 10px
          responsive: {
            600: {
              items: 2, // Show 2 items on screens wider than 600px
            },
            1024: {
              items: 3, // Show 3 items on screens wider than 1024px
            },
          },
        });
        console.log("hola");
      
        function prevSlide() {
          slider.goTo('prev');
        }
      
        function nextSlide() {
          slider.goTo('next');
        }
      </script>
    </div>
  `;
}
export default Carousels;
