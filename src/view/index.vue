<!-- 首页 index-->
<template>
  <dv-full-screen-container
    class="home-index"
    style="height: 100%; width: 100%; padding: 0px 10px; box-sizing: border-box"
  >
    <div class="header">
      <div class="company"></div>
      中控看板
      <div class="tip">
        <p style="padding-top: 5vh">{{ time }}</p>
        <p style="padding-top: 2vh">技术支持：上海芯港信息科技有限公司</p>
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
          <div
            ref="statistics"
            id="statistics"
            style="width: 100%; height: 100%"
          ></div>
        </div>
        <div class="pies border_line">
          <p class="title">各个工序的良品与不良占比</p>

          <div ref="proportion1" style="width: 50%; height: 100%"></div>
          <div ref="proportion2" style="width: 50%; height: 100%"></div>
        </div>
        <div class="border_line">
          <p class="title">不良TOP5统计</p>
          <div ref="inferiorData" style="width: 100%; height: 100%"></div>
        
        </div>
      </div>
      <div class="center_box">
        <div class="border_line">
          <p class="title">每天产量及直通率</p>
          <div class="data_top">
            <div class="num_data">
              <p>今日产量</p>
              <span>{{ daYield }}</span>
            </div>
            <div class="num_data">
              <p>昨日产量</p>
              <span>{{ yesterday }}</span>
            </div>
            <div class="num_data">
              <p>昨日良率</p>
              <span>{{ yesterdaYield }}<span>%</span> </span>
            </div>
            <div class="charts_pie">
              <div ref="daYieldData" style="width: 100%; height: 100%"></div>
       
            </div>
            <div class="charts_pie">
              <div
                ref="dayPassRateData"
                style="width: 100%; height: 100%"
              ></div>
    
            </div>
          </div>
          <div class="charts_line">
            <!-- <p>每天产量及直通率看板</p> -->
            <div ref="dayData" style="width: 100%; height: 100%"></div>
          </div>
        </div>
        <div class="border_line">
          <p class="title">每天产量对比</p>
          <div ref="yieldData" style="width: 100%; height: 100%"></div>
        </div>
      </div>
      <div class="right_box">
        <div class="border_line">
          <p class="title">报警记录</p>
          <dv-scroll-board
            :config="tableConfig1"
            v-if='tableConfig1.data.length'
            style="width: 100%; height: 100%"
          />
        </div>
        <div class="border_line">
          <p class="title">投入数</p>

          <div ref="investmentData" style="width: 100%; height: 100%"></div>
        </div>
        <div class="border_line">
          <p class="title">产出数</p>
          <div ref="produceData" style="width: 100%; height: 100%"></div>
   
        </div>
        <div class="border_line">
          <p class="title">直通率</p>
          <div ref="passRateData" style="width: 100%; height: 100%"></div>
     
        </div>
      </div>
    </div>
  </dv-full-screen-container>
</template>

<script>
// import echarts from 'echarts'

