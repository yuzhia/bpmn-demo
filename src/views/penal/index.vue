<script setup>
import { ref } from 'vue'
import ElementBaseInfo from './base/ElementBaseInfo.vue'
import SignalAndMessage from './signal-message/SignalAndMessage.vue'

const props = defineProps({
  width: String,
  idEditDisabled: {
    type: Boolean,
    default: false
  }
})

const activeTab = ref('base')
const elementType = ref('')
const elementBusinessObject = ref({})
</script>

<template>
  <div class="process-panel__container w-120">
    <el-collapse v-model="activeTab">
      <el-collapse-item name="base">
        <template #title>
          <div class="panel-tab__title">
            <el-icon><i-ep-info-filled /></el-icon>常规
          </div>
        </template>
        <element-base-info
          :id-edit-disabled="idEditDisabled"
          :business-object="elementBusinessObject"
          :type="elementType"
        />
      </el-collapse-item>

      <el-collapse-item name="condition" key="message">
        <template #title>
          <div class="panel-tab__title">
            <el-icon><i-ep-comment /></el-icon>消息与信号
          </div>
        </template>
        <signal-and-message />
      </el-collapse-item>
      <el-collapse-item name="other" key="other">
        <template #title>
          <div class="panel-tab__title">
            <el-icon><i-ep-promotion /></el-icon>其他
          </div>
        </template>
        <div class="px-4 py-2">
          <div class="flex">
            <div class="element-property__label">元素文档：</div>
            <div class="flex-1">
              <el-input
                type="textarea"
                size="small"
                resize="vertical"
                :autosize="{ minRows: 2, maxRows: 4 }"
              />
            </div>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<style scoped>
.process-panel__container {
  box-sizing: border-box;
  padding: 0 8px;
  border-left: 1px solid #eeeeee;
  box-shadow: 0 0 8px #cccccc;
  max-height: 100%;
  overflow-y: scroll;
}
.panel-tab__title {
  font-weight: 600;
  padding: 0 8px;
  font-size: 1.1em;
  line-height: 1.2em;
}
</style>
