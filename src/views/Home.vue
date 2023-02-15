<script setup>
import { onMounted, ref } from 'vue'
import BpmnModeler from 'bpmn-js/lib/Modeler'
import { xmlStr } from '@/assets/xmlStr'
import DesignerHeader from './designer/index.vue'

import 'bpmn-js/dist/assets/diagram-js.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'

// 翻译
import customTranslate from './config/translate/customTranslate.js'
import translationsCN from './config/translate/zh.js'

//右侧属性栏
import 'bpmn-js-properties-panel/dist/assets/properties-panel.css'

const bpmnModeler = ref(null)
const canvas = ref(null)

// 封装成模块
const TranslateModule = {
  translate: ['value', customTranslate(translationsCN)]
}

const init = () => {
  bpmnModeler.value = new BpmnModeler({
    container: canvas.value,
    // propertiesPanel: {
    //   parent: '#js-properties-panel'
    // },
    additionalModules: [TranslateModule]
  })

  createNewDiagram()
}

const createNewDiagram = async () => {
  try {
    const result = await bpmnModeler.value.importXML(xmlStr)
    const { warnings } = result
    // console.log(warnings)
  } catch (err) {
    console.log(err.message, err.warnings)
  }
}

onMounted(() => {
  init()
})
</script>

<template>
  <div class="flex flex-col">
    <div class="w-full min-h-9 flex items-center">
      <designer-header />
    </div>
    <div class="containers">
      <div class="canvas" ref="canvas"></div>
      <!-- <div id="js-properties-panel" class="panel"></div> -->
    </div>
  </div>
</template>

<style scoped>
.containers {
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
}
.canvas {
  width: 100%;
  height: 100%;
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMTBoNDBNMTAgMHY0ME0wIDIwaDQwTTIwIDB2NDBNMCAzMGg0ME0zMCAwdjQwIiBmaWxsPSJub25lIiBzdHJva2U9IiNlMGUwZTAiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZD0iTTQwIDBIMHY0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTBlMGUwIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+)
    repeat !important;
}

.panel {
  position: absolute;
  right: 0;
  top: 0;
  width: 300px;
}
</style>
