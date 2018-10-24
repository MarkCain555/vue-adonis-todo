<template>
    <Panel title="Projects">
        <div class="project mt-2" v-for="project in projects" :key="project.id">
            <EditableRecord :isEditMode="project.isEditMode" :title="project.title" @onInput="setProjectTitle({
                    project,
                    title: $event,
                })" @onEdit="setEditMode(project)" @onSave="saveProject(project)" @onDelete="deleteProject(project)" />
        </div>
        <CreateRecord placeholder="My project name..." @onInput="setNewProjectTitle" :value="newProjectTitle" @create="createProject" />
    </Panel>
</template>

<script>
import Panel from './Panel';
import CreateRecord from './CreateRecord';
import EditableRecord from './EditableRecord';
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
	components: {
		CreateRecord,
		EditableRecord,
	},
	mounted() {
		this.fetchProjects();
	},
	computed: {
		...mapState('projects', ['newProjectTitle', 'projects']),
	},
	methods: {
		...mapMutations('projects', [
			'setNewProjectTitle',
			'setEditMode',
			'setProjectTitle',
		]),
		...mapActions('projects', [
			'createProject',
			'fetchProjects',
			'saveProject',
			'deleteProject',
		]),
	},
};
</script>

<style>
.project {
	font-size: 18px;
}
.icon {
	cursor: pointer;
}
.icon:hover {
	color: #333;
}
</style>
