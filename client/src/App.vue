<template>
  <v-app>
    <Toolbar />
    <div id="app">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view />
    </div>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Toolbar from './components/Toolbar';

export default {
	name: 'App',
	components: {
		HelloWorld,
    Toolbar
	},
	data() {
		return {
			//
		};
  }
};
</script>
