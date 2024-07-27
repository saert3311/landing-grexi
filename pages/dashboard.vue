<template>
<div class="min-h-screen bg-gray-100 p-8">
    <div class="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <span>Hola {{ userData.user_display_name }}</span>
      <h1 class="text-3xl font-bold mb-6 text-center">Lista de Cursos</h1>
      <div class="overflow-x-auto flex justify-center">
        <table class="bg-white">
          <thead>
            <tr>
              <th class="py-2 px-4 border-b">ID</th>
              <th class="py-2 px-4 border-b">Nombre</th>
              <th class="py-2 px-4 border-b">Status</th>
              <th class="py-2 px-4 border-b">Actions</th>
              <th class="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in data" :key="item.id">
              <td class="py-2 px-4 border-b">{{ item?.billing?.first_name }}</td>
              <td class="py-2 px-4 border-b">{{ item.email }}</td>
              <td class="py-2 px-4 border-b">{{ item.role }}</td>
              <td class="py-2 px-4 border-b">{{ item.status }}</td>
              <td class="py-2 px-4 border-b">
                <button class="border-2 rounded-lg px-3 py-2 border-gray-900">Ver</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  requiresAuth: true
})
const {userData} = useUser()
const {data, status, error, refresh} = await useFetch('https://grexialbornett.com/wp-json/wc/v3/orders', {
  method: 'POST',
  query: {product:5316},
  headers: {
    Authorization: `Bearer ${userData.value.token}`
  }
})
console.log(data)

</script>