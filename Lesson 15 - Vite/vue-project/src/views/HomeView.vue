<script setup>
import TheWelcome from "@/components/TheWelcome.vue";

let message = $ref("Hello world")

let doSomething = () => {
  alert("doing it now");
};
</script>

<template>
  <main>
    <TheWelcome />
    
    <p>{{ message }}</p>
    <input type="text" v-model="message"/>
    <button @click="doSomething">Click Me</button>
  </main>
</template>