var echarts = require("echarts");
export default {
  components: {},
  data() {
    return {
      time: new Date().toLocaleTimeString(),
      daYield: 0,
      yesterday: 0,
      yesterdaYield: 0,
      investmentData: {
        grid: {
          left: "12%",
          top: "5%",
          right: "5%",
          bottom: "15%",
        },
        xAxis: {
          data: [],
          axisLabel: {
            color: "#02b7d9",
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: "#252d4d",
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#252d4d",
              type: "dashed",
            },
          },
        },
        yAxis: {
          splitNumber: 3,
          axisLabel: {
            color: "#02b7d9",
            fontSize: 12,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#252d4d",
              type: "dashed",
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#252d4d",
            },
          },
        },
        series: [
          {
            data: [],
            type: "bar",
            barWidth: 12,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: "rgba(0,215,163,0)",
                  },
                  {
                    offset: 1,
                    color: "rgb(0,215,163)",
                  },
                ]),
                barBorderRadius: 10,
              },
            },
          },
        ],
      },
      produceData: {
        grid: {
          left: "12%",
          top: "5%",
          right: "5%",
          bottom: "15%",
        },
        xAxis: {
          data: [],
          axisLabel: {
            color: "#02b7d9",
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: "#252d4d",
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#252d4d",
              type: "dashed",
            },
          },
        },
        yAxis: {
          splitNumber: 1,
          axisLabel: {
            color: "#02b7d9",
            fontSize: 12,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#252d4d",
              type: "dashed",
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#252d4d",
            },
          },
        },
        series: [
          {
            data: [],
            type: "bar",
            barWidth: 12,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: "rgba(153,4,212,0)",
                  },
                  {
                    offset: 1,
                    color: "#9904d4",
                  },
                ]),
                barBorderRadius: 10,
              },
            },
          },
        ],
      },
      inferiorData: {
        grid: {
          left: "8%",
          top: "8%",
          right: "5%",
          bottom: "15%",
        },
        xAxis: {
          // offset: 2,
          type: "category",
          color: "#021950",
          axisLine: {
            show: true,
            lineStyle: {
              color: "#051f4f",
            },
          },
          axisLabel: {
            color: "#01c4f7",
            fontSize: 10,
          },
          // splitLine: {
          //   show: false
          // },
          axisTick: {
            show: false,
          },
          // boundaryGap: true,
          data: [],
        },
        yAxis: {
          type: "value",
          min: 0,
          splitNumber: 4,
          splitLine: {
            show: false,
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#051f4f",
            },
          },
          axisLabel: {
            show: true,
            // margin: 20,
            textStyle: {
              color: "#01c4f7",
            },
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            data: [],
            type: "bar",
            barWidth: 16,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: "#035be8",
                  },
                  {
                    offset: 1,
                    color: "#6de3fe",
                  },
                ]),
                barBorderRadius: 10,
              },
            },
          },
        ],
      },
      passRateData: {
        grid: {
          left: "12%",
          top: "10%",
          right: "5%",
          bottom: "15%",
        },
        xAxis: {
          offset: 0,
          type: "category",
          color: "#021950",
          axisLine: {
            show: true,
            lineStyle: {
              color: "#051f4f",
            },
          },
          axisLabel: {
            color: "#01c4f7",
          },
      
          axisTick: {
            show: false,
          },
          // boundaryGap: true,
          data: [],
        },

        yAxis: {
          
          data: [],
          maxInterval: 20,
          type: "value",
          min: 0,
          splitLine: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#051f4f",
            },
          },
          axisLabel: {
            show: true,
            // margin: 20,
            formatter: "{value}%",
            textStyle: {
              color: "#01c4f7",
            },
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            name: "",
            type: "line",
            smooth: true, //是否平滑
            showAllSymbol: true,
            symbol: "none",
            lineStyle: {
              normal: {
                width: 4,
                color: {
                  type: "linear",

                  colorStops: [
                    {
                      offset: 0,
                      color: "#a34eff", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#05c0e4", // 100% 处的颜色
                    },
                  ],
                  globalCoord: false, // 缺省为 false
                },
                shadowColor: "rgba(72,216,191, 0.3)",
                shadowBlur: 10,
                shadowOffsetY: 20,
              },
            },

            tooltip: {
              show: true,
            },

            data: [],
          },
        ],
      },
      yieldData: {
        grid: {
          left: "5%",
          top: "8%",
          right: "5%",
          bottom: "15%",
        },
        xAxis: {
          // offset: 2,
          type: "category",
          color: "#021950",
          axisLine: {
            show: true,
            lineStyle: {
              color: "#051f4f",
            },
          },
          axisLabel: {
            color: "#01c4f7",
          },
          // splitLine: {
          //   show: false
          // },
          axisTick: {
            show: false,
          },
          // boundaryGap: true,
          data: [],
        },
        yAxis: {
          type: "value",
          min: 0,
          splitNumber: 1,
          splitLine: {
            show: false,
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#051f4f",
            },
          },
          axisLabel: {
            show: true,
            // margin: 20,
            textStyle: {
              color: "#01c4f7",
            },
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            data: [],
            type: "bar",
            barWidth: 16,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: "#55c9a6",
                  },
                  {
                    offset: 1,
                    color: "#e1ce66",
                  },
                ]),
                barBorderRadius: [5, 5, 5, 5],
              },
            },
          },
        ],
      },
      dayData: {
        grid: {
          left: "7%",
          top: "10%",
          right: "5%",
          bottom: "15%",
        },
        xAxis: {
          offset: 10,
          type: "category",
          color: "#021950",
          axisLine: {
            show: true,
            lineStyle: {
              color: "#051f4f",
            },
          },
          axisLabel: {
            color: "#01c4f7",
          },
          // splitLine: {
          //   show: false
          // },
          axisTick: {
            show: false,
          },
          // boundaryGap: true,
          data: [],
        },

        yAxis: {
          name: "良率",
          nameTextStyle: {
            color: "#01c4f7",
          },
          type: "value",
          min: 0,
          formatter: "{value}%",
          splitLine: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#051f4f",
            },
          },
          axisLabel: {
            show: true,
            // margin: 20,
            formatter: "{value}%",
            textStyle: {
              color: "#01c4f7",
            },
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            name: "",
            type: "line",
            smooth: true, //是否平滑
            showAllSymbol: true,
            symbol: "circle",
            symbolSize: 5,
            lineStyle: {
              normal: {
                color: "#febb2a",
              },
            },
            itemStyle: {
              color: "#febb2a",
              borderColor: "#febb2a",
              borderWidth: 1,
            },
            tooltip: {
              show: true,
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(254,187,42,.3)",
                    },
                    {
                      offset: 0.7,
                      color: "rgba(254,187,42,0)",
                    },
                  ],
                  false
                ),
                shadowColor: "rgba(195,230,255,0.1)",
                shadowBlur: 20,
              },
            },
            data: [],
          },
        ],
      },
      daYieldData: {
        title: [
          {
            text: "直通率",
            textAlign: "auto",
            left: 10,
            bottom: "-2%",
            textStyle: {
              color: "#fff",
              fontWeight: 400,
              fontSize: 15,
            },
          },
          {
            text: "30%",
            x: "center",
            top: "30%",
            textStyle: {
              color: "#fff",
              fontSize: 12,
              fontWeight: "100",
            },
          },
        ],
        grid: {
          left: "5%",
          right: "5%",
        },
        polar: {
          radius: ["55%", "68%"],
          center: ["50%", "40%"],
        },
        angleAxis: {
          max: 100,
          show: false,
        },
        radiusAxis: {
          type: "category",
          show: true,
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            name: "",
            type: "bar",
            roundCap: true,
            barWidth: 60,
            showBackground: true,
            backgroundStyle: {
              color: "rgba(66, 66, 66, .3)",
            },
            data: [80],
            coordinateSystem: "polar",
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: "#7de3f6",
                  },
                  {
                    offset: 1,
                    color: "#7de3f6",
                  },
                ]),
              },
            },
          },
        ],
      },
      dayPassRateData: {
        title: [
          {
            text: "良品率",
            textAlign: "auto",
            left: 10,
            bottom: "-2%",
            textStyle: {
              color: "#fff",
              fontWeight: 400,
              fontSize: 15,
            },
          },
          {
            text: "30%",
            x: "center",
            top: "30%",
            textStyle: {
              color: "#fff",
              fontSize: 12,
              fontWeight: "100",
            },
          },
        ],
        grid: {
          left: "5%",
          right: "5%",
        },
        polar: {
          radius: ["55%", "68%"],
          center: ["50%", "40%"],
        },
        angleAxis: {
          max: 100,
          show: false,
        },
        radiusAxis: {
          type: "category",
          show: true,
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            name: "",
            type: "bar",
            roundCap: true,
            barWidth: 60,
            showBackground: true,
            backgroundStyle: {
              color: "rgba(66, 66, 66, .3)",
            },
            data: [80],
            coordinateSystem: "polar",
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: "#8a3cc1",
                  },
                  {
                    offset: 1,
                    color: "#bf37ff",
                  },
                ]),
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
        title: [
          {
            text: "",
            textAlign: "auto",
            left: 60,
            textStyle: {
              color: "#02c2e6",
              fontWeight: 400,
              fontSize: 15,
            },
          },
          {
            text: "30%",
            x: "center",
            top: "52%",
            textStyle: {
              color: "#02c2e6",
              fontSize: 12,
              fontWeight: "100",
            },
          },
        ],
        polar: {
          radius: ["44%", "50%"],
          center: ["50%", "60%"],
        },
        angleAxis: {
          max: 100,
          show: false,
        },
        radiusAxis: {
          type: "category",
          show: true,
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            name: "",
            type: "bar",
            roundCap: true,
            barWidth: 60,
            showBackground: true,
            backgroundStyle: {
              color: "rgba(66, 66, 66, .3)",
            },
            data: [80],
            coordinateSystem: "polar",

            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: "#449EFF",
                  },
                  {
                    offset: 1,
                    color: "#60DAFF",
                  },
                ]),
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
        title: [
          {
            text: "",
            textAlign: "auto",
            left: 60,
            textStyle: {
              color: "#02c2e6",
              fontWeight: 400,
              fontSize: 15,
            },
          },
          {
            text: "30%",
            x: "center",
            top: "52%",
            textStyle: {
              color: "#02c2e6",
              fontSize: 12,
              fontWeight: "100",
            },
          },
        ],
        polar: {
          radius: ["44%", "50%"],
          center: ["50%", "60%"],
        },
        angleAxis: {
          max: 100,
          show: false,
        },
        radiusAxis: {
          type: "category",
          show: true,
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            name: "",
            type: "bar",
            roundCap: true,
            barWidth: 60,
            showBackground: true,
            backgroundStyle: {
              color: "rgba(66, 66, 66, .3)",
            },
            data: [80],
            coordinateSystem: "polar",

            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: "#449EFF",
                  },
                  {
                    offset: 1,
                    color: "#60DAFF",
                  },
                ]),
              },
            },
          },
        ],
      },
      statistics: {
        grid: {
          left: "15%",
          top: "0%",
          right: "15%",
          bottom: "20%",
        },
        legend: {
          top: 1,
          right: 0,
          data: ["全部", "良品", "不良"],
          textStyle: {
            color: "#fff",
            fontSize: 9,
          },
          itemWidth: 13,
          itemHeight: 6,
          orient: "vertical",
        },
        color: ["#fff"],
        xAxis: {
          type: "value",
          name: "数量",
          nameTextStyle: {
            color: "#01c4f7",
          },
          axisLabel: {
            formatter: "{value}",
          },
          axisLine: {
            color: "#020a30",
            show: true,
          },
          axisLabel: {
            color: "#01c4f7",
          },
          splitLine: {
            lineStyle: {
              color: "#161e40",
              type: "dashed",
            },
          },
        },
        yAxis: {
          data: [],
          axisLabel: {
            color: "#01c4f7",
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            color: "#161e40",
          },
          inverse: true,
          type: "category",
        },
        series: [
          {
            barGap: 1.5,
            barWidth: "6",
            data: [],
            type: "bar",
            name: "全部",
            itemStyle: {
              barBorderRadius: [5, 5, 5, 5],
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: "#047bd7" },
                { offset: 1, color: "#01d5fc" },
              ]),
            },
          },
          {
            barGap: 1.5,
            barWidth: "6",
            data: [],
            type: "bar",
            name: "良品",
            itemStyle: {
              barBorderRadius: [5, 5, 5, 5],
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: "#0bd7a6" },
                { offset: 1, color: "#83fbf0" },
              ]),
            },
          },
          {
            barGap: 1.5,
            barWidth: "6",
            data: [],
            type: "bar",
            name: "不良",
            itemStyle: {
              barBorderRadius: [5, 5, 5, 5],
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: "#d7960b" },
                { offset: 1, color: "#fdc977" },
              ]),
            },
          },
        ],
      },
      tableConfig: {
        headerHeight: 28,
        headerBGC: "#021950",
        oddRowBGC: "#021950",
        evenRowBGC: "transparent",
        rowNum: 3,
        header: [
          '<span style="color:#01c4f7;">巡查内容</span>',
          '<span style="color:#01c4f7;">列</span>',
        ],
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
        oddRowBGC: "#021950",
        evenRowBGC: "transparent",
        data: [
          // ['<span style="color:#01c4f7;">良率预警  94%</span>'],
          // ["WIP等待预警超过15天"],
        ],
      },
    };
  },
  inject:['reload'],
  created() {
    this.getData();
  },
  mounted() {
    let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(() => {
      _this.time =
        new Date().toLocaleDateString() + new Date().toLocaleTimeString(); // 修改数据date
    }, 1000);
    this.timer1 = setInterval(() => {
      this.reload()
      // this.getData()
    }, 600000);
  },
  methods: {
    getData() {
      // Sign/WIPWarning
      this.$http.get("/api/Sign/WIPWarning").then((res) => {
        let obj = JSON.parse(res.data);
        // console.log(obj,"WIPWarning")
        if(obj || obj.length) {
          obj.forEach((item,idx)=>{
            
            if(!(idx%2 ===0)) {
              // let str = obj[idx].Column1.slice(3)
              obj[idx].Column1 = '<span style="color:#01c4f7;">'+obj[idx].Column1 + '</span>'
            }else {
              // obj[idx].Column1 = obj[idx].Column1.slice(3)
            }
            this.tableConfig1.data.push([obj[idx].Column1])
          })
        }
        console.log(this.tableConfig1.data,"WIPWarning")
        // this.tableConfig1.data = [obj]
        // console.log(this.tableConfig1,"this.tableConfig1")
      });
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
        this.$nextTick(() => {
          let yieldData = echarts.init(this.$refs.yieldData);
          yieldData.setOption(this.yieldData);
          let investmentData = echarts.init(this.$refs.investmentData);
          investmentData.setOption(this.investmentData);
          let produceData = echarts.init(this.$refs.produceData);
          produceData.setOption(this.produceData);
        });
      });
      this.$http.get("/api/Sign/SelDefect").then((res) => {
        let arr = JSON.parse(res.data);
        arr.sort(function (a, b) {
          return b.num - a.num;
        });
        arr.forEach((el, idx) => {
          if (idx < 5) {
            this.inferiorData.xAxis.data.push(el.defect_name);
            this.inferiorData.series[0].data.push(el.num);
          }
        });
        this.$nextTick(() => {
          let inferiorData = echarts.init(this.$refs.inferiorData);
          inferiorData.setOption(this.inferiorData);
          
        });
      });
      this.$http.get("/api/Sign/SelTodayInfo").then((res) => {
        let arr = JSON.parse(res.data);
        // return
        console.log("SelTodayInfo", arr);
        // this.
        this.daYield = arr.ToDaySign;
        this.yesterday = arr.TomorrowSign;
        this.yesterdaYield = Math.round(arr.TomorrowYiledRate * 100);
        
        this.daYieldData.title[1].text =
          Math.round(arr.ToDayPassRate * 100) + "%";
        this.daYieldData.series[0].data = [Math.round(arr.ToDayPassRate * 100)];
        this.dayPassRateData.title[1].text =
          Math.round(arr.ToDayYiledRate * 100) + "%";
        this.dayPassRateData.series[0].data = [
          Math.round(arr.ToDayYiledRate * 100),
        ];
        this.$nextTick(() => {
          let dayPassRateData = echarts.init(this.$refs.dayPassRateData);
          dayPassRateData.setOption(this.dayPassRateData);
          let daYieldData = echarts.init(this.$refs.daYieldData);
          daYieldData.setOption(this.daYieldData);
        });
      });
      this.$http.get("/api/Sign/SelDefectRateByGroup").then((res) => {
        let arr = JSON.parse(res.data);
        console.log("SelDefectRateByGroup", arr);
        this.proportion1.title[0].text = arr[0].DefecGrouptName;
        this.proportion1.title[1].text =
          (arr[0].Rate ? Math.round(arr[0].Rate * 100) : 0) + "%";
        this.proportion1.series[0].data = [
          arr[0].Rate ? Math.round(arr[0].Rate * 100) : 0,
        ];
        this.proportion2.title[0].text = arr[1].DefecGrouptName;
        this.proportion2.title[1].text =
          (arr[1].Rate ? Math.round(arr[1].Rate * 100) : 0) + "%";
        this.proportion2.series[0].data = [
          arr[1].Rate ? Math.round(arr[1].Rate * 100) : 0,
        ];
        this.$nextTick(() => {
          let myChart1 = echarts.init(this.$refs.proportion1);
          myChart1.setOption(this.proportion1);
          let myChart2 = echarts.init(this.$refs.proportion2);
          myChart2.setOption(this.proportion2);
        });
      });
      this.$http.get("/api/Sign/SelDefectByGroup").then((res) => {
        let arr = JSON.parse(res.data);
        // return
        console.log("SelDefectByGroup", arr);
        arr.forEach((el, idx) => {
          this.statistics.yAxis.data.push(el.DEFECT_GROUP_NAME);
          this.statistics.series[0].data.push(el.total);
          this.statistics.series[1].data.push(el.total - el.cmp);
          this.statistics.series[2].data.push(el.cmp);
        });
        this.$nextTick(() => {
          let myChart = echarts.init(document.getElementById("statistics"));
          myChart.setOption(this.statistics);
        });
      });
      this.$http.get("/api/Sign/SelYieldRate").then((res) => {
        let arr = JSON.parse(res.data);
        arr.forEach((el, idx) => {
          if (idx < 14) {
            this.dayData.xAxis.data.push(this.getWeek(el.DayInfo));
            this.dayData.series[0].data.push(
              el.Rate ? Math.round(el.Rate * 100) : 0
            );
          }
        });
        this.$nextTick(() => {
          let dayData = echarts.init(this.$refs.dayData);
          dayData.setOption(this.dayData);
        });
      });
      this.$http.get("/api/Sign/SelPassRate").then((res) => {
        let arr = JSON.parse(res.data);
        console.log(arr, "SelPassRate");
        // if(arr)
        arr.forEach((el, idx) => {
          if (idx < 7) {
            this.passRateData.xAxis.data.push(this.getWeek(el.DayInfo));
            this.passRateData.series[0].data.push(
              el.Rate ? Math.round(el.Rate * 100) : 0
            );
          }
        });
        this.$nextTick(() => {
          let passRateData = echarts.init(this.$refs.passRateData);
          passRateData.setOption(this.passRateData);
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
  padding: 1vh 2vw 1.8vh !important;
}
.header {
  height: 12vh;
  width: 100%;
  font-size: 3.2rem;
  letter-spacing: 10px;
  text-align: center;
  font-weight: 600;
  line-height: 10vh;
  background: url(../../static/img/toubu.png) no-repeat 50% 0%;

  color: #01c4f7;
}
.company {
  width: 4.8vw;
  height: 7.8vh;
  position: absolute;
  background: url(../../static/img/logo.png) no-repeat;
  background-size: 100% 100%;
  left: 1.5vw;
}
.header .tip {
  font-size: 1rem;
  letter-spacing: 1px;
  line-height: 1vh;
  position: absolute;
  right: 2vw;
  top: 0;
}
.header .tip p {
  text-align: right;
  color: #fff;
  margin: 0;
}
.content {
  height: 85vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.left_box {
  float: left;
  width: 22vw;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.center_box {
  width: 49vw;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.right_box {
  width: 22vw;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.center_box .data_top {
  height: 25%;
  padding: 2.4vh 2vw;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
.num_data {
  font-size: 1rem;
  width: 5vw;
  border: 1px solid #1a3f81;
  border-radius: 0.5rem;
  color: #01c4f7;
  box-shadow: 0px 0px 30px #041d52 inset;
  padding: 1vh 0 1vh 5vw;
  text-align: left;
  position: relative;
}
.num_data::before {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10%;
  width: 3rem;
  height: 3rem;
  border: 1px solid #173b7b;
  border-radius: 50%;
  background: url(../../static/img/icon.png) no-repeat 50% 50%;
  background-size: 50% 50%;
}
.num_data p {
  margin-bottom: 0.3vh;
}
.num_data > span {
  font-size: 2rem;
  color: #fff;
  font-weight: 500;
}
.num_data > span > span {
  font-size: 1rem;
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

.charts_pie {
  float: left;
  width: 4vw;
  height: 100%;
}
.center_box .charts_line {
  height: 75%;
}
.center_box .charts_line p {
  margin-bottom: 0px !important;
}

.border_line {
  padding: 20px;
  padding-top: 45px;
  box-sizing: border-box;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 19vh;
  background: url(../../static/img/box2.png) no-repeat;
  background-size: 100% 100%;
}

.center_box .border_line:first-child {
  background: url(../../static/img/box.png) no-repeat;
  background-size: 100% 100%;
  height: 63.5vh;
  padding-top: 45px;
}
.center_box .border_line:last-child {
  background: url(../../static/img/box1.png) no-repeat;
  background-size: 100% 100%;
  height: 19vh;
  padding-top: 45px;
}
.border_line .title {
  position: absolute;
  top: 10px;
  left: 15px;
}
</style>