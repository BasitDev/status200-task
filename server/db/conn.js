const mongoose = require('mongoose');

const DB = "mongodb://localhost:27017/statusapp"

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Status 200 Task Database Connected');
    })
    .catch((er) => {
        console.log(er.message);

    });

