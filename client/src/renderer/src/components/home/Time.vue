<template>
  <div class="time-card">
    <div class="date">
      <p style="color:white;text-align: center;margin:0;background-color: tomato;font-size: 16px;padding: 5px 0;">
        {{dateTime.year}}年{{dateTime.month + 1}}月
      </p>
      <p style="color:black;text-align: center;margin-top: 10px;font-size: 45px;font-weight: 600;">{{dateTime.day}}</p>
      <p style="text-align:center;font-size:small;">{{ getWeek() }}</p>
    </div>
    <div class="clock">
      {{dateTime.hour}}:{{dateTime.min}}:{{dateTime.sec}}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
let initDate:any = new Date();
let dateTime:any = reactive({
  year:initDate.getFullYear(),
  month:initDate.getMonth(),
  day:format(initDate.getDate()),
  hour:format(initDate.getHours()),
  min:format(initDate.getMinutes()),
  sec:format(initDate.getSeconds())
})
function getWeek() {
    let week:any = new Date(`${dateTime.year}-${dateTime.month + 1}-${dateTime.day}`).getDay();
    switch(week){
      case 0:return "星期日";
      case 1:return "星期一";
      case 2:return "星期二";
      case 3:return "星期三";
      case 4:return "星期四";
      case 5:return "星期五";
      case 6:return "星期六";
      default:return "";
    }
}
function format(message:any):string | number{
  message = parseInt(message)
  return message > 9?message: '0' + message;
}


let timer:any;
function setTime(){
  timer = setInterval(()=>{
  let date = new Date();
  dateTime.year = date.getFullYear()
  dateTime.month = date.getMonth()
  dateTime.day = format(date.getDate())
  dateTime.hour = format(date.getHours())
  dateTime.min = format(date.getMinutes())
  dateTime.sec = format(date.getSeconds())
  },1000)
}

onMounted(()=>{
  // console.log(dateTime.month)
  clearInterval(timer)
  setTime();
  
})
</script>
<script lang="ts">
  export default{
    name:'Time'
  }
</script>
<style lang="less" scoped>
  .time-card{
    width: 320px;
    height: 130px;
    float: left;
    border-radius: 20px;
    margin-bottom: 10px;
    padding: 1px;
    cursor: pointer;
    .date{
      width: 40%;
      height: 100%;
      background-color:var(--leftTopColor);
      border:1px solid rgb(224, 224, 224);
      border-radius: 20px;
      float: left;
      box-sizing: border-box;
      padding: 0;
    }
    .clock{
      width: 55%;
      height: 100%;
      background: #4AC29A;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #BDFFF3, #4AC29A);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #BDFFF3, #4AC29A); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

      text-align: center;
      border-radius: 20px;
      line-height: 120px;
      font-size: 48px;
      color: white;
      float: right;
      font-family: 'mFont';
      font-feature-settings: "tnum"
    }
  }
</style>