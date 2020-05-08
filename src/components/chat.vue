<template>
    <div>
        <div id="myChart" style="width:100%; height:200px;"></div>
    </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    
    drawLine(){

        let myChart = this.$echarts.init(document.getElementById('myChart'))

        myChart.setOption({
            legend: {},
            tooltip: {},
            dataset: {
               dimensions: ['product', 'IN', 'OUT'],
               source: [
                 {product: 'January', 'IN': 20, 'OUT': 30},
                 {product: 'Feburary', 'IN': 30, 'OUT': 50},
                 {product: 'March', 'IN': 40, 'OUT': 20},
               ]
            },
            grid:{
              height: '60%'
            },
            xAxis: {
               type: 'category'
            },
            yAxis: {},
            series: [
                 {type: 'bar',barWidth : 20, itemStyle:{normal:{color:'#f09b1d'}}},
                 {type: 'bar',barWidth : 20,itemStyle:{normal:{color:'#00c25f'}}}
            ]
        });
    }
  }
}
</script>