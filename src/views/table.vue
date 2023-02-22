<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { listWorkFlow, addWorkFlow, deleteWorkFlow, updateWorkFlow } from '@/api/workFlow.js'

const router = useRouter()

const tableData = ref([])

const dialogTableVisible = ref(false)

const list = () =>
  listWorkFlow().then(res => {
    // console.log(res)
    tableData.value = res.data
  })

list()

const rules = {
  name: [{ required: true, message: '名称不能为空', trigger: 'blur' }],
  code: [{ required: true, message: '标识不能为空', trigger: 'blur' }],
  system: [{ required: true, message: '系统不能为空', trigger: 'blur' }]
}

// 删除
const deleteClick = id => {
  deleteWorkFlow(id).then(() => {
    ElMessage({
      message: '删除成功',
      type: 'success'
    })
    list()
  })
}

const workFlowId = ref()
const confirmClick = async () => {
  if (title.value == '添加') {
    await addWorkFlow(workFlow.value).then(res => {
      workFlowId.value = res.data.id
    })
  } else {
    await updateWorkFlow(workFlow.value).then(res => {
      workFlowId.value = res.data.id
    })
  }
  router.push(`/bpmn/designer/${workFlowId.value}`)
}

const workFlow = ref({})
const title = ref('添加')

const clickAddButton = () => {
  title.value = '添加'
  workFlow.value = {}
  dialogTableVisible.value = true
}

const clickEditButton = data => {
  title.value = '编辑'
  dialogTableVisible.value = true
  workFlow.value = data
}
</script>

<template>
  <div class="py-5 px-30">
    <el-button class="my-2" type="primary" @click="clickAddButton">添加</el-button>
    <el-table :data="tableData" style="">
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="code" label="KEY" />
      <el-table-column prop="type" label="分类名称" />
      <el-table-column prop="system" label="系统" />
      <el-table-column prop="scope" label="应用范围" />
      <el-table-column prop="updateTime" label="更新时间" />
      <el-table-column prop="status" label="状态">
        <template #default="{ row }">
          <el-tag v-if="row.status == 0" class="ml-2" type="info">草稿</el-tag>
          <el-tag v-else-if="row.status == 1" class="ml-2" type="warning">待发布</el-tag>
          <el-tag v-else-if="row.status == 2" class="ml-2" type="success">启用</el-tag>
          <el-tag v-else class="ml-2" type="danger">停用</el-tag>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template #default="{ row }">
          <div class="flex gap-2">
            <el-tooltip effect="dark" content="流程图预览" placement="top">
              <i-ep-view class="w-5 h-5 cursor-pointer" />
            </el-tooltip>
            <el-tooltip effect="dark" content="发布" placement="top">
              <i-ep-video-play class="w-5 h-5 cursor-pointer" @click="row.status = 2" />
            </el-tooltip>
            <el-tooltip effect="dark" content="停用" placement="top">
              <i-ep-circle-close class="w-5 h-5 cursor-pointer" @click="row.status = 3" />
            </el-tooltip>
            <el-tooltip effect="dark" content="修改" placement="top">
              <i-ep-edit class="w-5 h-5 cursor-pointer" @click="clickEditButton(row)" />
            </el-tooltip>
            <el-tooltip effect="dark" content="删除" placement="top">
              <div>
                <el-popconfirm title="是否确认删除?" @confirm="deleteClick(row.id)">
                  <template #reference>
                    <i-ep-delete class="w-5 h-5 cursor-pointer color-red outline-none" />
                  </template>
                </el-popconfirm>
              </div>
            </el-tooltip>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <!-- 修改弹框 -->
    <el-dialog v-model="dialogTableVisible" :title="title" width="40%">
      <el-form label-position="right" label-width="100px" :model="workFlow" :rules="rules" style="max-width: 460px">
        <el-form-item label="名称" prop="name" required>
          <el-input v-model="workFlow.name" placeholder="请输入" clearable />
        </el-form-item>
        <el-form-item label="标识" prop="code" required>
          <el-input v-model="workFlow.code" placeholder="请输入" clearable />
        </el-form-item>
        <el-form-item label="所属系统" prop="system" required>
          <el-input v-model="workFlow.system" placeholder="请输入" clearable />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogTableVisible = false">取消</el-button>
          <el-button type="primary" @click="confirmClick"> 确认 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
