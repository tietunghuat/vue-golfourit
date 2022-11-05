<script setup lang="ts">
import { ref } from 'vue'
import type { MenuOption } from 'naive-ui'
import { menuOptionsData } from '@/util/menu-options'
import HomeHeader from '../components/HomeHeader.vue'
import { NLayout, NLayoutSider, NMenu, NImage } from 'naive-ui'
const collapsed = ref(true)
const menuOptions: MenuOption[] = menuOptionsData
</script>

<template>
  <NLayout has-sider>
    <NLayoutSider
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :width="260"
      :collapsed="collapsed"
      show-trigger="arrow-circle"
      @collapse="collapsed = true"
      @expand="collapsed = false"
      content-style="height:800px"
    >
      <n-image
        width="300"
        height="600"
        :preview-disabled="true"
        src="@/../picture/logo/golfball.png"
      />

      <NMenu
        :collapsed="collapsed"
        :collapsed-width="64"
        :collapsed-icon-size="23"
        :options="menuOptions"
        key-field="KeyName"
        label-field="Name"
        children-field="Children"
      />
    </NLayoutSider>
    <HomeHeader />
  </NLayout>
</template>
<style scoped>
.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
}
.n-breadcrumb-item {
  font-weight: bolder;
}
.n-layout {
  background: rgba(169, 167, 167, 0.2);
  font-weight: bolder;
}
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
