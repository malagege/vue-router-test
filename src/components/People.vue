<template>
  
  <div class="User">
    People start
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="User" class="content">
      <h2>{{ User.name.title }}  {{ User.name.first }}  {{ User.name.last }}</h2>
      <p>{{ User.email }}</p>
    </div>
  </div>
</template>

<script>
import {getUser} from '../testApi'

export default {
  data() {
    return {
      loading: false,
      User: null,
      error: null,
    }
  },
  created() {
    // watch 路由的參數，以便再次獲取數據
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchData()
      },
      // 組件創建完後獲取數據，
      // 此時 data 已經被 observed 了
      { immediate: true }
    )
  },
  methods: {
    fetchData() {
      this.error = this.User = null
      this.loading = true
      // replace `getUser` with your data fetching util / API wrapper
      // 用你的數據獲取 util 或 API 替換 `getUser`
      getUser(this.$route.params.id, (err, User) => {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.User = User
        }
      })
    },
  },
}
</script>