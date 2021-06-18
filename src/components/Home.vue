<template>
    <div>
        Home
        <button v-on:click="pushLink">中文測試</button>
    </div>
</template>

<script>
const username = '中文測試'
// 我們可以手動建立 url，但我們必須自己處理編碼

export default {
    methods: {
        pushLink(){
            this.$router.push(`/users/${username}`) // -> /user/eduardo
        }
    }
}
</script>