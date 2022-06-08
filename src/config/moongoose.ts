import mongoose from "mongoose";

const MONGO_URI = 'mongodb+srv://juan:1234@electivalll.oydf4.mongodb.net/?retryWrites=true&w=majority'

mongoose.set("useFindAndModify", false)
mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})