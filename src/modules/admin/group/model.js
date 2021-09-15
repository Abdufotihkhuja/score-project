const { fetch, fetchAll } = require('../../../lib/postgres.js')
const { GROUPS, COUNT_GROUPS,DELETE_GROUP } = require('./query.js')

const groups = async ({page=1}) => {
	let {count} = await fetch(COUNT_GROUPS)
	let limit = 2;
	let pages = Math.ceil(count/limit)

	let groups = await fetchAll(GROUPS,(page-1) * limit,limit)
	return {
		html: 'private/admin.html',
		panel: 'table-groups.html',
		data: groups,
		pages,
		page
	}
}

const remove =async ({groupId}) =>{
	let deleteGroups = await fetch(DELETE_GROUP,groupId)
	return deleteGroups
}


module.exports = {
	groups,remove
}