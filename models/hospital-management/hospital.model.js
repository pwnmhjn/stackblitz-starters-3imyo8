import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    addressLine1:{
        type:String,
        required:true
    },
    addressLine2:{
        type:String,
    },
    city:{
        Type:String,
        require:true
    },
    zipcode:{
        Type:String,
        require:true
    },
    specializedIn:[
        {
            type:String
        }
    ]
}, { timestamps: true });

export const Hospital = mongoose.model('Hospital', hospitalSchema);
