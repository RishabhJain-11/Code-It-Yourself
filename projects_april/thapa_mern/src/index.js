const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/ttchannel", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connection Success..."))
    .catch((err) => console.log("Bhai Error aara hai :( Kya kare ab ;)"));


const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    data: {
        type: Date,
        default: Date.now
    }
})

const Playlist = new mongoose.model("Playlist", playlistSchema);

//create a doc

const createDocument = async () => {
    try {
        const reactPlaylist = new Playlist({
            name: "React JS",
            ctype: "Front End",
            videos: 80,
            author: "Thapa Technical",
            active: true,
        });
        // const mongoPlaylist = new Playlist({
        //     name: "Mongo DB",
        //     ctype: "Back End",
        //     videos: 10,
        //     author: "Thapa Technical",
        //     active: true,
        // });
        // const nextPlaylist = new Playlist({
        //     name: "Next JS",
        //     ctype: "Front End",
        //     videos: 20,
        //     author: "Thapa Technical",
        //     active: true,
        // });
        // const emailjsPlaylist = new Playlist({
        //     name: "Email JS",
        //     ctype: "Front End",
        //     videos: 5,
        //     author: "Thapa Technical",
        //     active: true,
        // });
        const res = await Playlist.insertMany([reactPlaylist]);
        console.log(res);
    } catch (error) {
        console.log("Error aara hai", error)
    }
}
// emailjsPlaylist
// nextPlaylist, mongoPlaylist, 

createDocument();



const getDocument = async () => {
    const res = await Playlist
        .find({ctype: "Databse"})
        .select({ name: 1 })
        .countDocuments();
    console.log(res);
}
// getDocument();

const updateDocument = async (_id) => {
    try {
        const res = await Playlist.findByIdAndUpdate({ _id }, {
            $set: {
                name: "Mongo DB"
            }
        });
    } catch (error) {
        console.log(error)
    }
}

// updateDocument("64382df8d725a1a4828b34aa");

const deleteDocument = async (_id) => {
    try {
        const res = await Playlist.findByIdAndDelete({ _id });
        console.log("The deleted document is ", res);
    } catch (error) {
        console.log("Error Homecoming")
    }
}

// deleteDocument("64382df8d725a1a4828b34a9");