<template>
  <div
    class="w-full h-3/4 flex flex-col justify-center items-center bg-brand-main">
    <h1 class="text-6xl font-black text-brand-gray">Playground</h1>
    <p class="text-2xl mt-3 font-regular text-brand-gray">
      Este é o Playground, use para testar o widget
    </p>
  </div>

  <div
    class="w-full h-3/4 flex flex-col justify-center items-center bg-brand-gray">
    <h1 class="text-6xl font-black text-brand-graydark">☢️</h1>
  </div>

  <div
    class="w-full h-3/4 flex flex-col justify-center items-center bg-brand-main">
    <h1 class="text-6xl font-black text-brand-graydark">🥸</h1>
  </div>

  <div
    class="w-full h-3/4 flex flex-col justify-center items-center bg-brand-gray">
    <h1 class="text-6xl font-black text-brand-graydark">🎲</h1>
  </div>
  <widget />
</template>

<script setup lang="ts">
import Widget from "./Widget.vue";
</script>
