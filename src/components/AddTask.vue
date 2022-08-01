<template>
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">添加Task</label>
    <input type="text" class="form-control" v-model="inputValue" @keydown.enter="add(inputValue)"
    >
  </div>
  <hr>
  <ul class="list-group">
    <li class="list-group-item d-flex justify-content-between" aria-disabled="true" v-for="(item,index) in todos"
        :key="'todo-'+index">
      <div class="mb-0 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" @click.prevent="check(index)">
        <label class="form-check-label" for="exampleCheck1">{{ item }}</label>
      </div>
      <div class="float-right">
        <del-button @click="delItem(index)"></del-button>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed } from 'vue'
import store from '@/store'
import DelButton from '@/components/DelButton.vue'
export default defineComponent({
  name: 'AddTask',
  components: { DelButton },
  setup () {
    const inputValue = ref('')
    const add = (value: string) => {
      if (value.trim() === '') return
      store.commit('add', value)
      inputValue.value = ''
    }
    const delItem = (index: number) => {
      store.commit('delete', index)
    }
    const check = (index: number) => {
      store.commit('check', index)
    }

    return reactive({
      inputValue,
      add,
      delItem,
      check,
      todos: computed(() => store.state.todos)
    })
  }
})
</script>

<style scoped>

</style>
