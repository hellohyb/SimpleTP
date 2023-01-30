<template>
    <div class="task-card">
      <div class="task-list">
        <p class="title_name">
          今日待办
        </p>
        <ul>
          <li v-for="item,index in taskOk" ref="li">
                <div class="task-message" @click="update(item.task_message,item.task_id)">
                  {{ item.task_message }}
                </div>
                <div class="operation">
                    <svg title="修改" @click="update(item.task_message,item.task_id)" t="1674368879069" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4903" width="35" height="35"><path d="M300.8 723.2c0 12.8 0 19.2 6.4 25.6 6.4 6.4 12.8 6.4 19.2 6.4h6.4l172.8-44.8 448-448c19.2-19.2 32-51.2 0-83.2l-64-64c-32-32-64-32-96 6.4l-448 435.2-44.8 166.4zM825.6 160c6.4-6.4 19.2-6.4 25.6 0l44.8 44.8c6.4 6.4 6.4 19.2 0 25.6l-44.8 44.8-70.4-70.4 44.8-44.8zM736 249.6l70.4 70.4-313.6 313.6-70.4-70.4L736 249.6zM384 608l64 64-83.2 19.2L384 608z m544-204.8c-25.6 0-38.4 12.8-38.4 25.6v409.6c0 19.2-19.2 38.4-38.4 38.4H166.4c-19.2 0-38.4-19.2-38.4-38.4V179.2c0-19.2 19.2-38.4 38.4-38.4h448c12.8 0 25.6-12.8 25.6-32s-12.8-32-32-32H160c-51.2 0-96 44.8-96 96v678.4c0 51.2 44.8 96 96 96h704c51.2 0 96-44.8 96-96v-416c0-19.2-12.8-32-32-32z" fill="#5ed56b" p-id="4904"></path></svg>
                    <svg title="删除" @click="deletes(index, item.task_id)" t="1674368951899" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5917" width="35" height="35"><path d="M481.882353 373.458824h60.235294v421.647058h-60.235294zM662.588235 373.458824h60.235294v421.647058h-60.235294zM301.176471 373.458824h60.235294v421.647058h-60.235294z" fill="#ff6347" p-id="5918"></path><path d="M993.882353 252.988235h-90.352941v-60.235294c0-36.141176-24.094118-60.235294-60.235294-60.235294h-180.705883v-30.117647c0-36.141176-24.094118-60.235294-60.235294-60.235294h-180.705882c-36.141176 0-60.235294 24.094118-60.235294 60.235294v30.117647h-180.705883c-36.141176 0-60.235294 24.094118-60.235294 60.235294v60.235294h-90.352941v60.235294h120.470588v542.117647c0 66.258824 54.211765 120.470588 120.470589 120.470589h481.882352c66.258824 0 120.470588-54.211765 120.470589-120.470589v-542.117647h120.470588v-60.235294z m-572.235294-144.564706h180.705882v30.117647h-180.705882v-30.117647z m-240.941177 84.329412h662.588236v60.235294h-662.588236v-60.235294z m632.470589 662.588235c0 30.117647-24.094118 60.235294-60.235295 60.235295h-481.882352c-30.117647 0-60.235294-24.094118-60.235295-60.235295v-542.117647h602.352942v542.117647z" fill="#ff6347" p-id="5919"></path></svg>
                    <svg title="完成" t="1674378081600" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19866" width="35" height="35"><path d="M896 256c17.1 0 33.2 6.7 45.3 18.7 12.1 12.1 18.7 28.2 18.7 45.3 0 17.1-6.7 33.2-18.7 45.3L454.1 852.4c-12.1 12.1-28.2 18.7-45.3 18.7s-33.2-6.7-45.3-18.7L82.7 571.5C70.7 559.4 64 543.3 64 526.2s6.7-33.2 18.7-45.3C94.8 468.9 110.9 462.2 128 462.2c17.1 0 33.2 6.7 45.3 18.7l190.4 190.4 45.3 45.3 45.3-45.3 396.6-396.6C862.8 262.6 878.9 256 896 256M896 192c-32.8 0-65.5 12.5-90.5 37.5L408.9 626.1 218.5 435.7C193.5 410.7 160.8 398.2 128 398.2s-65.5 12.5-90.5 37.5c-50 50-50 131 0 181l280.9 280.9c25 25 57.8 37.5 90.5 37.5 32.8 0 65.5-12.5 90.5-37.5l487.1-487.1c50-50 50-131 0-181C961.5 204.5 928.8 192 896 192L896 192z" p-id="19867" fill="#5ed56b"></path></svg>
                </div>
          </li>
        </ul>
      </div>
      <div class="addTask" @click="addTask">+</div>
    </div>
    <transition>
        <Show
          v-if="displayCard.state" 
          @click.self="displayCard.state=false"
          >
          <TaskMessage 
            :task_id="task_id"
            @ok="getState"
          >
            {{ thisMessage.message }}
          </TaskMessage>
        </Show>
    </transition>
   
  </template>
  
<script lang="ts" setup>
import axios from 'axios';
import {onMounted, reactive, ref } from 'vue'
import Show from '../Show.vue'
import TaskMessage from './ShowTask/TaskMessage.vue'

