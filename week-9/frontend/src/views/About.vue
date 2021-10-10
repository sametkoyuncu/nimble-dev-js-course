<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'About',
  components: {
    HelloWorld
  }
}
</script>

<template lang="pug">
  .about
    h1 This is an about page
    HelloWorld(count = "3", msg="This is İstanbul!")
  </div>
</template>
