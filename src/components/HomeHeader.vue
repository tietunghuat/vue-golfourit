<script setup lang="ts">
import {
  NBreadcrumbItem,
  NCard,
  NSpace,
  NLayoutHeader,
  NBreadcrumb,
  NIcon,
} from 'naive-ui'
import { CashOutline } from '@vicons/ionicons5'
import HomeContent from '../components/HomeContent.vue'
</script>

<template>
  <NLayoutHeader>
    <NBreadcrumb separator="-">
      <NBreadcrumbItem>
        <NIcon :component="CashOutline" size="22"></NIcon>
        球場管理</NBreadcrumbItem
      >
      <NBreadcrumbItem>
        <NIcon></NIcon>
        球車管理</NBreadcrumbItem
      >
      <NBreadcrumbItem>
        <NIcon></NIcon>
        球弟管理</NBreadcrumbItem
      >
    </NBreadcrumb>
    <NSpace vertical class="label">
      <NCard>球車管理</NCard>
      <HomeContent />
    </NSpace>
  </NLayoutHeader>
</template>

<style scoped>
.n-layout-header {
  background: rgba(246, 245, 245, 0.2);
  padding: 24px;
}
.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
}
.n-breadcrumb-item,
.n-breadcrumb,
.n-card {
  font-weight: bolder;
}
.n-Layout-sider {
  background: rgba(169, 167, 167, 0.2);
  font-weight: bolder;
}
</style>
