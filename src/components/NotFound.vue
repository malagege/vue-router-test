<template>
    <div>
        Not Found 404
        <br>
        <button v-on:click="test"> on test</button>
    </div>
</template>


<script>
export default {
    methods:{
        test(){
            console.log(this.$route.path.split('/'));
            this.$router.push({
            name: 'NotFound',
            // :pathMatch 為 下面參數可以帶入
            // http://localhost:3000/#/123/456
            params: { pathMatch: ['123','456'] },
            })
        }
    }
}
</script>