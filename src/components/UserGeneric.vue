<template>
    <div>
        UserGeneric paramter.afterUser: {{ $route.params.afterUser}}
        <br>

    </div>
</template>

<script>
export default {
    methods:{
        test(){
            this.$router.push({
            name: 'NotFound',
            params: { pathMatch: this.$route.path.split('/') },
            })
        }
    }
}
</script>