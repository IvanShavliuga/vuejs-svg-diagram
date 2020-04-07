<template>
   <div class="legend"> 
	 
	   <p class="title">Что мешает во время работы дома?</p>    
	   <ul class="caption-list">
	      <li class="caption-item" v-for="(c,k) in units" 
	          :style="(c.select)?'font-weight:bold;':'font-weight:normal;'"
	          @mouseover="moveselect(c,true)"
             @mouseleave="moveselect(c,false)">
	            <i class="circle" 
	                :style="styleel(c)" 
	                ></i>
	            #{{c.id}} {{c.title}}</li>              
	   </ul>
    </div>
</template>
<script>
export default {
    props:{
       units: {
          type: Array,
          required: true
       }
    },
    methods: {
       styleel(c) {
           this.$emit("style",c);
           return "background-color: "+c.color;           
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
