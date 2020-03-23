const  {validationResult} = require("express-validator");
const {Router} = require('express')
const Recipe = require('../model/Recipe')

const router = Router();



router.post('/add',
    async (req,res) => {
        try{
           const errors = validationResult(req);

            if(!errors.isEmpty()){
                return res.status(400).json({errors:errors.array(), message:'wrong data'})
            }

            const {name, description} = req.body;


             await Recipe.findOneAndUpdate({recipeName: name},{$push:{versions: {description}}},
                 {upsert:true}
                 )


           return  res.status(201).json({message:'Recipe created'});

        }catch (e){
            res.status(500).json({message:'Somthing went wrong'})
        }
    })

router.get('/',async (req, res) => {
    try{
        await Recipe.find({ },function (err,recipes) {
            // let recipeMap = [];
            // recipes.forEach(recipe => {recipeMap.push(recipe)})
            res.json(recipes);

        })
    }catch(e){
        res.status(500).json({message:'Sth went wrong'})
    }

})
module.exports = router;
