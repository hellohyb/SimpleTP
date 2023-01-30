<template>
    <div class="calender">
        <div class="titles">
            <div class="month">
                <div style="font-size:large;"><b>{{ now_date.year }}</b>年</div>
                <div style="font-size:30px;"><b>{{ now_date.month }}</b></div>
                <div style="padding-top:5px;">
                    <svg @click="now_date.month--" t="1671111926156" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="2028" width="40" height="40">
                        <path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m104 316.9c0 10.2-4.9 19.9-13.2 25.9L457.4 512l145.4 105.2c8.3 6 13.2 15.6 13.2 25.9V690c0 6.5-7.4 10.3-12.7 6.5l-246-178c-4.4-3.2-4.4-9.7 0-12.9l246-178c5.3-3.8 12.7-0.1 12.7 6.5v46.8z"
                            p-id="2029" fill="#5ed56b"></path>
                    </svg>
                    <svg @click="now_date.month++" t="1671111646303" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="1585" width="40" height="40">
                        <path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m154.7 454.5l-246 178c-5.3 3.8-12.7 0-12.7-6.5v-46.9c0-10.2 4.9-19.9 13.2-25.9L566.6 512 421.2 406.8c-8.3-6-13.2-15.6-13.2-25.9V334c0-6.5 7.4-10.3 12.7-6.5l246 178c4.4 3.2 4.4 9.8 0 13z"
                            p-id="1586" fill="#5ed56b"></path>
                    </svg>
                    <svg @click="returnToday()" style="margin-left:10px;" t="1671368194065" class="icon"
                        viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1998" width="36"
                        height="36">
                        <path
                            d="M753.6 222.4h24c19.2 0 33.6-14.4 33.6-32V57.6c0-19.2-14.4-33.6-33.6-33.6h-24c-19.2 0-33.6 14.4-33.6 33.6v131.2c0 19.2 14.4 33.6 33.6 33.6zM251.2 222.4h24c19.2 0 33.6-14.4 33.6-32V57.6c0-19.2-14.4-33.6-33.6-33.6h-24c-19.2 0-33.6 14.4-33.6 33.6v131.2c0 19.2 14.4 33.6 33.6 33.6z"
                            fill="#5ed56b" p-id="1999"></path>
                        <path
                            d="M928 134.4h-68.8v56c0 41.6-33.6 76.8-80 76.8h-24c-43.2 0-80-33.6-80-76.8V134.4h-320v56c0 41.6-33.6 76.8-80 76.8h-24c-43.2 0-80-33.6-80-76.8V134.4H105.6c-38.4 0-68.8 28.8-68.8 67.2v731.2c0 38.4 30.4 67.2 68.8 67.2h820.8c38.4 0 68.8-28.8 70.4-67.2V201.6c0-38.4-30.4-67.2-68.8-67.2zM105.6 932.8V355.2h820.8s0 577.6 1.6 577.6H105.6z"
                            fill="#5ed56b" p-id="2000"></path>
                        <path
                            d="M500.8 548.8l-49.6 33.6c14.4 16 33.6 41.6 60.8 75.2l54.4-35.2c-19.2-22.4-40-46.4-65.6-73.6z"
                            fill="#5ed56b" p-id="2001"></path>
                        <path
                            d="M553.6 451.2l14.4-14.4v-1.6H480c-51.2 68.8-118.4 121.6-196.8 155.2 11.2 12.8 25.6 28.8 41.6 54.4 80-40 142.4-89.6 188.8-148.8 43.2 59.2 102.4 107.2 180.8 144 14.4-19.2 27.2-35.2 41.6-52.8-76.8-30.4-137.6-76.8-182.4-136zM339.2 716.8h246.4c-30.4 43.2-62.4 81.6-94.4 116.8l60.8 33.6c49.6-56 89.6-108.8 123.2-155.2v-54.4h-336v59.2z"
                            fill="#5ed56b" p-id="2002"></path>
                    </svg>
                </div>
            </div>
        </div>
        <div class="week">
            <ul>
                <li>一</li>
                <li>二</li>
                <li>三</li>
                <li>四</li>
                <li>五</li>
                <li style="color:tomato">六</li>
                <li style="color:tomato">日</li>
            </ul>
        </div>
        <div class="date">
            <ul v-for="weekName in week_day">
                <li v-for="item in weekName" @click="showToday(item)" :class="[todayStyle(item)]">{{ item }}</li>
            </ul>

        </div>
    </div>
    <!-- 右侧详细信息 -->
    <div class="today_task">
        <div class="showToday">
            <div class="nowDay">
                {{ now_date.day }}
            </div>
            <p>{{ FormatWeek() }}</p>
            <p>{{ now_date.year }}-{{ Format(now_date.month) }}-{{ Format(now_date.day) }}</p>
        </div>

    </div>

</template>
  
