<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    ...mapActions(['increment', 'decrement'])
  },
  computed: {
    ...mapState(['count'])
  }
}
</script>

<template lang="pug">
.hello {{ msg   }}
  p
  .counter {{ count }}
  button.decrement(@click="decrement") -
  button.increment(@click="increment") +
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
