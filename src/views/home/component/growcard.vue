<script setup lang="ts">
import { growCardList } from '../schema';
</script>
  
<template>
  <div class="flex grow-card-wrap">
    <template v-for="(item, index) in growCardList" :key="item.title">
      <a-card size="small" :title="item.title" class="w-percent-25" :class="[index + 1 < 4 && 'mr16']" :canExpan="false">
        <template #extra>
          <a-tag :color="item.color">{{ item.action }}</a-tag>
        </template>
        <div class="flex justify-between pad16">
          <CountTo prefix="$" :startVal="1" :endVal="item.value" class="text-18 font-weight" />
          <svg-icon :iconName="item.icon" className='icon-size' :size="40" />
        </div>
        <div class="flex justify-between pad8 pad-l-r-16">
          <span>总{{ item.title }}</span>
          <CountTo prefix="$" :startVal="1" :endVal="item.total" />
        </div>
      </a-card>
    </template>
  </div>

</template>

<style lang="less" scoped>
.grow-card-wrap {
  .icon-size {
    width: @base-px * 5;
    height: @base-px * 5;
  }
}
</style>
  