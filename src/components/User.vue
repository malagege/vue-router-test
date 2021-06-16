<template>
    <div>
        User  {{ $route.params.id }}
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
}
</script>