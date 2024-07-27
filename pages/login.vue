<template>
  <div class="flex items-center justify-center h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
      <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>

      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2"
            >Email</label
          >
          <input
            type="email"
            id="email"
            name="email"
            v-model="email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="block text-gray-700 text-sm font-bold mb-2"
            >Password</label
          >
          <input
            type="password"
            id="password"
            name="password"
            v-model="password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div class="flex items-center justify-center">
          <button
            type="submit"
            class="border-2 rounded-lg px-3 py-2 border-gray-900"
            :class="{'loading':'cursor-not-allowed'}"
            :disabled="loading">
            {{ loading ? 'Cargando' : 'Entrar' }}
          </button>
        </div>
      </form>
      <div
        v-if="message" class='mt-4 p-2 rounded text-center bg-red-100 text-red-700'>
        {{ message.message }}
      </div>
    </div>
  </div>
</template>
<script setup>
const {setUser} = useUser()
const email = ref("");
const password = ref("");
const message = ref("");
const loading = ref(false)

const handleSubmit = async () => {
  try {
    loading.value = true
    const response = await $fetch(
      "https://grexialbornett.com/wp-json/jwt-auth/v1/token",
      {
        method: "POST",
        body: {
          username: email.value,
          password: password.value,
        },
      }
    );
    setUser(response)
    console.log(response)
    await navigateTo({ path: '/dashboard' })
  } catch (error) {
    message.value = error.data;
    loading.value = false
  }
};
</script>
