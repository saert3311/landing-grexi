<template>
  <div
    class="border-blue-600 rounded-2xl border divide-y divide-gray-200 max-w-sm mx-auto mt-5 md:mt-20 relative"
    style="box-shadow: rgba(45, 50, 130, 0.15) 0px 12px 16px -4px, rgba(45, 50, 130, 0.15) 0px 4px 6px -2px;">
    <Transition>
      <loading v-if="is_loading"/>
    </Transition>
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
              @focus="registerPhoneHasFocus = true"
              @blur="registerPhoneHasFocus = false"
            />
      </div>
      <p class="text-xs mt-1" v-if="registerPhoneHasFocus">No olvides incluir el codigo de tu pais, solo numeros.</p>
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
      <div class="flex justify-center">
      <NuxtTurnstile v-model="formData.token" class="mt-3" theme="light" ref="turnstile" />
      </div>
      <message type="error" class="mt-2" v-if="has_error">
        {{ error_message }}
      </message>
      <div
        class="flex justify-center w-full py-3 mt-4"
      >
        <button class="block bg-transparent text-brown px-6 py-3 rounded-lg border-2 border-brown" 
        @click="do_submit">
          REGISTRARME EN LA CONFERENCIA
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useVuelidate } from '@vuelidate/core';
import { required, email, helpers } from '@vuelidate/validators';
import Multiselect from 'vue-multiselect';
import loading from './loading.vue';
import message from '../global/message.vue';

const is_loading = ref(false);
const has_error = ref(false);
const error_message = ref('')
const countries_data = await useFetch('/api/countries')
const turnstile = ref()
const registerPhoneHasFocus = ref(false)

const formData = reactive({
  register_email: "",
  register_name: "",
  register_phone: "",
  register_country: "",
  token: "",
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
    },
    register_country: {
      required: helpers.withMessage('Elige un pais', required),
    },
  }
})

const v$ = useVuelidate(rules, formData);

const do_submit = async () => {
  has_error.value = "";
  v$.value.$validate();
  if (v$.value.$invalid) {
    return;
  }
  await submitData();
};

const submitData = async () => {
  is_loading.value = true;
  try {
  const response = await $fetch('/api/add_contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({...formData, list_id: 12}),
  });
    await navigateTo({ path: '/thank-you' })
} catch (error) {
  console.log(error.data)
  has_error.value = true;
  error_message.value = error.data.statusMessage;
} finally {
  turnstile.value?.reset() // Reset the turnstile if there is an error
  is_loading.value = false;
}
};

</script>

<style src="node_modules/vue-multiselect/dist/vue-multiselect.css"></style>

<style>
.multiselect__content-wrapper {
  overflow-x: clip;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>