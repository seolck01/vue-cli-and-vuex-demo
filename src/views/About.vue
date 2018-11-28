<template>
  <div class="about">
    <h3>Count is {{count}}</h3>
    <button>+++</button>
  </div>
</template>

<script>
    export default{
        computed:{
            count(){
                return this.$store.state.count
            }
        }
    }
</script>
