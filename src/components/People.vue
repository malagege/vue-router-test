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
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter')
    getUser(to.params.id, (err, User) => {
      next(vm => vm.setData(err, User))
    })
  },
  // 路由改變前，組件就已經渲染完了
  // 邏輯稍稍不同
  async beforeRouteUpdate(to, from) {
    console.log('beforeRouteUpdate')
    getUser(to.params.id, (err, User) => {
      this.setData(err,User)
    })
  },
  methods: {
    setData (err, User) {
      if (err) {
        this.error = err.toString()
      } else {
        this.User = User
      }
    }
  }
}
</script>