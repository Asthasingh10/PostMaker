const {z}=require("zod")
const signupSchema=z.object({
    email:z.string({required_error:"Email Required"}).trim().email({message:"Invalid email address"}),
    password:z.string({required_error:"Password Required"}).trim().min(3,{message:"Password must be at least 6 characters"})
    .max(1024,"Password can't be greater than 1024 character"),
})
module.exports=signupSchema;