<template>
<div>
<div class="container">
    <div class="canvas">
        <svg class="chart" width="500" height="500" viewBox="0 0 50 50">
            <text :x="cx" :y="cy" font-size="2px">{{select}}</text>
            <circle v-for="(c,k) in units" 
                   :r="c.radius+c.select*0.5" 
                   :cx="cx" 
                   :cy="cy" 
                   :class="cssclass" 
                   :style="stylede(c)"
                   :key="k"
                   :data-dct="c.value"
                   @mouseover="movesel(c,true)"
                   @mouseleave="movesel(c,false)"></circle>
           
        </svg>
    </div>  
    <app-legend :units="units" @style="styleel" @select="moveselect"></app-legend>    
</div>
<div class="container">
   <div>
      <form>
          <div  v-for="(c,k) in units">
              <input type="checkbox" name="select" v-model="c.select"> 
              <span>#{{c.id}}</span>
              <input type="text" name="color" v-model="c.color" :style="'background-color:'+c.color+';color:#fff'">
              <input type="text" name="dashoffset" v-model="c.dashoffset"> 
              <input type="text" name="dasharray" v-model="c.dasharray"> 
              <input type="text" name="title" v-model="c.title">  
          </div>
      </form>
   </div>
</div>
</div>
</template>
<script>
import Legend from "./Legend.vue";
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
              value:30,
              radius:10,
              select:false,
              zindex:1         
           },{
              id:2,
              title:"соседи",
              color:"#ffc7ec",
              dashoffset:"-8",
              value:10,
              dasharray:"11 100",
              radius:10,
              select:false,
              zindex:1           
           },{
              id:3,
              title:"отсутствие рабочего места",
              color:"#a2c6e0",
              dashoffset:"-19",
              value:10,
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
              value:5,
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
              value:5,
              select:false,
              zindex:1           
           },{
              id:6,
              title:"неудобная коммуникация с коллегами",
              color:"#f2c48f",
              dashoffset:"-55",
              value:30,
              dasharray:"5 100",
              radius:10,
              select:false,
              zindex:1                    
           },{
              id:7,
              title:"много ленюсь",
              color:"#e3bfe2",
              dashoffset:"-60",
              value:10,
              dasharray:"4 100",
              radius:10,
              select:false,
              zindex:1           
           }],
           summ:0
                  
       }   
   },
   methods: {
       stylede(u) {
           return "stroke-dashoffset: "+u.dashoffset+";"+"stroke: "+u.color+"; stroke-dasharray:"+u.dasharray+"; z-index"+u.zindex;
       },
       styleel(u) {
           return "background-color: "+u.color; 
       },
       moveselect(obj){
           if(obj.unit.select) {
               this.units[obj.unit.id-1].zindex+=10;
               this.units[obj.unit.id-1].select=true;
               this.select=obj.selecttext;
           }else{
               this.units[obj.unit.id-1].zindex-=10;
               this.units[obj.unit.id-1].select=false;
               this.select=obj.selecttext;
           }        
       },
       movesel(obj, select) {
           if(select) {
               this.units[obj.id-1].zindex+=10;
               this.units[obj.id-1].select=true;
               this.select="#"+obj.id;
           }else{
               this.units[obj.id-1].zindex-=10;
               this.units[obj.id-1].select=false;
               this.select="";
           } 
       }
   },
   components: {
       appLegend:Legend   
   }

}
</script>
