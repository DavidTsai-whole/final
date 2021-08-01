<template>
  <router-view/>
</template>

<script>
import emitter from '@/methods/mitt'
import { provide } from '@vue/runtime-core'
export default {

  setup () {
    provide('mitt', emitter)
  }
  /* provide () {
    return {
      emitter
    }
  } */
}
</script>

<style lang="scss">
@import '@/assets/reset';
</style>
