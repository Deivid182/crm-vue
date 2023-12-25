<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="fixed top-0 w-full px-8 sm:px-16 py-4 z-20 bg-slate-900">
    <nav class="max-w-[1440px] mx-auto">
      <h1 class="text-4xl font-extrabold text-white">
        <RouterLink to="/">CRM Vue</RouterLink>
      </h1>
    </nav>
  </header>

  <main class="w-full sm:px-16 px-8 pt-24">
    <div class="max-w-[1440px] mx-auto">
      <RouterView />
    </div>
  </main>

</template>
