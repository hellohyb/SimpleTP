<template>
  <div class="task-message">
    <div class="message" ref="task_message" contenteditable>
      <slot></slot>
    </div>

    <div class="save">
      <button @click="save()">保存</button>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import {onMounted, ref } from 'vue'

const props = defineProps({
  task_id: {}
})
const task_message = ref<any>(null)
const emit = defineEmits(['ok'])
const dateFormat = function(time:number):string | number{
      if(time < 10){
        return '0' + time
      }
      return time
}
const getDate = function():string {
  const date = new Date()
  let year = date.getFullYear()
  let month = dateFormat(date.getMonth() + 1)
  let day = dateFormat(date.getDate())
  return `${year}-${month}-${day}`
}
function save(){
  // task_id为0，则为添加任务，否则为更新任务
  if(props.task_id == 0 && task_message.value.textContent != ''){
    axios.post('http://localhost:3000/task/addTask',
      {user_id:localStorage.getItem('user_id'),task_message:task_message.value.textContent,task_id:props.task_id, date:getDate()})
      .then((res) => {
      emit('ok',res.data.state)
    })
  }else{
    axios.post('http://localhost:3000/task/edit',
      {task_message:task_message.value.textContent,task_id:props.task_id})
      .then((res) => {
      emit('ok',res.data.state)
    })
  }
  
}

onMounted(() => {
  
})
</script>

<style scoped lang="less">
.task-message{
  width:100%;
  height: 100%;
  box-sizing: border-box;
  word-break:break-all;
  word-wrap:break-word;
  background: #fff;

  .message{
    width:100%;
    height: 80%;
    border-radius: 5px;
    padding-left: 10px;
    background-size: 1px 40px;
    background-image:repeating-linear-gradient(#fff,#fff 38px,gray 39px);
    font-size: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    outline: none;
    border: none;
    font-weight: 500;
    letter-spacing: 2px;
    line-height: 40px;
    padding:0 10px;
  }
  .save{
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    
    button{
      width: 200px;
      height: 50%;
      outline: none;
      border: none;
      font-size: 20px;
      color:#fff;
      border-radius: 10px;
      background: var(--themeColor);
      cursor: pointer;
      box-shadow: 0 3px 12px var(--themeColor);
      &:hover{
        filter: contrast(1.2);
      }
    }
  }
}

</style>