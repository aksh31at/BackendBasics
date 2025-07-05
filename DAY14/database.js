const mongoose= require('mongoose');

async function main(){
    await mongoose.connect("mongodb+srv://akshat31at:akshatA213@day12.jliuzw3.mongodb.net/Instagram");


}

module.exports = main;