import mongoose from 'mongoose'
import crypt from '../utils/crypt.utils'

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    isActive: {
      type: Boolean,
      default: false
    },
    role: {
      type: Boolean,
      default: false
    },
    isDeleted: {
      type: Boolean,
      default: false,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      required: true
    },
    updatedAt: {
      type: Date,
      default: Date.now,
      required: true
    }
  }
);

userSchema.methods.validPassword = function (password) {
  return crypt.comparePassword(password, this.password)
}

const Model = mongoose.model('User', userSchema);

const list = async () => await Model.find({ isDeleted: false });

const findById = async (userId) => await Model.findOne({
  _id: new mongoose.Types.ObjectId(userId),
  isDeleted: false
});

const create = async (userInfo) => {
  userInfo.password = crypt.hashPassword(userInfo.password)

  const userInstance = new Model({
    _id: new mongoose.Types.ObjectId(),
    ...userInfo
  })

  await userInstance.save((err) => {
    if (err) {
      throw err
    }
  })

  return userInstance
};

const findByUsername = async (username) => await Model.findOne({ username, isDeleted: false });

const activateUser = async (userInstance) => {
  userInstance.isActive = true
  userInstance.updatedAt = new Date()

  await userInstance.save((err) => {
    if (err) {
      return err
    }
  })

  return userInstance
}

const updateUser = async (userInstance, newUsername, newFirstName, newLastName) => {
  userInstance.username = newUsername
  userInstance.firstName = newFirstName
  userInstance.lastName = newLastName
  userInstance.updatedAt = new Date()

  await userInstance.save((err) => {
    if (err) {
      return err
    }
  })

  return userInstance
}

const deleteUser = async (userInstance) => {
  userInstance.isDeleted = true
  userInstance.updatedAt = new Date()

  await userInstance.save((err) => {
    if (err) {
      throw err
    }
  })
  return userInstance
}

const deleteAllUsers = async () => {
  return await Model.updateMany({}, { isDeleted: true });
}

export default {
  Model,
  list,
  findById,
  findByUsername,
  create,
  activateUser,
  updateUser,
  deleteUser,
  deleteAllUsers,
  schema: userSchema
};
