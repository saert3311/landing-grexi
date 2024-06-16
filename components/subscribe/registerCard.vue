<template>
  <div
    class="border-blue-600 rounded-2xl border divide-y divide-gray-200 max-w-sm mx-auto mt-5 md:mt-20"
    style="
      box-shadow: rgba(45, 50, 130, 0.15) 0px 12px 16px -4px,
        rgba(45, 50, 130, 0.15) 0px 4px 6px -2px;
    "
  >
    <div class="p-6">
      <div class="flex justify-center">
        <h2 class="text-lg font-semibold text-gray-600">Registrate en la conferencia</h2>
      </div>
      <div
            class="bg-white px-6 py-3 flex space-x-3 items-center rounded-lg z-40 mt-3"
          >
            <svg
              width="21"
              height="18"
              viewBox="0 0 21 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6L9.4 10.05C9.75556 10.3167 10.2444 10.3167 10.6 10.05L16 6"
                stroke="#39425D"
                stroke-linecap="round"
              />
              <rect
                x="0.5"
                y="0.5"
                width="20"
                height="17"
                rx="4.5"
                stroke="#39425D"
              />
            </svg>
            <input
              type="text"
              placeholder="Tu correo"
              class="bg-transparent border-0 outline-none w-full"
              v-model="register_email"
            />
          </div>
      <a
        href="https://grexialbornett.com/finalizar-compra/?add-to-cart=4741"
        target="_blank"
        class="flex justify-center w-full py-3 mt-4"
      >
        <button class="block bg-gold text-white px-6 py-3 rounded-lg z-20">
          QUIERO MI ENTRADA
        </button>
      </a>
    </div>
  </div>
</template>
<script setup>
const register_email = ref("");
const register_fullname = ref("");
const register_phone = ref("");
const register_country = ref("");

</script>
