<script setup>
import TheWelcome from "@/components/TheWelcome.vue";

let message = $ref("Hello world")
</script>

<template>
  <main>
    <TheWelcome />
    
    <p>{{ message }}</p>
    <input type="text" v-model="message"/>

  </main>
</template>