import { useRouter } from 'vue-router'
const router = useRouter()

interface taskFormat{
  user_id:number,
  task_id:number,
  task_message:string,
  date:string,
  state:number
}

let task_id:any = ref('')

let displayCard:any = reactive({
  state:false
})

let thisMessage:any = reactive({
  message:''
})

let update:any = function(message:string,task_ids:number):void{
    displayCard.state = true;
    thisMessage.message = message;
    task_id = task_ids;
}

const li:any = ref(null)

//点击保存关闭
const getState = (state:number):number => {
  displayCard.state = false;
  // console.log(state)
  router.go(0)
  return state
}

// 添加任务
const addTask = function():void{
  task_id = 0
  displayCard.state = true;
  // console.log(task_id)
}

let taskOk:taskFormat[] = reactive([
  
])
let taskNo:taskFormat[] = reactive([
  
  ])
if(localStorage.getItem('user_id') === null){
      // console.log('未登录')
      // task.length = 0;
      taskOk = []
}
// task = []
// 获取任务
const getTask = async function():Promise<void> {
      
      await axios.post('http://localhost:3000/task/getTask',{user_id:localStorage.getItem('user_id')})
      .then((res) => {
        for(let i = 0; i < res.data.result.length; i++){
          if(res.data.result[i].state == 1){
            taskOk.push(res.data.result[i])
          }else{
            taskNo.push(res.data.result[i])
          }
          // console.log(task)
        }
      })
}

// 删除任务
const deletes:any = function(index:number, task_id:number):void{
  taskOk.splice(index,1)
  axios.get(`http://localhost:3000/task/delete?id=${task_id}`)
      .then((res) => {
        console.log(res)
      })
}


onMounted(() => {
  // task = reactive([])
  getTask()
})
</script>
<script lang="ts">
export default{
  name:'Task'
}
</script>
<style lang="less" scoped>
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
/* 离开和进入过程中的样式 */
.v-enter-active,.v-leave-active{
  /* 添加过渡动画 */
  transition: opacity 0.5s ease;
}
/* 进入之后和离开之前的样式 */
.v-enter-to,
.v-leave-from {
  opacity: 1;
}
  .task-card{
    width: 500px;
    height: 350px;
    float: left;
    margin-right: 5px;
    box-sizing: border-box;
    background-color: var(--leftTopColor);
    border-radius: 20px;
    position: relative;
    .task-list{
      width:100%;
      .title_name{
        padding-left:30px;
        font-size:large;
      }
      ul{
        width:100%;
        height: 300px;
        list-style: none;
        overflow-y: scroll;
        overflow-x: hidden;
        
        // 设置空状态
        &:empty{
          display: flex;
          background-image: url('../../assets/images/loding.svg');
          background-repeat: no-repeat;
          background-size: 150px 150px;
          background-position: center;
          justify-content: center;
          align-items: center;
          &::after{
            margin-top: 150px;
            font-weight: bold;
            content: "暂无任务";
          }
        }
        // 隐藏滚动条
        &::-webkit-scrollbar {
          display: none;
        }
        li{
          width:90%;
          height: 70px;
          margin:10px auto;
          border-radius: 10px;
          display: flex;
          box-sizing: border-box;
          transition: width .3s ease;
          &:nth-child(odd){
            background: rgb(225, 241, 170);
            &:hover{
              box-shadow: 0 0 10px rgb(245, 207, 102);
              transform: translate(2px, 2px) scale(1.02, 1.02) rotate(0deg);
            }
          }
          &:nth-child(even){
            background: rgb(187, 248, 217);
            &:hover{
              box-shadow: 0 0 10px rgb(119, 245, 203);
              transform: translate(2px, 2px) scale(1.02, 1.02) rotate(0deg);
            }
          }          
          &:hover .operation{
            // opacity: 1;
            width:30%;
          }
          &:hover .task-message{
            width: 70%;
            cursor: pointer;
          }
          .task-message{
            width: 100%;
            height: 100%;
            padding-top: 10px;
            background: transparent;
            border: 0;
            outline: none;
            box-sizing: border-box;
            text-indent: 1rem;
            font-size: 15px;
            padding-left: 4px;
            // overflow: hidden;
            // 超出部分省略
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            // 英文自动换行
            word-break:break-all;
            word-wrap:break-word;
            transition: width .3s ease;
        
          }
          .operation{
            width: 0;
            height: 100%;
            box-sizing: border;
            // background: teal;
            display: flex;
            transition: width .3s ease;
            svg{
              width:33%;
              box-sizing: border-box;
              margin-top: 20px;
              &:hover{
                filter: contrast(150%);
                cursor: pointer;
              }
            }
          }
        }
      }
    }
    // 添加任务按钮
    .addTask{
          width: 40px;
          height: 40px;
          background:var(--themeColor);
          border-radius: 50%;
          position: absolute;
          font-size: 25px;
          color: white;
          text-align: center;
          bottom: 10px;
          right:10px;
          cursor: pointer;
          &:hover{
            filter: contrast(2);
          }
          }
  }
  
  </style>