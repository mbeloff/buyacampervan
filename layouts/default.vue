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

<style lang="postcss"></style>
