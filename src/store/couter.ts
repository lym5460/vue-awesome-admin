import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const addCount = () => {
    count.value++
  }
  return {
    count,
    addCount,
  }
})
