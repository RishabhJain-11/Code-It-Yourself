const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/dynamic", {
    useNewUrlParser: true,
    useUnifiedTopology: false
}).then(() => {
    console.log("Connection Done");
}).catch((error) => {
    console.log(error);
})