<template>
  <div class="loyout">
	<Header
	
	/>
    <router-view></router-view>

  </div>
</template>

<script>

import Header from '../components/Header.vue'
export default {

	components: {Header},

	data(){
		return{

		}

	}
}
</script>

<style lang="scss" scoped >

</style>
