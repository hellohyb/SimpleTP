<template>
  <div class="userinfo">
    <div class="head">
      <div class="picture">
        <span style="color: white; line-height: 50px"></span>
      </div>
      <p style="text-align: center">
        欢迎！<b>{{ username.username }}</b>
      </p>
    </div>
    <br/>
    <button style="background:#409eff;margin-left: 100px;" @click="router.push('/')">返 回</button>
    <button style="background:#f56c6c" @click="logout()">注 销</button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from '@vue/reactivity'
import { useRouter } from 'vue-router'
const router = useRouter()
let username: any = reactive({
  username: localStorage.userName
})
function logout() {
  //清空
  localStorage.clear()
  router.go(0)
}
</script>

<style lang="less" scoped>
.userinfo {
  width: 400px;
  height: 300px;
  border: 1px solid var(--themeColor);
  margin: 150px auto;
  padding-top: 35px;
  border-radius: 20px;
  .head {
    .picture {
      width: 60px;
      height: 60px;
      background: var(--themeColor);
      border-radius: 50%;
      // vertical-align: text-top;
      margin: 10px auto;
      cursor: pointer;
    }
  }
  button {
    width: 80px;
    height: 35px;
    margin-right: 30px;
    font-size: 16px;
    float: left;
    color: white;
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    &:hover {
      filter: saturate(250%);
    }
  }
}
</style>