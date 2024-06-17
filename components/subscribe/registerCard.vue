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
      <p class="mt-0.5 text-sm text-gray-500 text-center my-1">Completa la informacion requerida</p>
      <div class="bg-white px-6 py-3 flex space-x-3 items-center rounded-lg z-40 mt-3"
      :class="{'error-shadow': v$.register_name.$error}"
      >
          <Icon name="streamline:user-circle-single" />
            <input
              type="text"
              placeholder="Tu Nombre"
              class="bg-transparent border-0 outline-none w-full"
              v-model="formData.register_name"
            />
      </div>
      <p class="text-xs mt-2 text-red" v-for="error in v$.register_name.$errors" v-if="v$.register_name.$error">
        {{ error.$message }}
      </p>
      <div class="bg-white px-6 py-3 flex space-x-3 items-center rounded-lg z-40 mt-3"
      :class="{'error-shadow': v$.register_email.$error}">
          <Icon name="streamline:mail-send-envelope" />
            <input
              type="email"
              placeholder="Tu correo"
              class="bg-transparent border-0 outline-none w-full"
              v-model="formData.register_email"
            />
      </div>
      <p class="text-xs mt-2 text-red" v-for="error in v$.register_email.$errors" v-if="v$.register_email.$error">
        {{ error.$message }}
      </p>
      <div class="bg-white px-6 py-3 flex space-x-3 items-center rounded-lg z-40 mt-3"
      :class="{'error-shadow': v$.register_phone.$error}">
          <Icon name="streamline:phone" />
            <input
              type="email"
              placeholder="Tu telefono"
              class="bg-transparent border-0 outline-none w-full"
              v-model="formData.register_phone"
            />
      </div>
      <p class="text-xs mt-2 text-red" v-for="error in v$.register_phone.$errors" v-if="v$.register_phone.$error">
        {{ error.$message }}
      </p>
      <div class="bg-white px-6 py-3 flex space-x-3 items-center rounded-lg z-40 mt-3"
      :class="{'error-shadow': v$.register_country.$error}">
          <Icon name="streamline:earth-1" />
            <Multiselect
              v-model="formData.register_country"
              :options="countries_data.data.value.countries"
              :multiple="false"
              placeholder="Selecciona tu país"
              label="es_name"
              track-by="es_name"
              :showLabels="false"
            />
      </div>
      <p class="text-xs mt-2 text-red" v-for="error in v$.register_country.$errors" v-if="v$.register_country.$error">
        {{ error.$message }}
      </p>
      <div
        class="flex justify-center w-full py-3 mt-4"
      >
        <button class="block bg-transparent text-brown px-6 py-3 rounded-lg border-2 border-brown" 
        @click="submitForm">
          REGISTRARME EN LA CONFERENCIA
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useVuelidate } from '@vuelidate/core';
import { required, email, helpers, numeric } from '@vuelidate/validators';
import Multiselect from 'vue-multiselect';

const countries_data = await useFetch('/api/countries')

const formData = reactive({
  register_email: "",
  register_name: "",
  register_phone: "",
  register_country: "",
});

const rules = computed(() => {
  return {
    register_email: {
      required: helpers.withMessage('El correo es requerido', required),
      email: helpers.withMessage('El correo no es valido', email),
    },
    register_name: {
      required: helpers.withMessage('El nombre es requerido', required),
    },
    register_phone: {
      required: helpers.withMessage('El telefono es requerido', required),
      numeric: helpers.withMessage('Solo numeros de telefono', numeric),
    },
    register_country: {
      required: helpers.withMessage('Elige un pais', required),
    },
  }
})

const v$ = useVuelidate(rules, formData);

const submitForm = () => {
  v$.value.$validate();
  if (v$.value.$invalid) {
    return;
  }
};

</script>

<style src="node_modules/vue-multiselect/dist/vue-multiselect.css"></style>

<style>
.multiselect__content-wrapper {
  overflow-x: clip;
}
</style>