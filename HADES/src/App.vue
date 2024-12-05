<script setup>
import {ref} from 'vue'
const text = ref("")
function toogleDarkMode(){
  document.documentElement.classList.toggle('my-app-dark');
}
</script>

<template>
  <div class="flex flex-wrap gap-6 card">
    <InputText v-model="text" />
      <Button >HELLO</Button>
    <Chip  label="LOVE"  />
  <Chip label="YOU"  />
  <Button label="Toogle Dark Mode" @click="toogleDarkMode" />

  </div>

  <div class="flex flex-wrap gap-2 card">
        <Chip label="Action" />
        <Chip label="Comedy" />
        <Chip label="Mystery" />
        <Chip label="Thriller" removable />
    </div>

  
  
  


</template>


