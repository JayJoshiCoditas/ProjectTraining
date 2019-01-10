<template>
    <div>
        {{msg}}
        <div>
            <button @click="nextState()">Next State</button>
        </div>
    </div>
</template>

<script>
import router from '@/router'

export default {
  name: 'admissionPage',
  data () {
    return {
      msg: 'Admission Page'
    }
  },
  methods: {
      nextState(){
          router.push({
              name: "homePage"
          })
      },
  },
}
</script>

<style scoped>

</style>
