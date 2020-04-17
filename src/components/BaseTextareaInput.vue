<template>
	<label>
		<slot></slot>
		<textarea :placeholder="placeholder" @input="parseInput($event.target.value)"
		></textarea>
	</label>
</template>

<script>
    export default {
        name: "BaseTextareaInput",
        props: {
            placeholder: {
                type: String,
                default: ''
            }
        },
        methods: {
            parseInput: function (value) {
                let out = {
                    lines: value.split('\n'),
                    index: 0,
                    getLine() {
                        if (this.index === this.lines.size) {
                            return undefined
                        }
                        return this.lines[this.index++]
                    }
                }

                this.$emit('input', out)
            }
        }
    }
</script>

<style lang="scss" scoped>
	label {
		width: 100%;
		display: flex;
		align-items: center;

		textarea {
			margin-left: 5px;
			padding: 5px 10px;
			height: 15em;

			flex-grow: 1;
		}
	}
</style>