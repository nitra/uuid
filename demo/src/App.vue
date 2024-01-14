<template>
  <div>uuid: {{ uuid }}</div>
</template>

<script setup>
import { uuidv7, getDate } from '@nitra/uuid'

const uuid = uuidv7()

console.log(getDate(uuid))
</script>
