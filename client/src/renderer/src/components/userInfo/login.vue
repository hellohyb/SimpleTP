<template>
      <div class="form">
        <p style="text-align:center;font-size:larger;margin-top: 10px;">登 录 / 注 册</p>
        <input v-model="userInfo.username" type="text" name="" id="" placeholder="请输入用户名"/>
        <input v-model="userInfo.pwd" type="password" name="" id="" placeholder="请输入密码">
        <span class="tips" style="width:300px;font-size: small;display:inline-block;float:left;margin-left:30px;color: tomato;">{{tips.message}}</span>
        <span style="width:300px;font-size: small;display:inline-block;float:right;margin-right:30px;color: #67c23a;">{{tips.ok}}</span>
        <button style="background:#67c23a" @keydown.enter="postUser" @click="postUser">登 录</button>
        <button style="background:#409eff" @click="register">注 册</button>
      </div>
      
  </template>
  
<script setup lang="ts">
import { reactive } from '@vue/reactivity'
import axios from 'axios'
import {useRouter} from 'vue-router'


// 键盘按下enter键执行登录
document.addEventListener('keydown',(e) =>{
      if(e.key === 'Enter'){
        postUser();
      }
})
const router = useRouter()
// 登录/注册 提示信息
let tips:any = reactive({
  message:'',
  ok:''
})
// 存放输入的用户名和密码
let userInfo:any = reactive({
  username:'',
  pwd:''
})
// 登录
let timers:any;
function postUser(){
  if(userInfo.username != '' && userInfo.pwd != ''){
   clearTimeout(timers) // 每次点击登录时清除之前的定时器
   // 设置定时器，防止在段时间内多次点击登录按钮
   timers = setTimeout(() => { 
    axios.post('http://localhost:3000/login',{ // post请求后端，发送用户名和密码给后端验证
    userinfo:userInfo
    }).then((res) =>{
      console.log(res)
      if(res.data.state){ // 登录成功时state返回1,否则返回0
        // 登录成功添加userName和user_id 到localstorage存放,然后跳转至首页
        localStorage.setItem('userName', res.data.username)
        localStorage.setItem('user_id',res.data.user_id)
        router.push('/')
      }else{
        tips.message = '用户名或密码错误！'
        console.log("登录失败！")
      }
    })
    }, 500);
    
  }else{
    tips.message = '用户名或密码不能为空！'
  }
}

// 注册
function register(){
  if(userInfo.username != '' && userInfo.pwd != ''){
    axios.post('http://localhost:3000/register',{userinfo:userInfo})
    .then((res) => {
      console.log(res)
      if(res.data.state == 1){
        tips.ok = '注册成功！'
        tips.message = ''
      }else{
        tips.message = '用户名已存在！'
      }
    })
  }else{
    tips.message = `用户名或密码不能为空！`
  }
}

</script>
  <style lang="less" scoped>
    .form{
        width: 400px;
        height: 300px;
        margin-top: 150px;
        margin-right: 10%;
        // border: 1px solid green;
        background:rgb(244, 242, 242);
        box-sizing: border-box;
        border-radius: 10px;
        float: right;
        input{
            width: 80%;
            height: 40px;
            margin-left: 30px;
            margin-bottom: 10px;
            margin-top: 20px;
            font-size: 16px;
            padding-left: 10px;
            border-radius: 10px;
            float: left;
            border: 1px solid gray;
        }
        button{
            width: 80px;
            height: 40px;
            margin: 20px 50px;
            font-size: 18px;
            float: left;
            color: white;
            outline: none;
            border:none;
            cursor: pointer;
            border-radius: 10px;
            &:hover{
              filter: saturate(250%);
            }
        }
    }
  </style>