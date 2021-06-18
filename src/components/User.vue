<template>
    <div>
        User  {{ $route.params.id }}
        <br>
        <button v-on:click="test"> on test</button>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        console.log('toParams',toParams,'previousParams',previousParams);
      }
    )
  },
//   使用 beforeRouteUpdate 導航守衛，它也可以取消導航
  async beforeRouteUpdate(to, from) {
    // 對路由變化做出響應...
    // this.userData = await fetchUser(to.params.id)
    console.log('to',to,'from',from);
  },
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