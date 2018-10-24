<template>
  <v-container class="home">
    <v-layout>
      <v-flex xs4>
        <Projects></Projects>
      </v-flex>
      <v-flex xs8 class="pl-4">
        <Panel title="Tasks">
          <h1>TESTING2</h1>
        </Panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import authentication from '@/store/authentication';
import { mapGetters } from 'vuex';
import Projects from '@/components/Projects';
import router from '@/router';

export default {
	components: {
		Projects,
	},
	mounted() {
		if (!this.isLoggedIn) {
			return router.push('/login');
		}
		return;
	},
	computed: {
		...mapGetters('authentication', ['isLoggedIn']),
	},
};
</script>
