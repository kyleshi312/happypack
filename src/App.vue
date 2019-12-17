<template>
    <div id="app">
        <h1>{{ foo1 }}</h1>
        {{ message }}
        <img :src="pic"/>
        <my-component></my-component>
    </div>
</template>
<script>
import getData from './utils'
import Vue from 'vue'
import pic from './img/logo.png'
Vue.component('my-component', {
    template: '<img :src="url" />',
    data() {
      return {
        url: pic
      }
    }
  })

export default {
    data () {
        return {
            foo1: 'bar test',
            message: '333',
            pic
        }
    },
    methods: {
        async fetchData() {
            const data = await getData();
            this.message = data;
        }
    },
    created() {
        try {
            this.fetchData();
        } catch (e) {
            console.log(e)
        }
    }

}
</script>
<style lang="scss">
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        h1 {
            color: #CC3333;
        }
    }
</style>