<script setup>
import { ref } from "vue";
const count = ref(0);
</script>

<template>
  <div class="flex justify-center m-5">
    <div class="p-6 flex flex-col items-center border border-gray-400 max-w-sm">
      <div>
        <TheTitle>
          <span class="text-2xl font-semibold">Contador</span>
        </TheTitle>
      </div>

      <div class="flex justify-center">
        <button v-if="count >= 0 && count < 10" @click="count++" 
          class="bg-green-600 border border-green-700 rounded mr-3 p-1 text-white mt-3">
          Incrementar
        </button>

        <button v-if="count>0" @click="count--"  class="bg-red-600 border border-red-700 rounded p-1 text-white mt-3">
          Decrementar
        </button>

        <button  @click="count=0"  class="bg-yellow-500 border border-yellow-600 rounded p-1 text-white  ml-3 mt-3">
          Resetear
        </button>
      </div>

      <p class="mt-4">Contador: {{ count }}</p>
    </div>
  </div>
</template>