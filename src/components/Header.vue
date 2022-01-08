<template>
  <div class="header">
	<h1>HEADER</h1>
	<button @click="changeStatus">
		{{auth? 'LOGOUT':'LOGIN'}}
	</button>
  </div>
</template>

<script>


export default {
	data(){
		return{
			auth: false
	}
},
created(){
this.auth = localStorage.getItem('auth') !== null
},
methods:{
		changeStatus(){
			if (this.auth) {
				localStorage.removeItem('auth')
				this.$router.push({name: 'main'})
			}
			else{
				localStorage.setItem('auth', true)
				this.auth = true

			}
		}

	}


		



}
</script>

<style lang="scss" scoped >
	.header{
		background: chartreuse;
		display: flex;
		padding: 0  40px;
		justify-content: space-between;
		button{
			padding:0 20px;
		}
	}
</style>
