<template>
<div class="container">
    <div class="canvas">
        <svg class="chart" width="500" height="500" viewBox="0 0 50 50">
            <circle v-for="(c,k) in units" 
                   :r="radius" 
                   :cx="cx" 
                   :cy="cy" 
                   :class="cssclass" 
                   :style="stylede(c)"
                   :key="k"></circle>
           
        </svg>
    </div>  
        <div class="legend">
            <p class="title">Что мешает во время работы дома?</p>    
            <ul class="caption-list">
               <li class="caption-item" v-for="(c,k) in units"><i class="circle" :style="styleel(c)"></i>#{{c.id}} {{c.title}}</li>
               
            </ul>
    </div>
</div>
</template>
<script>
export default {
   data () {
       return {
           radius: 10,
           cx: "50%",
           cy: "50%",
           cssclass:"unit",
           units: [{
              id:1,
              title:"еда",
              color:"#86cfa3",
              dashoffset:"0"           
           },{
              id:2,
              title:"соседи",
              color:"#ffc7ec",
              dashoffset:"-8"           
           },{
              id:3,
              title:"отсутствие рабочего места",
              color:"#a2c6e0",
              dashoffset:"-19"           
           },{
              id:4,
              title:"мало двигаюсь",
              color:"#adffd8",
              dashoffset:"-30"           
           },{
              id:5,
              title:"отсутствие чёткого графика работы",
              color:"#f8faa0",
              dashoffset:"-44"           
           },{
              id:6,
              title:"неудобная коммуникация с коллегами",
              color:"#f2c48f",
              dashoffset:"-55"           
           },{
              id:7,
              title:"много ленюсь",
              color:"#e3bfe2",
              dashoffset:"-60"           
           }]
                  
       }   
   },
   methods: {
       stylede(u) {
           return "dashoffset: "+u.dashoffset+";"+"stroke: "+u.color;
       },
       styleel(u) {
           return "background-color: "+u.color; 
       }   
   
   }

}

</script>