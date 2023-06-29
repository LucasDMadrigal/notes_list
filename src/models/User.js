const {Schema, model} = require("mongoose")

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
},{
    timestamps :true //this will add createdAt and updatedAt fields to the schema.
})

UserSchema.methods.encryptPassword = async (password) => {
    const salt = await bcryptjs.genSalt(10)
    return await bcryptjs.has(password,salt)
}

UserSchema.methods.matchPassword = pass => {
    return bcryptjs.compare(pass, this.password)
}

module.exports = model('User', UserSchema)