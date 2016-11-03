/**
 * CostumerController
 *
 * @description :: Server-side logic for managing costumers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	get:function(req, res){
		Costumer.find()
		.populate('roles')
				.exec(function(err,costumers){
					if (err) {
						return res.json(err);
					}
					return res.json(costumers);
				})
		},

		getRoles:function(req,res){
			var nombre = req.params.name;
			Costumer.findOne({nombre:nombre})
			.populate('roles')
			.exec(function(err,costumer){
				if (err) {
					return res.json(err);
				}
				return res.json(costumer.roles);

			})


 
		}
	};

/*
	'new': function(req,res){
		res.view();
	},

	index: function(req,res,next){

		Costumer.find(function foundCostumers(err,costumers){
			if (err) return next(err);
						res.json(costumers);
			
		});
	}

/*
	Costumer.create({
	type: '1',
    nombre: 'Andres',
    email: 'andres@unbosque.edu.co',
  	estado: 'A',
  	rutas: 123
})
.exec(function(err, Costumer) {});
*/


