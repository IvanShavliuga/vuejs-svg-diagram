<template>
<div class="canvas">
  <svg class="chart" width="500" height="500" viewBox="0 0 50 50">
      <text :x="0" :y="10" font-size="4px">{{select}}</text>
     <rect v-for="(c,k) in units" 
          :x="(c.id-1)*3+3.5" 
          :y="(50-c.value*1.2)" 
          width="1.8" 
          
          :height="c.value*1.2"
          :style="styleel(c)" 
          :key="k"
          @mouseover="moveselect(c,true)"
          @mouseleave="moveselect(c,false)">
     </rect>
  </svg>
</div>  
</template>
<script>
export default {
    data() {
        return {
           select:""                   
        }
    },
    props:{
       units: {
          type: Array,
          required: true
       }
    },
    methods: {
       styleel(c) {
           this.$emit("style",c);
            return "fill: "+c.color+";"+c.dashoffset+";"+"stroke: "+c.color+"; z-index"+c.zindex+";opacity:"+(c.select*0.2+0.8);
       },
       moveselect(c,b) {
           if(b) {                             
               this.select="#"+c.id +" value: "+c.value;
               c.select=true;
           }else{
               this.select="";
               c.select=false;
           }   
           this.$emit("select", {unit:c,select:b,selecttext:this.select});
                     
       }
          
    }

}

</script>