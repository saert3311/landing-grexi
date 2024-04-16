<template>
    <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
            <div class="">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Que haremos en esta conferencia.</h2>
                <p class="mt-4 text-base leading-relaxed text-gray-600">Sanar y reprogramar el origen de los escases en sus vidas para lograr desbloquear la abundancia económica.<br> 
                Esta regresión grupal tiene la misma efectividad que la regresión personal y presencial. Es una inducción terapéutica que te lleva a la mente profunda para instaurar información positiva que te permita el logro de tus objetivos para llevarte al éxito</p>
            </div>

            <div class="relative pl-20 pr-6 sm:pl-6 md:px-0">
                <div class="relative w-full max-w-xs mt-4 mb-10 ml-auto">
                    <NuxtImg class="ml-auto" src="https://grexialbornett.com/wp-content/uploads/2023/09/grexi_254.webp" alt="Grexi Albornett" />

                    <img class="absolute -top-4 -left-12" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/wavey-lines.svg" alt="" />

                    <div class="absolute -bottom-10 -left-16">
                        <div class="bg-yellow-300">
                            <div class="px-8 py-10 bg-primary">
                                <span class="block text-4xl font-bold text-white lg:text-5xl"> 2 - 3 </span>
                                <span class="block mt-2 text-base leading-tight text-white"> Horas de<br />Contenido </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-between">
            <div class="w-full px-4 lg:w-6/12">
                <Steps v-for="step in steps_1" :key="index" :text="step"/>
            </div>
            <div class="w-full px-4 lg:w-6/12">
                <Steps v-for="step in steps_2" :key="index" :text="step"/>
            </div>
        </div>
    </div>
</section>
</template>
<script setup>
import Steps from './steps.vue';

const splitInHalf = (arr) => {
  const midPoint = Math.ceil(arr.length / 2);
  const firstHalf = arr.slice(0, midPoint);
  const secondHalf = arr.slice(midPoint);
  return [firstHalf, secondHalf];
}


const steps_content = [
'Carencia económica',
'Inestabilidad laboral',
'No crecimiento de proyecto',
'Estancamiento de proyectos',
'En los proyectos no concretados o no terminados',
'Escases económica',
'La brecha de nunca llegar a fin de mes con economía estable ni suficiente',
'El sintoma de a veces tengo a veces no',
'No poder comprar las cosas que quiero o necesito',
'NO poder suplir necesidades básicas por falta de economía suficiente',
'No mantenimiento de la abundancia',
'No poder ayudar económicamente a mi familia o a las personas que quiero.', 
'No cumplir metas por escases económica.',
'El dinero va y viene',
'Malgasto el dinero',
'No se invertir el dinero',
'Como veo el dinero',
'Como me veo a mi en la prosperidad'
]

const [ steps_1, steps_2 ] = splitInHalf(steps_content);
</script>