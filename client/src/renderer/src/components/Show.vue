<template>
  <div class="parent">
    <div class="show">
      <slot></slot>
    </div>
  </div>
  
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.parent{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(128, 128, 128,.4);
}
.show{
  width: 700px;
  height: 450px;
  box-sizing: border-box;
  margin:8% auto;
  background:rgb(238, 237, 237);
  border-radius: 20px;
  overflow: hidden;
}

</style>