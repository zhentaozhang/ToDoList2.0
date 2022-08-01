<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <Loading></Loading>
        <a class="navbar-brand" href="#"><b>ToDoList2.0</b></a>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-link" aria-current="page" to="/addtask"><b>待办事项</b></router-link>
            <router-link class="nav-link" to="/donetask"><b>已完成</b></router-link>
            <router-link class="nav-link" to="/deltask"><b>已删除</b></router-link>
          </div>
        </div>
      </div>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Loading from '@/components/Loading.vue'
export default defineComponent({
  name: 'Home',
  components: { Loading }
})
</script>

<style scoped>
</style>
