const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
 image:{
    type:String,
    required:'this field is required'
 },
 video:{
    type:String,
    required:'this field is required'
 },
});

module.exports = mongoose.model('Category', categorySchema);