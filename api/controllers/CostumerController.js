/**
 * CostumerController
 *
 * @description :: Server-side logic for managing costumers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	'new': function(req,res){
		res.view();
	},

	index: function(req,res,next){

		Costumer.find(function foundCostumers(err,costumers){
			if (err) return next(err);
			/*
			res.view({
				costumers: costumers
			});
			*/
			
			res.json(costumers);
			
		});

		
	}
};

