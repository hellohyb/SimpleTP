<script setup lang="ts">

import LeftBar from './components/LeftBar.vue'

import * as echarts from "echarts";
import { provide } from "vue";
provide("echarts", echarts);

</script>

<template>
    <keep-alive>
      <LeftBar></LeftBar>
    </keep-alive>
    <router-view></router-view>
    
</template>

<style lang="less">
:root{
  --themeColor:rgb(90, 217, 71);
  --leftTopColor:#f9fbfc;
  --rightTopColor:#f7f7f8;
}
@font-face {
  font-family: mFont;
  src: url('./assets/font/number.ttf');
}
*{
  max-width: 1020px;
  max-height: 700px;
  overflow: hidden;
  user-select: none;
  margin:0;
  padding:0;
  list-style: none;
  box-sizing: border-box;
}
// @import './assets/css/styles.less';
</style>
