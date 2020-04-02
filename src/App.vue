<template>
<div class="container">
    <div class="canvas">
        <svg class="chart" width="500" height="500" viewBox="0 0 50 50">
            <circle v-for="(c,k) in [1,2,3,4,5,6,7]" 
                   :r="radius" 
                   :cx="cx" 
                   :cy="cy" 
                   :class="cssclass" 
                   :key="k"></circle>
           
        </svg>
    </div>  
        <div class="legend">
            <p class="title">Что мешает во время работы дома?</p>    
            <ul class="caption-list">
               <li class="caption-item">еда</li>
               <li class="caption-item">соседи</li>
               <li class="caption-item">отсутствие рабочего места</li>
               <li class="caption-item">мало двигаюсь</li>
               <li class="caption-item">отсутствие чёткого графика работы</li>
               <li class="caption-item">неудобная коммуникация с коллегами</li>
               <li class="caption-item">много ленюсь</li>
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
           cssclass:"unit"
                  
       }   
   }

}

</script>