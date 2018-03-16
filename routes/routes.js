var express= require('express');
var router=express.Router();
var ValidateUrlController=require('../controllers/validateurlController');

router.route('/v1/validate/:uri')
.get(ValidateUrlController.validateUri);

module.exports=router;
