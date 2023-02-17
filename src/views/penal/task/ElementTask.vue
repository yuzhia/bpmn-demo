<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  id: String,
  type: String
})

const taskAsync = ref(false)
const witchTaskComponent = ref('')
const installedComponent = ref({})

watch(
  () => props.id,
  () => {
    const bpmnElement = window.bpmnInstances.bpmnElement
    taskAsync.value = bpmnElement?.businessObject?.asyncBefore
  },
  {
    immediate: true
  }
)

watch(
  () => props.type,
  () => {
    witchTaskComponent.value = installedComponent.value[props.type]
  },
  {
    immediate: true
  }
)

const changeTaskAsync = () => {}

const activeName = ref('first')
const formLabelAlign = ref({})
const distribute = ref('1')
const nodeType = ref('')

const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>

<template>
  <div class="panel-tab__content">
    <el-form size="small" label-width="90px" @submit.prevent>
      <el-form-item label="异步延续">
        <el-checkbox
          v-model="taskAsync"
          label="异步"
          @change="changeTaskAsync"
        />
      </el-form-item>
      <!-- <component :is="witchTaskComponent" v-bind="$props" /> -->
      <el-form-item>
        <el-tabs
          v-model="activeName"
          class="demo-tabs"
          tab-position="left"
          @tab-click="handleClick"
        >
          <el-tab-pane label="固定值" name="first">
            <el-form
              :model="formLabelAlign"
              label-width="80px"
              class="flex flex-col gap-2"
            >
              <el-form-item label="分配人员">
                <el-input v-model="formLabelAlign.name" />
              </el-form-item>
              <el-form-item label="候选人员">
                <el-button>添加</el-button>
                <el-input type="hidden" v-model="formLabelAlign.type" />
              </el-form-item>
              <el-form-item label="候选角色">
                <el-button>添加</el-button>
                <el-input type="hidden" v-model="formLabelAlign.type" />
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="身份存储" name="second">
            <el-form
              label-width="80px"
              :model="formLabelAlign"
              class="flex flex-col gap-2"
            >
              <el-form-item label="分配">
                <el-select v-model="distribute">
                  <el-option selected label="分配给单个人" value="1" />
                  <el-option label="候选人员" value="2" />
                  <el-option label="分配给流程发起人" value="3" />
                </el-select>
              </el-form-item>
              <el-form-item label="分配人员">
                <el-button text bg class="w-full">请选择人员</el-button>
              </el-form-item>
              <el-form-item label="候选角色">
                <el-button text bg class="w-full">请选择候选角色</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </el-form-item>
      <el-form-item label="节点类型">
        <div class="flex justify-between">
          <el-select v-model="nodeType" placeholder="Select" class="mr-2">
            <el-option label="普通" value="normal" />
            <el-option label="必审" value="normal" />
            <el-option label="评审" value="normal" />
            <el-option label="协同" value="normal" />
            <el-option label="不神" value="normal" />
            <el-option label="审批中" value="normal" />
          </el-select>
          <div><span>可编辑</span> <el-switch /></div>
        </div>
      </el-form-item>
      <el-form-item label="到期时间">
        <el-input />
      </el-form-item>
      <el-form-item label="优先级">
        <el-input-number :min="1" :max="10" />
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
:deep(.el-form-item .el-form-item__content) {
  margin-left: 0 !important;
}
</style>
