<script setup>
const { count, increment, decrement } = useCounter();
const double = computed(() => count.value * 2); 
</script>

<template>
  <div class="flex justify-center m-16">
    <div
      class="p-6 flex flex-col items-center border border-gray-400 rounded-lg w-[25%] h-[20vw] shadow-2xl justify-center">
      <div>
        <TheTitle>
          <span class="text-3xl font-semibold  text-pink-800">Contador</span>
        </TheTitle>
      </div>

      <div class="flex justify-center m-5">
        <button v-if="count >= 0 && count < 10" @click="increment"
          class="bg-green-600 border border-green-700 rounded mr-3 p-3 text-white mt-3">
          Incrementar
        </button>

        <button v-if="count > 0" @click="decrement"
          class="bg-red-600 border border-red-700 rounded p-3 text-white mt-3">
          Decrementar
        </button>

        <button @click="count = 0" class="bg-yellow-500 border border-yellow-600 rounded p-3 text-white  ml-3 mt-3">
          Resetear
        </button>
      </div>

      <p class="mt-4 text-lg font-semibold" :class="count == 10 ? 'text-green-600 font-semibold' : ''">Contador: {{
        count
        }}</p>
        
      <div class="mt-5 mb-">
        <TheTitle>
          <span class="text-3xl font-semibold text-purple-800 ">Doble</span>
        </TheTitle>
        <p class="mt-4 text-lg" :class="double >= 10 ? 'text-green-600 font-semibold' : 'font-semibold'">Contador: {{
          double
          }}</p>
      </div>
    </div>
  </div>
</template>