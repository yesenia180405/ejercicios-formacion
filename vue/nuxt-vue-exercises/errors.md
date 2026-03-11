# Solución de Errores

## Ejercicio 1

```ts
// composables/useCounter.ts
import { ref } from "vue";

export function useCounter() {
  const count = ref(0);

  function increment() {
    count.value++;
  }
  // Linea faltante
  return { count, increment };
}
```

- Se ha añadido la linea del return ya que sin eso la función no estaría devolviendo datos y por ende la función no seria útil

## Ejercicio 2

```ts
<script setup>
import { ref } from "vue";

const items = ref(["Apple", "Banana", "Cherry"]);
</script>
<template>
  <ul>
    // <li v-for="(item, index) in items" :key="index"> → Mala práctica
    <li v-for="item in items" :key="item">
      {{ item }}
    </li>
  </ul>
</template>
```

- Se ha cambiado la forma de recorrer el v-for si bien es funcional, es una mala práctica poner el índice como key

## Ejercicio 3

```vue
<!-- <script> → falta setup-->
<script setup>
const counter = 0;
</script>
<template>
<!-- Es mejor hacer una comparación estricta === -->
  <p v-if="counter == 10">Número, {{ counter }}</p>
</template>
```
- Se ha aumentado el `setup` debido a la estructura del código, ya que sin `setup` se debe declarar todo en secciones
- Además hay que destacar que como tal el código no hace nada ya que no existe ningún increment
- Por último cambiaría la comparación del v-if para hacerla estricta ya que es una buena práctica gracias a que `ts` es tipado