const GROUPS = `
	SELECT 
		group_id,
		group_name
	FROM groups
	WHERE group_deleted_at IS null
	OFFSET $1 FETCH FIRST $2 ROWS ONLY
`
const COUNT_GROUPS = `
	SELECT COUNT(group_id)
	FROM groups
	WHERE group_deleted_at IS null
`
// const DELETE_GROUP = `
// 	DELETE FROM groups 
// 	WHERE group_id = $1
// 	RETURNING *
// `
const DELETE_GROUP = `
	UPDATE groups SET
		group_deleted_at = current_timestamp
	WHERE group_id = $1
	RETURNING *
`
module.exports = {
	GROUPS,
	COUNT_GROUPS,
	DELETE_GROUP
}