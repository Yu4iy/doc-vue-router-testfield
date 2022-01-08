<template>
  <div class="main-page">
	<button @click="$router.push({name:'first-page'})">first-page</button>

  </div>
</template>

<script>


export default {
  components: {

  }
}
</script>

<style lang="scss" scoped >
.main-page{
	height: 100vh;
	background: rgb(143, 16, 168);
	display: flex;
	justify-content: center;
	align-items: center;

}
button{
	background: transparent;
	border: 3px solid black;
	font-size: 1.5625rem;
	padding: 5px 10px;
	margin-right: 25px;
	text-transform: uppercase;
	font-weight: bold;
	transition: linear 0.2s;
	cursor: pointer;
	&:hover{
		border: 3px solid rgb(255, 255, 255);
		color: #fff;
		
	}
	&:last-child{
		margin-right: 0;
	}
}
</style>
