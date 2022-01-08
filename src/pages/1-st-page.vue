<template>
  <div class="first-page">
		<Card
		v-for="(elem, index) in users" :key="index"
		:elem = elem 
		/>
  </div>
</template>

<script>

import Card from '../components/card.vue'
export default {


  components: {
	Card
  },
  data(){
	return{
		users:
		[
			{
				id: 1,
			},

			{
				id: 2,
			},

			{
				id: 3,
			}
		]
	}
  }
}
</script>

<style lang="scss" scoped >
.first-page{
	height: 100vh;
	background: rgb(102, 43, 87);
	font-size: 40px;
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: center;
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
}
</style>
