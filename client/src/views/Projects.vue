<template>
	<v-container class="home">
		<v-layout>
			<v-flex xs4>
				<Projects></Projects>
			</v-flex>
			<v-flex xs8 class="pl-4" v-if="currentProject">
				<Tasks></Tasks>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
// import authentication from '@/store/authentication';
import { mapGetters, mapState } from 'vuex';
import Projects from '@/components/Projects';
import Tasks from '@/components/Tasks';
import router from '@/router';

export default {
	components: {
		Projects,
		Tasks,
	},
	mounted() {
		if (!this.isLoggedIn) {
			return router.push('/login');
		}
		return;
	},
	computed: {
		...mapGetters('authentication', ['isLoggedIn']),
		...mapState('projects', ['currentProject']),
	},
};
</script>
