<template>
<div class="canvas">
  <svg class="chart" width="500" height="500" viewBox="0 0 50 50">
      <text :x="ctx" :y="cty" font-size="4px">{{select}}</text>
      <circle v-for="(c,k) in units" 
             :r="c.radius+c.select*0.5" 
             :cx="cx" 
             :cy="cy" 
             :class="cssclass" 
             :style="styleel(c)"
             :key="k"
             :data-dct="c.value"
             @mouseover="moveselect(c,true)"
             @mouseleave="moveselect(c,false)"></circle>
     
  </svg>
</div>  
</template>
<script>
export default {
    data() {
        return {
           radius: 10,
           select:"",
           cx: "50%",
           cy: "50%",
           ctx: "45%",
           cty: "53%",
           cssclass:"unit"
                    
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
            return "stroke-dashoffset: "+c.dashoffset+";"+"stroke: "+c.color+"; stroke-dasharray:"+c.dasharray+"; z-index"+c.zindex;
       },
       moveselect(c,b) {
           let select;
           if(b) {                             
               select="#"+c.id;
               c.select=true;
           }else{
               select="";
               c.select=false;
           }  
           this.$emit("select", {unit:c,select:b,selecttext:select});
                     
       }
          
    }

}

</script>