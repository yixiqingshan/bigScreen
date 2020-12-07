<!-- 首页 index-->
<template>
  <dv-full-screen-container
    class="home-index"
    style="height: 100%; width: 100%; padding: 0px 10px; box-sizing: border-box"
  >
    <div class="header">
      <div class="company">星源科技</div>
      中控看板
      <div class="tip">
        <p style="padding-top: 30px">{{ time }}</p>
        <!-- <div class="support">
          技术支持：
          <div class="merquee">
            <span class="merquee-txt">芯港信息 邮箱：1797657868@qq.com</span>
            <span class="merquee-txt">芯港信息 邮箱：1797657868@qq.com</span>
          </div>
        </div> -->
      </div>
    </div>
    <div class="content">
      <div class="left_box">
        <div class="border_line">
          <p class="title">巡查记录</p>
          <dv-scroll-board
            :config="tableConfig"
            style="width: 100%; height: 100%"
          />
        </div>
        <div class="border_line">
          <p class="title">各个工序的良品与不良统计</p>
          <dv-charts :option="statistics" v-if="statistics.yAxis.data.length"/>
        </div>
        <div class="pies border_line">
          <p class="title">各个工序的良品与不良占比</p>
          <dv-charts :option="proportion1" v-if="proportion1.series[0].data.length"/>
          <dv-charts :option="proportion2" v-if="proportion2.series[0].data.length"/>
          <!-- <dv-charts :option="option2" /> -->
        </div>
        <div class="border_line">
          <p class="title">不良TOP10统计</p>
          <dv-charts
            :option="inferiorData"
            v-if="inferiorData.yAxis.data.length"
          />
        </div>
      </div>

      <div class="right_box">
        <div class="border_line">
          <p class="title">报警记录</p>
          <dv-scroll-board
            :config="tableConfig1"
            style="width: 100%; height: 100%"
          />
        </div>
        <div class="border_line">
          <p class="title">投入数</p>
          <dv-charts
            :option="investmentData"
            v-if="investmentData.xAxis.data.length"
          />
        </div>
        <div class="border_line">
          <p class="title">产出数</p>
          <dv-charts
            :option="produceData"
            v-if="produceData.xAxis.data.length"
          />
        </div>
        <div class="border_line">
          <p class="title">直通率</p>
          <dv-charts
            :option="passRateData"
            v-if="passRateData.xAxis.data.length"
          />
        </div>
      </div>
      <div class="center_box">
        <div class="border_line" style="height: 74%; margin-bottom: 1%;padding-top: 20px">
          <div class="data_top">
            <div class="num_data">
              <p>今日产量</p>
              <!-- <dv-digital-flop
                :config="numConfig"
                style="width: 300px; height: 50px"
                v-if="numConfig.number.length"
              /> -->
              <span>{{daYield}}</span>
            </div>
            <div class="num_data">
              <p>昨日产量</p>
              <span>{{ yesterday }}</span>
            </div>
            <div class="num_data">
              <p>昨日良率</p>
              <span>{{ yesterdaYield }}</span>
            </div>
            <div class="charts_pie">
              <dv-charts
                :option="daYieldData"
                v-if="daYieldData.series[0].data.length"
              />
            </div>
            <div class="charts_pie">
              <dv-charts :option="dayPassRateData"  v-if="dayPassRateData.series[0].data.length"/>
            </div>
          </div>
          <div class="charts_line">
            <p>每天产量及直通率看板</p>
            <dv-charts :option="dayData" v-if="dayData.xAxis.data.length" style="height: calc(100% - 24px)"/>
          </div>
        </div>
        <div class="border_line" style="height: 24%; padding-top: 10px">
          <p style="margin: 0;">每天产量对比</p>
          <dv-charts :option="yieldData" v-if="yieldData.xAxis.data.length" style="height: calc(100% - 24px)"/>
        </div>
      </div>
    </div>
  </dv-full-screen-container>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';
