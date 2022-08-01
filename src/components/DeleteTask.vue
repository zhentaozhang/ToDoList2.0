<template>
  <ul class="list-group">
    <li class="list-group-item d-flex justify-content-between" v-for="(item,index) in todos"
        :key="'todo-'+index">
      {{ item }}
    </li>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'
import store from '@/store'
export default defineComponent({
  setup () {
    return reactive({
      todos: computed(() => store.state.deletes)
    })
  }
})

</script>

<style scoped>

</style>
