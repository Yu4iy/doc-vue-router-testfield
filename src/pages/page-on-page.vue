<template>
  <div class="page">
	{{test.par}}
  </div>
</template>

<script>


export default {
  data(){
	return{
		test:null,
		users:
		[
			{
				id: 1,
				par:'foo1'
			},

			{
				id: 2,
				par:'foo2'
			},

			{
				id: 3,
				par:'foo3'
			}
		]
	}
  },
	
  components: {

  },
  created(){
	console.log(this.$route.params.id);
	this.test = this.users.find(elem => elem.id == this.$route.params.id)
  }
}
</script>

<style lang="scss" scoped >
.page{
	height: 100vh;
	background: rgba(202, 112, 112, 0.418);
	font-size: 40px;
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
