import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
// import About from './components/About.vue'
import User from './components/User.vue'
import NotFound from './components/NotFound.vue'
import UserGeneric from './components/UserGeneric.vue'
import UserProfile from './components/UserProfile.vue'
import UserPosts from './components/UserPosts.vue'
import UserHome from './components/UserHome.vue'
import People from './components/People.vue'

const About = import('./components/About.vue')

// 2. 定義一些路由
// 每個路由都需要映射到一個組件。
// 我們後面再討論嵌套路由。
const routes = [
    { path: '/', component: Home },
    { name:'about', path: '/about', component: About },
    // 動態段以冒號開始
    { path: '/users/:id', component: User ,
      children: [
        // UserHome will be rendered inside User's <router-view>
        // when /user/:id is matched
        // 當 /user/:id 匹配成功
        // UserHome 將被渲染到 User 的 <router-view> 內部
        { path: '', component: UserHome },
        {
          // 當 /user/:id/profile 匹配成功 
          // UserProfile 將被渲染到 User 的 <router-view> 內部
          path: 'profile',
          component: UserProfile,
        },
        {
          // 當 /user/:id/posts 匹配成功
          // UserPosts 將被渲染到 User 的 <router-view> 內部
          path: 'posts',
          component: UserPosts,
        },
        {
          name:'people', path:'/people/:id', component: People
        }
      ],
    },
    // 將匹配所有內容並將其放在 `$route.params.pathMatch` 下
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    // 將匹配以 `/user-` 開頭的所有內容，並將其放在 `$route.params.afterUser` 下
    { path: '/user-:afterUser(.*)', component: UserGeneric },
  ]
  
// 3. 創建路由實例並傳遞 `routes` 配置
// 你可以在這裡輸入更多的配置，但我們在這裡
// 暫時保持簡單
const router = createRouter({
    // 4. 內部提供了 history 模式的實現。為了簡單起見，我們在這裡使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的縮寫
  })
  

createApp(App).use(router).mount('#app')
