<script setup lang="ts">
import {
  NCard,
  NInput,
  NIcon,
  NUpload,
  NButton,
  NDataTable,
  NPagination,
} from 'naive-ui'
import { ref } from 'vue'
// import type { ListItem } from '@/types/List'
import { Search as Magnificer } from '@vicons/ionicons5'
import { guestdata } from '@/util/content-info'

const page = ref(2)
const search = ref('')

const createColumns = () => {
  return [
    {
      title: '編號',
      key: 'ID',
    },
    {
      title: '名稱',
      key: 'name',
    },
    {
      title: '裝置',
      key: 'equipment',
    },
  ]
}
const data = guestdata
const columns = createColumns()
</script>

<template>
  <div>
    <NCard size="huge">
      <div style="display: inline-flex" class="button">
        <NUpload
          action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
          :headers="{
            'naive-info': 'hello!',
          }"
          :data="{
            'naive-data': 'cool! naive!',
          }"
        >
          <NButton strong secondary type="error">+ 匯入資料</NButton>
        </NUpload>
        <NButton strong secondary type="error">匯出資料</NButton>
      </div>
      <NInput
        round
        placeholder="點此搜索"
        autosize
        style="min-width: 20%"
        size="small"
        type="text"
        :maxlength="18"
        v-model:value="search"
      >
        <template #suffix>
          <NButton quaternary><NIcon :component="Magnificer" /> </NButton>
        </template>
      </NInput>

      <NDataTable :columns="columns" :data="data"> </NDataTable>

      <NPagination
        v-model:page="page"
        :page-count="50"
        simple
        show-size-picker
        :page-sizes="[10, 20, 30, 40, 50]"
      />
    </NCard>
  </div>
</template>

<style scoped>
.n-card {
  background: rgb(252, 254, 255);
  margin-top: 15px;
  border-radius: 10px;
  color: black;
  font-weight: bolder;
  display: inline-block;
}
.n-button {
  margin: 0 7px 0 0;
}
.n-input {
  margin-left: 60%;
}
.n-pagination {
  position: sticky;
  margin-top: 30%;
  margin-left: 85%;
}
</style>
