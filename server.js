const http = require("http");

const mongodb = require("mongodb");

let db;


const connectionString = "mongodb+srv://abdullahjust777:yVh1Gj3lZ9urhccB@michael.vcnsjnq.mongodb.net/Reja";
mongodb.connect(connectionString,
{
    useNewUrlParser: true,
    useUnifiedTopology:true,
},

(err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else{
        console.log("MongoDB connection succeed");
        module.exports = client;
        // db = client.db("Reja");
        const app = require("./app");
        const server = http.createServer(app);
       
        let PORT = 3000;
        server.listen(PORT, function () {
        console.log(
            `ther server is running successfully on port: ${PORT}, http://localhost:${PORT}`
             );
        }); 

    } 
}

);
// module.exports = { connectDB };
// module.exports = db;
//MERN va JavaScript fullstack kursimizning birinchi CRUD loyihasi

