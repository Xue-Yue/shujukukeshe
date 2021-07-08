<!-- echartscom.vue -->
<template>
  <div class="charttest">
    <div style="width:700px;height:600px;" :id="echarts" class="echarts" ref="echarts">
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name:'piechart',
  props: {
    chartData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
    };
  },
  methods: {
    drawCharts() {
      const myChart = echarts.init(document.getElementById(this.echarts));
      myChart.setOption({
        legend: {
          tittle:'使用率排行',
          top: 'bottom'
        },
        toolbox: {
          show: true,
          feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        series: [
          {
            name: '面积模式',
            type: 'pie',
            radius: [50, 250],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            data: this.chartData
          }
        ]
      });
    }
  },
  computed: {
    echarts() {
      return 'echarts' + Math.random() * 100000;
    }
  },
  mounted() {
    this.drawCharts();
  },
  components: {}
};
</script>

<style></style>