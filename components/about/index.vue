<template>
    <section class="overflow-hidden p-6 sm:px-20 sm:py-5 bg-white dark:bg-dark">
      <div class="container mx-auto">
        <div class="flex flex-wrap items-center justify-between -mx-4">
          <div class="w-full px-4 lg:w-6/12">
            <div class="flex items-center -mx-3 sm:-mx-4">
              <div class="w-full px-3 sm:px-4 xl:w-1/2">
                <div class="py-3 sm:py-4">
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-1.jpg"
                    alt=""
                    class="w-full rounded-2xl"
                  />
                </div>
                <div class="py-3 sm:py-4">
                  <img
                    src="/images/dirigido_3.webp"
                    alt=""
                    class="w-full rounded-2xl"
                  />
                </div>
              </div>
              <div class="w-full px-3 sm:px-4 xl:w-1/2">
                <div class="relative z-10 my-4">
                  <img
                    src="/images/dirigido_2.webp"
                    alt=""
                    class="w-full rounded-2xl"
                  />
                  <span class="absolute -right-7 -bottom-7 z-[-1]">
                    <DotsSVG />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div class="mt-10 lg:mt-0">
              <span class="block mb-4 text-lg font-semibold text-gold"> Independientemente de su género, edad o profesión. </span>
              <h2 class="mb-5 text-3xl font-bold text-text sm:text-[40px]/[48px]">
                A quienes esta dirigido
              </h2>
              <p class="mb-5 text-base text-body-color dark:text-dark-6">
                Emprendedores, comerciantes, trabajadores, amas de casa, adolescentes que estén trabajando o emprendiendo, empresarios y todo aquel que desee aumentar su poder adquisitivo e ingresos económicos. Hombres y mujeres
              </p>
              <a
                href="javascript:void(0)"
                class="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-gold hover:bg-opacity-90"
              >
                Iniciar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ====== About Section End -->
  </template>
  <script setup>
  import DotsSVG from '~/components/global/svg/DotsSVG.vue'
  </script>