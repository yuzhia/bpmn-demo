<script setup>
import { ref } from 'vue'

import 'bpmn-js/dist/assets/diagram-js.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'

import Designer from './views/designer/index.vue'
import MyPropertiesPanel from './views/penal/index.vue'

const aModeler = ref(null)

const initModeler = modeler => {
  setTimeout(() => {
    aModeler.value = modeler
    const canvas = modeler.get('canvas')
    const rootElement = canvas.getRootElement()
    console.log('Process Id:', rootElement.id)
    console.log('Process Name:', rootElement.businessObject.name)
  }, 10)
}
</script>

<template>
  <div class="p-2 bg-pink"></div>
  <designer @init-finished="initModeler" />
  <my-properties-panel :bpmn-modeler="aModeler" />
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
