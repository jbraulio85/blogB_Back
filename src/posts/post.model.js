import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    title:{
        type: String,
        required: [true, 'El título es obligatorio']
    },
    thumbnail:{
        type: String
    },
    content:{
        type: Array
    },
    comment:{
        type :[{
            name:{
                type:String,
            },
            text:{
                type: String,
            }
        }],
        default: []
    }
},{
    versionKey: false
});

export default mongoose.model('Post', PostSchema);