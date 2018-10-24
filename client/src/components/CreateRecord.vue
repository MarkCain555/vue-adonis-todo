<template>
    <v-layout row wrap class="mt-4">
        <v-flex xs8>
            <v-text-field :placeholder="placeholder" @keyup.enter="$emit('create')" :value="value" @input="$emit('onInput', $event)"></v-text-field>
        </v-flex>
        <v-flex xs4 class="text-xs-right">
            <v-btn small dark class=" mt-4" color="green" @click="$emit('create')">
                <v-icon class="mr-2">add_circle</v-icon>
                Create
            </v-btn>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
	props: ['placeholder', 'value'],
};
</script>

<style>
</style>
