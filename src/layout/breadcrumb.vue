<script setup lang="ts">
// 导入的文件
import { useRoute } from 'vue-router'
import { onMounted, ref, watch } from 'vue'

// 逻辑部分
const route = useRoute()
const routes: any = ref([])
// 初始化
onMounted(() => {
  getBreadcrumb()
})
// 获取面包屑
const getBreadcrumb = () => {
  let matched = route.matched
  matched = duplicateRemoval(matched)
  routes.value = []
  //如果不是首页
  matched.forEach((item: any) => {
    item.children = []
    if (item.path == '/' || item.meta.title == '') return
    routes.value.push(item)
  })
}
// 去除重复数据
const duplicateRemoval = (arr: any) => {
  const hash: any = {}
  arr = arr.reduce(function (arr: any, current: any) {
    console.log(20, current)
    hash[current.meta.title] ? '' : (hash[current.meta.title] = true && arr.push(current))
    return arr
  }, [])
  return arr
}
//监听路由变化
watch(
  () => route.path,
  () => {
    getBreadcrumb()
  }
)
</script>

<!-- 页面渲染 -->
<template>
  <a-breadcrumb class="breadcrumb-wrap" separator=">" :routes="routes">
    <template #itemRender="itemRender">
      <router-link :to="itemRender.redirect ? itemRender.redirect : itemRender.route.path">
        {{ itemRender.route.meta.title }}
      </router-link>
    </template>
  </a-breadcrumb>
</template>
<style scoped lang="less">
.breadcrumb-wrap {
  display: flex;
  align-items: center;
  padding-left: 16px !important;
  height: 50px;
}
</style>
