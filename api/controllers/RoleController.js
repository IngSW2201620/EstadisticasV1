/**
 * RoleController
 *
 * @description :: Server-side logic for managing roles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	get:function(req,res){
		Role.find()
		.populate("costumers")
		.exec(function(err,roles){
			if (err) {
				return res.json(err);
			}
		return res.json(roles);
		})
	},
	getCostumers:function(req,res){
		var name = req.params.name;
		Role.findOne({name:name})
		.populate("costumers")
		.exec(function(err,role){
			if (err) {
				return res.json(err)
			}
			return res.json(role.costumers);
			})
	}

	
};

