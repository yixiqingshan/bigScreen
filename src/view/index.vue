<!-- 首页 index-->
<template>
  <dv-full-screen-container
    class="home-index"
    style="height: 100%; width: 100%; padding: 0px 10px; box-sizing: border-box"
  >
    <div class="header">
      <div class="company">上海芯港信息有限公司</div>
      中控看板
      <div class="tip">
        <p>{{ time }}</p>
        <div class="support">
          技术支持：
          <div class="merquee">
            <span class="merquee-txt">芯港信息 邮箱：1797657868@qq.com</span>
            <span class="merquee-txt">芯港信息 邮箱：1797657868@qq.com</span>
          </div>
        </div>
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
          <dv-charts :option="option1" />
        </div>
        <div class="pies border_line">
          <p class="title">各个工序的良品与不良占比</p>
          <dv-charts :option="option2" />
          <dv-charts :option="option2" />
          <dv-charts :option="option2" />
        </div>
        <div class="border_line">
          <p class="title">不良TOP10统计</p>
          <dv-charts :option="option" />
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
          <dv-charts :option="option3" />
        </div>
        <div class="border_line">
          <p class="title">产出数</p>
          <dv-charts :option="option3" />
        </div>
        <div class="border_line">
          <p class="title">直通率</p>
          <dv-charts :option="option4" />
        </div>
      </div>
      <div class="center_box">
        <div class="border_line" style="height: 74%; margin-bottom: 1%">
          <div class="data_top">
            <div class="num_data">
              <p>今日产量</p>
              <dv-digital-flop
                :config="numConfig"
                style="width: 300px; height: 50px"
              />
            </div>
            <div class="yesterday_data">
              <p>昨日产量</p>
              <span>1111</span>
            </div>
            <div class="yesterday_data">
              <p>昨日良率</p>
              <span>92.98%</span>
            </div>
            <div class="charts_pie">
              <dv-charts :option="option7" />
            </div>
            <div class="charts_pie">
              <dv-charts :option="option7" />
            </div>
          </div>
          <div class="charts_line">
            <dv-charts :option="option6" />
          </div>
        </div>
        <div class="border_line" style="height: 24%">
          <p class="title">巡查记录</p>
          <dv-charts :option="option5" />
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
      option: {
        grid: {
          left: "10%",
          top: "0%",
          right: "12%",
          bottom: "15%",
        },
        color: ["#fff"],
        xAxis: {
          name: "第一周",
          nameTextStyle: {
            fill: "#fff",
            fontSize: 12,
          },
          data: "value",
          axisLine: {
            show: false,
          },
          axisLabel: {
            style: {
              fill: "#fff",
            },
          },
        },
        yAxis: {
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
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
            data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
            type: "bar",
            animationCurve: "easeOutBack",
          },
        ],
      },
      option1: {
        grid: {
          left: "10%",
          top: "0%",
          right: "12%",
          bottom: "20%",
        },
        color: ["#fff"],
        xAxis: {
          min: 0,
          name: "第一周",
          nameTextStyle: {
            fill: "#fff",
            fontSize: 12,
          },
          data: "value",
          axisLine: {
            show: false,
          },
          axisLabel: {
            style: {
              fill: "#fff",
            },
          },
        },
        yAxis: {
          data: ["周一", "周二", "周三"],
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
            data: [1200, 2230, 1900],
            type: "bar",
          },
          {
            data: [1200, 2230, 1900],
            type: "bar",
          },
          {
            data: [1200, 2230, 1900],
            type: "bar",
          },
        ],
      },
      option2: {
        grid: {
          left: "10%",
          top: "25",
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
              {
                name: "itemA",
                value: 20,
                gradient: ["#03c2fd", "#1ed3e5", "#2fded6"],
              },
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
      option3: {
        grid: {
          left: "10%",
          top: "20%",
          right: "5%",
          bottom: "10%",
        },

        xAxis: {
          name: "第一周",
          nameTextStyle: {
            fill: "#fff",
            fontSize: 12,
          },
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
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
          name: "销售额",
          data: "value",
          nameTextStyle: {
            fill: "#fff",
            fontSize: 12,
          },
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
            data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
            type: "bar",
          },
        ],
      },
      option4: {
        grid: {
          left: "10%",
          top: "20%",
          right: "5%",
          bottom: "10%",
        },

        xAxis: {
          name: "第一周",
          nameTextStyle: {
            fill: "#fff",
            fontSize: 12,
          },
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
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
          name: "销售额",
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
          axisTick: {
            style: {
              stroke: "#fff",
            },
          },
          axisLine: {
            show: true,
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
            data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
            type: "bar",
          },
        ],
      },
      option5: {
        grid: {
          left: "10%",
          top: "20%",
          right: "5%",
          bottom: "10%",
        },

        xAxis: {
          data: [
            "周一",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日",
            "周一",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日",
          ],
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
          name: "销售额",
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
            data: [
              1200,
              2230,
              1900,
              2100,
              3500,
              4200,
              3985,
              1200,
              2230,
              1900,
              2100,
              3500,
              4200,
              3985,
            ],
            type: "bar",
          },
        ],
      },
      option6: {
        grid: {
          left: "10%",
          top: "10%",
          right: "5%",
          bottom: "10%",
        },

        xAxis: {
          data: [
            "周一",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日",
            "周一",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日",
          ],
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
          name: "销售额",
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
            data: [
              2339,
              1899,
              2118,
              1790,
              3265,
              4465,
              3996,
              2339,
              1899,
              2118,
              1790,
              3265,
              4465,
              3996,
            ],
            type: "line",
            lineArea: {
              show: true,
            },
          },
        ],
      },
      option7: {
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
            arcLineWidth: 8,
            data: [
              {
                name: "itemA",
                value: 89,
                gradient: ["#03c2fd", "#1ed3e5", "#2fded6"],
              },
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
      numConfig: {
        number: [1, 2, 3, 4],
        content: "{nt} {nt} {nt} {nt}",
        style: {
          fontSize: 50,
          fill: "#3de7c9",
        },
      },
      tableConfig: {
        header: ["巡查内容", "列2"],
        data: [
          ["行1列1", "行1列2"],
          ["行2列1", "行2列2"],
          ["行3列1", "行3列2"],
          ["行4列1", "行4列2"],
          ["行5列1", "行5列2"],
          ["行6列1", "行6列2"],
          ["行7列1", "行7列2"],
          ["行8列1", "行8列2"],
          ["行9列1", "行9列2"],
        ],
      },
      tableConfig1: {
        data: [
          ["1. 行1列1行2列2行2列2行2列2行2列2行2列2行2列2行2列2"],
          ["2. 行1列1行2列2行2列2行2列2行2列2行2列2行2列2行2列2"],
          ["3. 行1列1行2列2行2列2行2列2行2列2行2列2行2列2行2列2"],
          ["4. 行1列1行2列2行2列2行2列2行2列2行2列2行2列2行2列2"],
          ["5. 行1列1行2列2行2列2行2列2行2列2行2列2行2列2行2列2"],
          ["6. 行1列1行2列2行2列2行2列2行2列2行2列2行2列2行2列2"],
          ["7. 行1列1行2列2行2列2行2列2行2列2行2列2行2列2行2列2"],
          ["8. 行1列1行2列2行2列2行2列2行2列2行2列2行2列2行2列2"],
          ["9. 行1列1行2列2行2列2行2列2行2列2行2列2行2列2行2列2"],
          ["10. 行1列1行2列2行2列2行2列2行2列2行2列2行2列2行2列2"],
          ["11. 行1列1行2列2行2列2行2列2行2列2行2列2行2列2行2列2"],
          ["12. 行1列1行2列2行2列2行2列2行2列2行2列2行2列2行2列2"],
        ],
      },
    };
  },
  computed: {},
  watch: {},
  methods: {
    getData() {
      this.$http({
        method: "get",
        url: "api",
      })
        .then((res) => {
          //这里使用了ES6的语法
          console.log(res); //请求成功返回的数据
        })
        .catch(
          (error) => console.log(error) //请求失败返回的数据
        );
    },
  },
  created() {},
  mounted() {
    let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(() => {
      _this.time = new Date().toLocaleTimeString(); // 修改数据date
    }, 1000);
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
}
.num_data {
  float: left;
  font-size: 30px;
  width: 100;
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
  width: 20%;
  height: 100%;
}
.center_box .charts_line {
  height: 75%;
}
.right_box {
  float: right;
  margin-left: 1%;
  width: 20%;
  height: 100%;
}
</style>