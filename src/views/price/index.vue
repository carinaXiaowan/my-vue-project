<script setup lang="ts">
import type { UnwrapRef } from 'vue';
import { cloneDeep } from 'lodash-es';
import { data, columns } from './schema';

// 变量声明
const dataSource = ref(data);
const editableData: UnwrapRef<Record<string, any>> = reactive({});
// 函数
const edit = (key: string) => {
  editableData[key] = cloneDeep(dataSource.value.filter(item => key === item.key)[0]);
};
const handleSave = (key: string) => {
  Object.assign(dataSource.value.filter(item => key === item.key)[0], editableData[key]);
  delete editableData[key];
};
const handleCancel = (key: string) => {
  delete editableData[key];
};
</script>
<template>
  <div class="price-wrap">
    <a-table :dataSource="dataSource" :columns="columns" bordered>
      <template #bodyCell="{ column, text, record }">
        <!-- 编辑行 -->
        <template v-if="['name', 'age', 'address'].includes(column.dataIndex)">
          <div>
            <a-input
              v-if="editableData[record.key]"
              v-model:value="editableData[record.key][column.dataIndex]"
              style="margin: -5px 0"
            />
            <template v-else>
              {{ text }}
            </template>
          </div>
        </template>
        <!-- 操作行 -->
        <template v-else-if="column.dataIndex === 'operation'">
          <div class="editable-row-operations">
            <span v-if="editableData[record.key]">
              <a-button html-type="button" type="link" @click="handleSave(record.key)"
                >Save</a-button
              >
              <a-popconfirm title="Sure to cancel?" @confirm="handleCancel(record.key)">
                <a-button html-type="button" type="link">Cancel</a-button>
              </a-popconfirm>
            </span>
            <span v-else>
              <a-button html-type="button" type="link" @click="edit(record.key)">Edit</a-button>
            </span>
          </div>
        </template>
      </template>
    </a-table>
  </div>
</template>
