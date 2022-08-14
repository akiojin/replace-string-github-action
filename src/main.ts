const core = require('@actions/core')
const github = require('@actions/github')

try {
    const source = core.getInput('source')
    const find = core.getInput('find')
    const replace = core.getInput('replace')

	if (!!core.getBooleanInput('all')) {
		core.setOutput('value', source.replaceAll(find, replace))
	} else {
		core.setOutput('value', source.replace(find, replace))
	}
} catch (ex: any) {
    core.setFailed(ex.message)
}