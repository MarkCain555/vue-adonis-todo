import Vue from 'vue';
import HTTP from '../http';

export default {
	namespaced: true,
	state: {
		tasks: [],
		newTaskName: null,
		setCreateProjectError: null,
		setSaveProjectError: null,
		setDeleteProjectError: null,
	},
	actions: {
		fetchTasksForProject({ commit }, project) {
			return HTTP()
				.get(`/projects/${project.id}/tasks`)
				.then(({ data }) => {
					commit('setTasks', data);
				})
				.catch(() => {
					commit(
						'setSaveProjectError',
						'An error has occured trying to save your project.',
					);
				});
		},
		createTask({ commit, state, rootState }) {
			commit('setCreateTaskError', null);
			return HTTP()
				.post(
					`/projects/${rootState.projects.currentProject.id}/tasks`,
					{
						description: state.newTaskName,
					},
				)
				.then(({ data }) => {
					commit('appendTask', data);
					commit('setNewTaskName', null);
				})
				.catch(() => {
					commit(
						'setCreateTaskError',
						'An error has occured trying to create your task.',
					);
				});
		},
		saveTask({ commit }, task) {
			return HTTP()
				.patch(`/tasks/${task.id}`, task)
				.then(() => {
					commit('unsetEditMode', task);
				})
				.catch(() => {
					commit(
						'setSaveTaskError',
						'An error has occured trying to save your task.',
					);
				});
		},
		deleteTask({ commit }, task) {
			return HTTP()
				.delete(`/tasks/${task.id}`, task)
				.then(() => {
					commit('removeTask', task);
				})
				.catch(() => {
					commit(
						'setDeleteTaskError',
						'An error has occured trying to delete your task.',
					);
				});
		},
	},
	getters: {},
	mutations: {
		setTasks(state, tasks) {
			state.tasks = tasks;
		},
		appendTask(state, task) {
			state.tasks.push(task);
		},
		setNewTaskName(state, newTaskName) {
			state.newTaskName = newTaskName;
		},
		appendTask(state, task) {
			state.tasks.push(task);
		},
		setTaskDescription(state, { task, description }) {
			task.description = description;
		},
		setEditMode(state, task) {
			Vue.set(task, 'isEditMode', true);
		},
		unsetEditMode(state, task) {
			Vue.set(task, 'isEditMode', false);
		},
		removeTask(state, task) {
			state.tasks.splice(state.tasks.indexOf(task), 1);
		},
		setCreateTaskError(state, error) {
			state.setCreateTaskError = error;
		},
		setSaveTaskError(state, error) {
			state.setSaveTaskError = error;
		},
		setDeleteTaskError(state, error) {
			state.setSaveTaskError = error;
		},
	},
};
