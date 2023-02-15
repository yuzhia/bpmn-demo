<script setup>
// import { ref } from 'vue'

import 'bpmn-js/dist/assets/diagram-js.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'

import Designer from './views/designer/index.vue'
import MyPropertiesPanel from './views/penal/index.vue'
</script>

<template>
  <div class="p-2 bg-pink"></div>
  <designer />
  <my-properties-panel />
</template>

<style>
body,
html {
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 200px auto max-content;
}
</style>
