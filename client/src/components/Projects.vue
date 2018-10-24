<template>
    <Panel title="Projects">
        <div class="project mt-2" v-for="project in projects" :key="project.id">
            <v-layout row wrap>
                <v-flex xs9 text-xs-left>
                    <span v-if="!project.isEditMode">
                        {{project.title}}
                    </span>
                    <v-text-field autofocus @keyup.enter="saveProject(project)" v-if="project.isEditMode" :value="project.title" @input="setProjectTitle({ project, title: $event})"></v-text-field>
                </v-flex>
                <v-flex xs3 text-xs-right>
                    <v-icon v-if="!project.isEditMode" @click="setEditMode(project)">edit</v-icon>
                    <v-icon v-if="project.isEditMode" @click="saveProject(project)">check</v-icon>
                    <v-icon @click="deleteProject(project)">delete</v-icon>
                </v-flex>
            </v-layout>
        </div>
        <v-layout row wrap class="mt-4">
            <v-flex xs8>
                <v-text-field placeholder="My project name..." @keyup.enter="createProject" :value="newProjectTitle" @input="setNewProjectTitle"></v-text-field>
            </v-flex>
            <v-flex xs4>
                <v-btn small dark class="mt-4" color="green" @click="createProject">
                    <v-icon class="mr-2">add_circle</v-icon>
                    Create
                </v-btn>
            </v-flex>
        </v-layout>
    </Panel>
</template>

<script>
import Panel from './Panel';
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
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
