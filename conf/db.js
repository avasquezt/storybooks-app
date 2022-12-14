const moongose = require('mongoose');

const connectDB = async () => {
    try{
        const conn = await moongose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useFindAndModify: false
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch(err){
        console.error(err);
        process.exit(1);
    }
}

module.exports = connectDB;