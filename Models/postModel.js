import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true
        },
        password : {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName : {
            type: String,
            required: true
        },
        isAdmin : {
            type: Boolean,
            default: false,
        },
        profilePicture: String,
        coverPicture: String,
        about: String,
        livesin: String,
        worksAt: String,
        university: String,
        followers: [] ,
        following: []
    },
    {timestamps: true}
)

const UserModel= mongoose.model("Users", UserSchema);
export default UserModel