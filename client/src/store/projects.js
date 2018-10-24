import router from '../router';
import HTTP from '../http';

export default {
	namespaced: true,
	state: {
		projects: [],
		newProjectTitle: null,
		setCreateProjectError: null,
	},
	actions: {
		createProject({ commit, state }) {
			commit('setCreateProjectError', null);
			return HTTP()
				.post('/projects', {
					title: state.newProjectTitle,
				})
				.then(({ data }) => {
					commit('appendProject', data);
					commit('setNewProjectTitle', null);
				})
				.catch(() => {
					commit(
						'setCreateProjectError',
						'An error has occured trying to create your project.',
					);
				});
		},
	},
	getters: {},
	mutations: {
		setNewProjectTitle(state, title) {
			state.newProjectTitle = title;
		},
		appendProject(state, project) {
			state.projects.push(project);
		},
		setCreateProjectError(state, error) {
			state.setCreateProjectError = error;
		},
	},
};
