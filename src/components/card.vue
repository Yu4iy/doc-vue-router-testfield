<template>
  <div class="card">
	<div
		@click="$router.push({path: `${elem.id}`})"
	>
		{{elem.id}}                           
	</div>
  </div>
</template>

<script>


export default {
  components: {

  },
  props:{
	elem:Object
  }
}
</script>

<style lang="scss" scoped >
.card{
	background: rgba(27, 173, 218, 0.712);
	display: flex;
	justify-content: center;
	align-items: center;

	div{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100px;
		height: 100px;
		margin: 20px;
		font-size: 40px;
		font-weight: bold;
		background: cornflowerblue;
		transition: linear 0.2s;
		cursor: pointer;
		&:hover{
		background: rgb(37, 63, 112);
		color: #fff;
		
	}

	}
}
</style>
