<template>
    <div class="child">
        <h3>这里是子组件</h3>
        <div>childText: {{msg}}</div>
        <button type="button" @click="clickHandler">修改父组件文本</button>
        <button type="button" @click="clickHandler2">修改自己文本</button>
    </div>
</template>

<script>
    export default{
        name:'Child',
        computed:{
            msg(){
                return this.$store.state.childText
            }
        },
        methods:{
            clickHandler(){
                this.$store.commit('changeTestMsg','子组件修改夫组件的文本')
            },
            clickHandler2(){
                this.$store.commit('changeChildText','子组件修改自己后的文本')
            }
        },
        
    }
</script>

<style lang="less">
    
</style>