<script setup lang="ts">
import { reactive } from "@vue/reactivity";
import { onMounted, watch } from "@vue/runtime-core";
let date1 = new Date();
function Format(date: any) {
    return date > 9 ? date : '0' + date;
}
let now_date: any = reactive({
    year: date1.getFullYear(),
    month: date1.getMonth() + 1,
    day: Format(date1.getDate())
})
let week_day: any = {
    Mon: [],
    Tur: [],
    Wen: [],
    Thu: [],
    Fri: [],
    Se: [],
    Sun: [],
}
// 根据日期获取星期
function getWeek(year: any, month: any, day: any) {
    return new Date(`${year}-${month}-${day}`).getDay()
}
// 给今天的日期添加样式
function todayStyle(item: any): string {
    let now = `${date1.getFullYear()}-${date1.getMonth() + 1}-${Format(date1.getDate())}`;
    let calender_now = `${now_date.year}-${now_date.month}-${item}`;
    // console.log(calender_now)
    if (now === calender_now) {
        return 'today';
    } else {
        return '';
    }
}
// 点击日历获取对应日期，并查询当天的任务
function showToday(today: any) {
    if (today != '') {
        now_date.day = today;
    }else {
        
    }
}
// 点击返回今天按钮
function returnToday() {
    now_date.year = date1.getFullYear()
    now_date.month = date1.getMonth() + 1
    now_date.day = Format(date1.getDate())
}
// 给右侧任务信息的星期换成中文
function FormatWeek() {
    let week: any = getWeek(now_date.year, now_date.month, now_date.day);
    switch (week) {
        case 0: return "周日";
        case 1: return "周一";
        case 2: return "周二";
        case 3: return "周三";
        case 4: return "周四";
        case 5: return "周五";
        case 6: return "周六";
        default: break;
    }
    return " ";
}
// 初始化日历
function initDay(date: any) {
    for (let i in week_day) {
        week_day[i] = []
    }
    let year: any = date.year;
    let month: any = date.month;
    let month_day: any = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        month_day[1] == 29;
    }
    for (let i = 1; i <= month_day[month - 1]; i++) {
        // 当月的所有日期添加到对应的星期数组里
        let week: number = getWeek(year, month, i); // 获取该天的星期
        switch (week) {
            case 0: week_day.Sun.push(i); break;
            case 1: week_day.Mon.push(i); break;
            case 2: week_day.Tur.push(i); break;
            case 3: week_day.Wen.push(i); break;
            case 4: week_day.Thu.push(i); break;
            case 5: week_day.Fri.push(i); break;
            case 6: week_day.Se.push(i); break;
            default:
                break;
        }
    }
    let first_day: number = getWeek(year, month, 1)
    for (let i in week_day) {
        // 判断各星期数组第一天是不是对应的 星期 是不是本月第一天的 星期
        if (getWeek(year, month, week_day[i][0]) != first_day) {
            week_day[i].unshift('')
        } else {
            break;
        }


    }
}
initDay(now_date)


// 监听月份的变化，如果大于12则年份加一，如果小于1则年份减一
watch(() => now_date.month, () => {
    if (now_date.month > 12) {
        now_date.year++;
        now_date.month = 1;
    }
    if (now_date.month < 1) {
        now_date.year--;
        now_date.month = 12;
    }
    initDay(now_date)
})
onMounted(() => {

})
</script>
  
<style scoped lang="less">
.today {
    background: #5ed56b;
    color: white;
    border-radius: 10px;
}

* {
    margin: 0;
    padding: 0;
}

.calender {
    width: 500px;
    height: 100%;
    background: white;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    user-select: none;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    float: left;

    .titles {
        width: 100%;
        height: 50px;
        text-align: center;

        .month {
            width: 100%;
            height: 100%;
            line-height: 60px;
            display: flex;
            justify-content: space-around;

            svg:hover {
                filter: contrast(200%);
                cursor: pointer;
            }
        }
    }

    .week {
        width: 100%;
        height: 40px;
        border-bottom: 1px solid rgb(209, 209, 209);
        font-size: 18px;

        ul {
            list-style: none;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            padding:0 5px;
            li {
                width: 70px;
                height: 100%;
                float: left;
                display: flex;
                justify-content: space-around;
                line-height: 50px;
            }
        }
    }

    .date {
        width: 100%;
        height: 360px;
        padding: 0 5px;
        ul {
            width: 70px;
            list-style: none;
            box-sizing: border-box;
            float: left;

            li {
                width: 70px;
                height: 55px;
                border-bottom: 1px solid rgb(215, 215, 215);
                display: flex;
                justify-content: space-around;
                line-height: 55px;
                box-sizing: border-box;
                font-size: large;
                cursor: pointer;
                &:hover {
                    background: #adf8ee;
                    border-radius: 10px;
                }
                &:empty{
                    background: transparent;
                    border-radius: 0;
                    cursor: auto;
                }
            }
        }
    }
}

.today_task {
    width: 200px;
    height: 100%;
    box-sizing: border-box;
    background: rgb(183, 233, 191);
    float: left;

    .showToday {
        width: 100%;
        height: 150px;
        box-sizing: border-box;
        background: #f5f5f5;

        .nowDay {
            width: 80px;
            height: 80px;
            background: #5ed56b;
            border-radius: 10px;
            font-size: 40px;
            text-align: center;
            line-height: 80px;
            color: white;
            margin: 10px auto;
            position: relative;

            &::after {
                content: "";
                width: 10px;
                height: 10px;
                background: white;
                position: absolute;
                top: 5px;
                left: 5px;
                border-radius: 50%;
            }

            &::before {
                content: "";
                width: 10px;
                height: 10px;
                background: white;
                position: absolute;
                top: 5px;
                right: 5px;
                border-radius: 50%;
            }
        }

        p {
            text-align: center;
        }
    }
}
</style>