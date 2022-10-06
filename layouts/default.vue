<template>
  <div class="min-h-screen w-full flex flex-col overflow-hidden">
    <TheHeader />
    <div class="flex-1 grid relative" id="main-content">
      <slot />
    </div>
    <TheFooter />
  </div>
</template>

<script setup></script>

<style lang="postcss">
html {
  scroll-behavior: smooth;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.25s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: scale(0.99);
}
</style>
