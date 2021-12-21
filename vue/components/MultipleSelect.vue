<template>
	<el-select ref="elSelect"
		:disabled="disabled"
		class="el-select-text"
		:title="title"
		v-model="modelValue"
		multiple
		placeholder="请选择"
		@change="onChange">
		<el-option v-for="item in optionList"
			:label="item.name"
			:value="item.id"
			:key="item.id"></el-option>
		<el-option :value="''"
			class="center">
			<span class="el-option__el-button"
				@click="onCloseSelect">确定</span>
		</el-option>
	</el-select>
</template>

<script>
export default {
	name: 'MultipleSelect',

	model:{
		prop:'value',//要存在于proops
		event:'change'//当组件的值发生改变时要emit的事件名
	},

	props: {
		value: {
			type: Array,
			default: () => []
		},

		disabled: {
			type: Boolean,
			default: false
		},

		indexs: {
			type: Array,
			default: () => []
		},

		// 当前科目待选列表
		options: {
			type: Array,
			default: () => []
		},

		// 当前题目的值
		currentOptions: {
			type: Array,
			default: () => []
		},

		keyMap: {
			type: Object,
			default: () => {
				return {
					id: 'levelId',
					name: 'levelName'
				};
			}
		},

	},

	data() {
		return {
			modelValue: this.value,
		};
	},

	computed: {
		optionList() {
			let {id, name} = this.keyMap;
			return this.options.map(item => {
				return {
					id: item[id],
					name: item[name]
				};
			});

		},

		title() {
			let {name} = this.keyMap;
			return this.currentOptions.map(v => v[name]).join('，');
		}
	},

	methods: {
		onChange() {
			this.$emit('change', this.modelValue);
		},

		// 能力层级 下拉框 确定关闭
		onCloseSelect() {
			let elSelect = this.$refs.elSelect;

			if (elSelect.blur) {
				elSelect.blur();
			} else {
				elSelect.forEach && elSelect.forEach(item => {
					item.blur();
				});
			}
		},
	}

};
</script>

<style>

</style>
