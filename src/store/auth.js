import { defineStore } from "pinia";
import { reactive, computed } from 'vue'

const useAuthStore = defineStore('pinia', () => {

    const state = reactive({
        access: '',
        refresh: ''
    })

    const access = computed(() => state.access)

})