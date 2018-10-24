import Vue from 'vue';
// import router from '../router';
import HTTP from '../http';

export default {
	namespaced: true,
	state: {
		currentProject: null,
		projects: [],
		newProjectTitle: null,
		setCreateProjectError: null,
		setSaveProjectError: null,
		setDeleteProjectError: null,
	},
	actions: {
		fetchProjects({ commit }) {
			return HTTP()
				.get('/projects')
				.then(({ data }) => {
					commit('setProject', data);
				})
				.catch(() => {
					commit(
						'setCreateProjectError',
						'An error has occured trying to retrieving your project.',
					);
				});
		},
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
		saveProject({ commit }, project) {
			return HTTP()
				.patch(`/projects/${project.id}`, project)
				.then(() => {
					commit('unsetEditMode', project);
				})
				.catch(() => {
					commit(
						'setSaveProjectError',
						'An error has occured trying to save your project.',
					);
				});
		},
		deleteProject({ commit }, project) {
			return HTTP()
				.delete(`/projects/${project.id}`, project)
				.then(() => {
					commit('removeProject', project);
				})
				.catch(() => {
					commit(
						'setDeleteProjectError',
						'An error has occured trying to delete your project.',
					);
				});
		},
	},
	getters: {},
	mutations: {
		setCurrentProject(state, project) {
			state.currentProject = project;
		},
		setNewProjectTitle(state, title) {
			state.newProjectTitle = title;
		},
		appendProject(state, project) {
			state.projects.push(project);
		},
		setCreateProjectError(state, error) {
			state.setCreateProjectError = error;
		},
		setSaveProjectError(state, error) {
			state.setSaveProjectError = error;
		},
		setProject(state, projects) {
			state.projects = projects;
		},
		setProjectTitle(state, { project, title }) {
			project.title = title;
		},
		setEditMode(state, project) {
			Vue.set(project, 'isEditMode', true);
		},
		unsetEditMode(state, project) {
			Vue.set(project, 'isEditMode', false);
		},
		removeProject(state, project) {
			state.projects.splice(state.projects.indexOf(project), 1);
		},
	},
};
