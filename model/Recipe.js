
const {Schema,model} =require ("mongoose");


const schema = new Schema({
           recipeName: {type:String, unique: true, required: true},
           versions:[
{            description: {type: String, required: true},
             date:{type: Date, default: Date.now}
}            ]
}
)

module.exports = model('Recipe',schema)



