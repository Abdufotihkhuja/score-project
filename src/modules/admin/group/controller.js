const model = require('./model.js')
const htmlController = require('../../../lib/htmlController.js')

const GET = async (req, res) => {
	res.render( ...htmlController(
		req.userInfo,
		await model.groups(req.query, req.userInfo),
		{ header: 'private/header.html' }
	))
}
const DELETE = async (req, res) => {
	let deleted = await model.remove(req.body, req.userInfo)
	if(deleted){
		res.status(204).json({status:204,message:"The group deleted!"})
	}else{
		res.status(404).json({status:404,message:"Some thing went wrong!"})
	}
}
module.exports = {
	GET,
	DELETE
}

