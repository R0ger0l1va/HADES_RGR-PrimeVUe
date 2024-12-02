<script setup>
import {ref} from 'vue'
const text = ref("")
</script>

<template>
  <div>
    <InputText v-model="text"/> 
    <Button label="Save"/>
    
  </div>
</template>