import Charts from "@jiaminghi/charts";
export default {
  components: {},
  data() {
    return {
      time: new Date().toLocaleTimeString(),
      daYield:0,
      yesterday: 0,
      yesterdaYield: 0,
      investmentData: {
        grid: {
          left: "12%",
          top: "15%",
          right: "12%",
          bottom: "13%",
        },
        xAxis: {
          name: "日期",
          nameTextStyle: {
            fill: "#fff",
            fontSize: 12,
          },
          data: [],
          axisLabel: {
            style: {
              fill: "#fff",
            },
          },
          axisTick: {
            style: {
              stroke: "#fff",
            },
          },
          axisLine: {
            // show: false,
            style: {
              stroke: "#fff",
            },
          },
        },
        yAxis: {
          name: "个",
          nameGap: 8,
          nameTextStyle: {
            fill: "#fff",
            fontSize: 12,
          },
          data: "value",
          axisLabel: {
            style: {
              fill: "#fff",
            },
          },
          axisLine: {
            show: true,
            style: {
              stroke: "#fff",
            },
          },
          axisTick: {
            style: {
              stroke: "#fff",
            },
          },
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            data: [],
            type: "bar",
          },
        ],
      },
      produceData: {
        grid: {
          left: "12%",
          top: "15%",
          right: "12%",
          bottom: "13%",
        },
        xAxis: {
          name: "日期",
          nameTextStyle: {
            fill: "#fff",
            fontSize: 12,
          },
          data: [],
          axisLabel: {
            style: {
              fill: "#fff",
            },
          },
          axisTick: {
            style: {
              stroke: "#fff",
            },
          },
          axisLine: {
            // show: false,
            style: {
              stroke: "#fff",
            },
          },
        },
        yAxis: {
          name: "个",
          nameGap: 8,
          nameTextStyle: {
            fill: "#fff",
            fontSize: 12,
          },
          data: "value",
          min: 0,
          axisLabel: {
            style: {
              fill: "#fff",
            },
          },
          axisLine: {
            show: true,
            style: {
              stroke: "#fff",
            },
          },
          axisTick: {
            style: {
              stroke: "#fff",
            },
          },
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            data: [],
            type: "bar",
          },
        ],
      },
      inferiorData: {
        grid: {
          left: "12%",
          top: "0%",
          right: "12%",
          bottom: "12%",
        },
        color: ["#fff"],
        xAxis: {
          name: "数量",
          nameTextStyle: {
            fill: "#fff",
            fontSize: 12,
          },
          min: 0,
          data: "value",
          axisLine: {
            show: true,
            style: {
              stroke: "#fff",
            },
          },
          axisTick: {
            style: {
              stroke: "#fff",
            },
          },
          axisLabel: {
            style: {
              fill: "#fff",
            },
          },
          
        },
        yAxis: {
          data: [],
          axisLine: {
            style: {
              stroke: "#fff",
            },
          },
          axisTick: {
            style: {
              stroke: "#fff",
            },
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            style: {
              fill: "#fff",
            },
          },
        },
        series: [
          {
            data: [],
            type: "bar",
            animationCurve: "easeOutBack",
          },
        ],
      },
      passRateData: {
        grid: {
          left: "12%",
          top: "15%",
          right: "12%",
          bottom: "13%",
        },
        xAxis: {
          name: "日期",
          nameTextStyle: {
            fill: "#fff",
            fontSize: 12,
          },
          data: [],
          axisLabel: {
            style: {
              fill: "#fff",
            },
          },
          axisTick: {
            style: {
              stroke: "#fff",
            },
          },
          axisLine: {
            // show: false,
            style: {
              stroke: "#fff",
            },
          },
        },
        yAxis: {
          name: "%",
          nameGap: 10,
          nameTextStyle: {
            fill: "#fff",
            fontSize: 12,
          },
          data: "value",
          min: 0,
          axisLabel: {
            style: {
              fill: "#fff",
            },
          },
          axisLine: {
            show: true,
            style: {
              stroke: "#fff",
            },
          },
          axisTick: {
            style: {
              stroke: "#fff",
            },
          },
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            data: [],
            type: "bar",
          },
        ],
      },
      yieldData: {
        grid: {
          left: "10%",
          top: "15%",
          right: "5%",
          bottom: "15%",
        },
        xAxis: {
          name: "日期",
          nameTextStyle: {
            fill: "#fff",
            fontSize: 12,
          },
          data: [],
          axisLabel: {
            style: {
              fill: "#fff",
            },
          },
          axisTick: {
            style: {
              stroke: "#fff",
            },
          },
          axisLine: {
            // show: false,
            style: {
              stroke: "#fff",
            },
          },
        },
        yAxis: {
          name: "个",
          nameGap: 8,
          nameTextStyle: {
            fill: "#fff",
            fontSize: 12,
          },
          min: 0,
          data: "value",
          axisLabel: {
            style: {
              fill: "#fff",
            },
          },
          axisLine: {
            show: true,
            style: {
              stroke: "#fff",
            },
          },
          axisTick: {
            style: {
              stroke: "#fff",
            },
          },
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            data: [],
            type: "bar",
          },
        ],
      },
      dayData: {
        grid: {
          left: "10%",
          top: "10%",
          right: "5%",
          bottom: "10%",
        },

        xAxis: {
          data: [],
          axisLabel: {
            style: {
              fill: "#fff",
            },
          },
          axisTick: {
            style: {
              stroke: "#fff",
            },
          },
          axisLine: {
            // show: false,
            style: {
              stroke: "#fff",
            },
          },
        },
        yAxis: {
          name: "产量",
          nameTextStyle: {
            fill: "#fff",
            fontSize: 12,
          },
          data: "value",
          axisLabel: {
            style: {
              fill: "#fff",
            },
          },
          axisLine: {
            show: true,
            style: {
              stroke: "#fff",
            },
          },
          axisTick: {
            style: {
              stroke: "#fff",
            },
          },
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            data: [],
            type: "line",
            lineArea: {
              show: true,
            },
          },
        ],
      },
      daYieldData: {
        grid: {
          left: "10%",
          top: "10%",
          right: "5%",
          bottom: "0%",
        },
        series: [
          {
            type: "gauge",
            startAngle: -Math.PI / 2,
            endAngle: Math.PI * 1.5,
            arcLineWidth: 15,
            radius: "70%",
            data: [],
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            pointer: {
              show: false,
            },
            dataItemStyle: {
              lineCap: "round",
            },
            details: {
              show: true,
              formatter: "直通率{value}%",
              style: {
                fill: "#1ed3e5",
                fontSize: 12,
              },
            },
          },
        ],
      },
      dayPassRateData: {
        grid: {
          left: "10%",
          top: "10%",
          right: "5%",
          bottom: "5%",
        },
        series: [
          {
            type: "gauge",
            startAngle: -Math.PI / 2,
            endAngle: Math.PI * 1.5,
            arcLineWidth: 15,
            radius: "70%",
            data: [
            ],
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            pointer: {
              show: false,
            },
            dataItemStyle: {
              lineCap: "round",
            },
            details: {
              show: true,
              formatter: "良品率{value}%",
              style: {
                fill: "#1ed3e5",
                fontSize: 12,
              },
            },
          },
        ],
      },
      proportion1: {
        grid: {
          left: "10%",
          top: "28",
          right: "5%",
        },
        title: {
          text: "QC1",
          style: {
            fill: "#fff",
          },
        },
        series: [
          {
            type: "gauge",
            startAngle: -Math.PI / 2,
            endAngle: Math.PI * 1.5,
            arcLineWidth: 10,
            center: ["50%", "60%"],
            data: [
              // {
              //   name: "itemA",
              //   value: 20,
              //   gradient: ["#03c2fd", "#1ed3e5", "#2fded6"],
              // },
            ],
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            pointer: {
              show: false,
            },
            dataItemStyle: {
              lineCap: "round",
            },
            details: {
              show: true,
              formatter: "{value}%",
              style: {
                fill: "#1ed3e5",
                fontSize: 18,
              },
            },
          },
        ],
      },
      proportion2: {
        grid: {
          left: "10%",
          top: "28",
          right: "5%",
        },
        title: {
          text: "QC1",
          style: {
            fill: "#fff",
          },
        },
        series: [
          {
            type: "gauge",
            startAngle: -Math.PI / 2,
            endAngle: Math.PI * 1.5,
            arcLineWidth: 10,
            center: ["50%", "60%"],
            data: [
              // {
              //   name: "itemA",
              //   value: 20,
              //   gradient: ["#03c2fd", "#1ed3e5", "#2fded6"],
              // },
            ],
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            pointer: {
              show: false,
            },
            dataItemStyle: {
              lineCap: "round",
            },
            details: {
              show: true,
              formatter: "{value}%",
              style: {
                fill: "#1ed3e5",
                fontSize: 18,
              },
            },
          },
        ],
      },
      statistics: {
        grid: {
          left: "12%",
          top: "0%",
          right: "22%",
          bottom: "20%",
        },
        legend: {
          top: 12,
          show: true,
          data:[{name: "全部",color: ""},{name: "良品",color: ""},{name: "不良",color: "rgba(255,0,0,.6)"}],
          textStyle: {
            fill: '#fff'
          },
          orient:"vertical"
        },
        color: ["#fff"],
        xAxis: {
          min: 0,
          name: "数量",
          nameTextStyle: {
            fill: "#fff",
            fontSize: 12,
          },
          data: "value",
          axisLine: {
            show: true,
            style: {
              stroke: "#fff",
            },
          },
          axisTick: {
            style: {
              stroke: "#fff",
            },
          },
          axisLabel: {
            style: {
              fill: "#fff",
            },
          },
        },
        yAxis: {
          data: [],
          axisLine: {
            style: {
              stroke: "#fff",
            },
          },
          axisTick: {
            style: {
              stroke: "#fff",
            },
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            style: {
              fill: "#fff",
            },
          },
        },
        series: [
          {
            barStyle: {
              fill: 'rgba(255,0,0,.6)',
              barBorderRadius: 51,
            },
            data: [],
            type: "bar",
            name: "不良"
          },
          {
            data: [],
            type: "bar",
            name: "良品"
          },
          {
            data: [],
            type: "bar",
            name: "全部"
          },
        ],
      },
      
      tableConfig: {
        header: ["巡查内容", "列2"],
        data: [
          ["内容1", "寻常类答复"],
          ["内容2", "寻常类答复"],
          ["内容3", "寻常类答复"],
          ["内容4", "切萨夫放大发"],
          ["内容5", "切萨夫放大发"],
          ["内容6", "切萨夫放大发"],
          ["内容7", "切萨夫放大发"],
          ["内容8", "切萨夫放大发"],
          ["内容9", "切萨夫放大发"],
        ],
      },
      tableConfig1: {
        data: [
          ["良率预警  94%"],
          ["WIP等待预警超过15天"],
        
        ],
      },
      numConfig: {
        number: [],
        content: "{nt} {nt} {nt} {nt}",
        style: {
          fontSize: 50,
          fill: "#3de7c9",
        },
      },
    };
  },
  computed: {},
  watch: {},
  created() {
    this.getData();
  },
  mounted() {
    let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(() => {
      _this.time = new Date().toLocaleTimeString(); // 修改数据date
    }, 1000);
  },
  methods: {
    getData() {
      this.$http.get("/api/Sign/SelSign").then((res) => {
        let arr = JSON.parse(res.data);
        
        arr.forEach((el, idx) => {
          if (idx < 7) {
            this.investmentData.xAxis.data.push(this.getWeek(el.dayinfo));
            this.investmentData.series[0].data.push(el.total);
            this.produceData.xAxis.data.push(this.getWeek(el.dayinfo));
            this.produceData.series[0].data.push(el.cmp);
          }
          if (idx < 14) {
            this.yieldData.xAxis.data.push(this.getWeek(el.dayinfo));
            this.yieldData.series[0].data.push(el.cmp);
          }
        });
      });
      this.$http.get("/api/Sign/SelDefect").then((res) => {
        let arr = JSON.parse(res.data);
        arr.sort(function (a, b) {
          return b.num - a.num;
        });
        arr.forEach((el, idx) => {
          if (idx < 10) {
            this.inferiorData.yAxis.data.unshift(el.defect_name);
            this.inferiorData.series[0].data.unshift(el.num);
          }
        });
      });
      this.$http.get("/api/Sign/SelTodayInfo").then((res) => {
        let arr = JSON.parse(res.data);
        // return
        console.log("SelTodayInfo", arr);
        // this.
        this.daYield = arr.ToDaySign;
        this.yesterday = arr.TomorrowSign;
        this.yesterdaYield = arr.TomorrowYiledRate;
        this.daYieldData.series[0].data.push({
          name: "itemA",
          value: Math.round(arr.ToDayPassRate * 100),
          gradient: ["#03c2fd", "#1ed3e5", "#2fded6"],
        });
        this.dayPassRateData.series[0].data.push({
          name: "itemA",
          value: Math.round(arr.ToDayYiledRate* 100),
          gradient: ["#03c2fd", "#1ed3e5", "#2fded6"],
        });
      });
      this.$http.get("/api/Sign/SelDefectRateByGroup").then((res) => {
        let arr = JSON.parse(res.data);
        console.log("SelDefectRateByGroup", arr);
        this.proportion1.title.text = arr[0].DefecGrouptName
        this.proportion1.series[0].data.push({
          name: "item",
          value: arr[0].Rate ? Math.round(arr[0].Rate * 100) : 0,
          gradient: ["#03c2fd", "#1ed3e5", "#2fded6"],
        });
        this.proportion2.title.text = arr[1].DefecGrouptName
        this.proportion2.series[0].data.push({
          name: "item",
          value: arr[1].Rate ? Math.round(arr[1].Rate * 100) : 0,
          gradient: ["#03c2fd", "#1ed3e5", "#2fded6"],
        });
      });
      this.$http.get("/api/Sign/SelDefectByGroup").then((res) => {
        let arr = JSON.parse(res.data);
        // return
        console.log("SelDefectByGroup", arr);
        arr.forEach((el, idx) => {
            this.statistics.yAxis.data.push(el.DEFECT_GROUP_NAME);
            this.statistics.series[2].data.push(el.total);
            this.statistics.series[1].data.push(el.total - el.cmp);
            this.statistics.series[0].data.push(el.cmp);
        });
        console.log(this.statistics,"this.statistics")
      });
      this.$http.get("/api/Sign/SelYieldRate").then((res) => {
        let arr = JSON.parse(res.data);
        
        // this.yesterdaYield = arr[1].Rate ? Math.round(arr[1].Rate * 100) : 0
        arr.forEach((el, idx) => {
          if (idx < 14) {
            this.dayData.xAxis.data.push(this.getWeek(el.DayInfo));
            this.dayData.series[0].data.push(
              el.Rate ? Math.round(el.Rate * 100) : 0
            );
          }
        });
      });
      this.$http.get("/api/Sign/SelPassRate").then((res) => {
        let arr = JSON.parse(res.data);
        console.log(arr, "SelPassRate");
     
        arr.forEach((el, idx) => {
          if (idx < 7) {
            this.passRateData.xAxis.data.push(this.getWeek(el.DayInfo));
            this.passRateData.series[0].data.push(
              el.Rate ? Math.round(el.Rate * 100) : 0
            );
          }
        });
      });
    },
    getWeek(dateString) {
      var dateArray = dateString.split("-");
      let date = new Date(
        dateArray[0],
        parseInt(dateArray[1] - 1),
        dateArray[2]
      );
      return "周" + "日一二三四五六".charAt(date.getDay());
    },
  },

  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  },
};
</script>
<style >
.pies {
  display: flex;
  justify-content: space-around;
}
</style>
<style  scoped>
.home-index {
  height: 100% !important;
}
.header {
  height: 60px;
  width: 100%;
  font-size: 40px;
  text-align: center;
  line-height: 60px;
}
.company {
  float: left;
  line-height: 60px;
  font-size: 32px;
  color: rgb(0, 206, 255);
}
.header .tip {
  float: right;
  font-size: 14px;
  line-height: 28px;
}
.header .tip p {
  text-align: right;
}
.merquee {
  height: 28px;
  line-height: 28px;
  box-sizing: border-box;
  word-break: break-all;
  white-space: nowrap;
  overflow: hidden;
  float: right;
  width: 200px;
}
.merquee .merquee-txt {
  display: inline-block;
  padding-left: 0%; /* 从右至左开始滚动 */
  animation: marqueeTransform 5s linear infinite;
}
@keyframes marqueeTransform {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}
.content {
  height: 92%;
  width: 100%;
}
.left_box {
  float: left;
  width: 27%;
  margin-right: 1%;
  height: 100%;
}
.border_line {
  padding: 20px;
  padding-top: 50px;
  height: 24%;
  width: 100%;
  margin-bottom: 10px;
  box-sizing: border-box;
  background-color: #0c2a35 !important;
  border-radius: 6px;
  position: relative;
}
.border_line .title {
  position: absolute;
  top: 10px;
  left: 10px;
}
.center_box {
  /* float: left; */
  width: 51%;
  padding: 0 21% 0 28%;
  height: 100%;
}
.center_box .data_top {
  height: 25%;
  padding: 10px 30px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
}
.num_data {
  float: left;
  font-size: 30px;
  width: 22%;
  font-weight: 500;
}
.num_data p{
  margin-bottom: 40px !important;
}
.num_data span {
  font-size: 36px;
  color: #3de7c9;
  font-weight: 500;
}
.yesterday_data {
  float: left;
  font-size: 14px;
  margin-right: 30px;
}
.yesterday_data p {
  margin-bottom: 36px;
  margin-top: 35px;
}
.num_data p {
  margin: 20px 10px;
  font-size: 28px;
}
.charts_pie {
  float: left;
  width: 16%;
  height: 100%;
}
.center_box .charts_line {
  height: 75%;
}
.center_box .charts_line p {
  margin-bottom: 0px !important;
}
.right_box {
  float: right;
  margin-left: 1%;
  width: 20%;
  height: 100%;
}
</style>