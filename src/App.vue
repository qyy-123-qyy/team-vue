<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html body{
  margin: 0;
}
	html,body,#app{
 		height: 100%;
 		width: 100%;
	}
 
</style>
