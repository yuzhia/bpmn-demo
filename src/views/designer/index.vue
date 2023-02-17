<script setup>
import { ref } from 'vue'

import 'bpmn-js/dist/assets/diagram-js.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'

import Designer from './header.vue'
import MyPropertiesPanel from '../penal/index.vue'

const aModeler = ref(null)

const initModeler = modeler => {
  setTimeout(() => {
    aModeler.value = modeler
    const canvas = modeler.get('canvas')
    const rootElement = canvas.getRootElement()
  }, 10)
}
</script>

<template>
  <div class="design">
    <div class="p-2 bg-pink"></div>
    <designer @init-finished="initModeler" />
    <my-properties-panel :bpmn-modeler="aModeler" />
  </div>
</template>

<style>
.design {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 200px auto max-content;
}
</style>
