<template>
    <div>
        <h1>{{ foo1 }}</h1>
        {{ message }}
        <img :src="pic"/>
        <!-- <my-component /> -->
        <ul>
        <li><router-link to="/a">/a</router-link></li>
        <li><router-link to="/parent/a">/parent</router-link></li>
        <li><router-link to="/parent/foo">/parent/foo</router-link></li>
        <li><router-link to="/parent/bar">/parent/bar</router-link></li>
      </ul>
    </div>
</template>
<script>
import getData from '@/utils'
import pic from '../../../static/imgs/logo.png'
import myComponent from '../showImg/index.vue'
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