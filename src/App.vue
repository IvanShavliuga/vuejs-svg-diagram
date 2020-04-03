<template>
<div class="container">
    <div class="canvas">
        <svg class="chart" width="500" height="500" viewBox="0 0 50 50">
            <text :x="cx" :y="cy" font-size="3px">{{select}}</text>
            <circle v-for="(c,k) in units" 
                   :r="c.radius+c.select*0.5" 
                   :cx="cx" 
                   :cy="cy" 
                   :class="cssclass" 
                   :style="stylede(c)"
                   :key="k"
                   @mouseover="moveselect(c,true)"
                   @mouseleave="moveselect(c,false)"></circle>
           
        </svg>
    </div>  
        <div class="legend">
            <p class="title">Что мешает во время работы дома?</p>    
            <ul class="caption-list">
               <li class="caption-item" v-for="(c,k) in units" 
                   :style="(c.select)?'font-weight:bold;':'font-weight:normal;'">
                     <i class="circle" :style="styleel(c)"></i>#{{c.id}} {{c.title}}</li>
               
            </ul>
    </div>
</div>
</template>
<script>
export default {
   data () {
       return {
           radius: 10,
           select:"",
           cx: "50%",
           cy: "50%",
           cssclass:"unit",
           units: [{
              id:1,
              title:"еда",
              color:"#86cfa3",
              dashoffset:"0",
              dasharray:"8 100",
              radius:10,
              select:false,
              zindex:1         
           },{
              id:2,
              title:"соседи",
              color:"#ffc7ec",
              dashoffset:"-8",
              dasharray:"11 100",
              radius:10,
              select:false,
              zindex:1           
           },{
              id:3,
              title:"отсутствие рабочего места",
              color:"#a2c6e0",
              dashoffset:"-19",
              dasharray:"11 100",
              radius:10,
              select:false,
              zindex:1           
           },{
              id:4,
              title:"мало двигаюсь",
              color:"#adffd8",
              dashoffset:"-30",
              dasharray:"14 100",
              radius:10,
              select:false,
              zindex:1           
           },{
              id:5,
              title:"отсутствие чёткого графика работы",
              color:"#f8faa0",
              dashoffset:"-44",
              dasharray:"11 100",
              radius:10,
              select:false,
              zindex:1           
           },{
              id:6,
              title:"неудобная коммуникация с коллегами",
              color:"#f2c48f",
              dashoffset:"-55",
              dasharray:"5 100",
              radius:10,
              select:false,
              zindex:1                    
           },{
              id:7,
              title:"много ленюсь",
              color:"#e3bfe2",
              dashoffset:"-60",
              dasharray:"4 100",
              radius:10,
              select:false,
              zindex:1           
           }]
                  
       }   
   },
   methods: {
       stylede(u) {
           return "stroke-dashoffset: "+u.dashoffset+";"+"stroke: "+u.color+"; stroke-dasharray: "+u.dasharray+"; z-index"+u.zindex;
       },
       styleel(u) {
           return "background-color: "+u.color; 
       },
       moveselect(u,enter){
           if(enter) {
               this.units[u.id-1].zindex+=10;
               this.units[u.id-1].select=true;
               this.select="#"+u.id;
           }else{
               this.units[u.id-1].zindex-=10;
               this.units[u.id-1].select=false;
               this.select="";
           }        
       }  
   
   }

}

</script>260