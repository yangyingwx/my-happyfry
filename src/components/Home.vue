<template>
  <div class="home_container">
    <itemcontainer></itemcontainer>
  </div>
</template>

<script>
import ItemContainer from './ItemContainer'
export default {
  name: 'Home',
  data () {
    return {
      
    }
  },
  components: {
  	'itemcontainer': ItemContainer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home_container{
    height: 100%;
  }
</style>
