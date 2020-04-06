import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
      required: true
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
)

const Model = mongoose.model('Order', orderSchema)

const getOrderOfUserById = async (id, userId) => await Model.findOne({
  _id: id,
  user: userId,
  isDeleted: false
})

const list = async () => await Model.find({ isDeleted: false })

const listByUserId = async (userId) => await Model.find({ user: userId, isDeleted: false });

const createOrder = async (userId, bookId) => {
  const orderInstance = new Model({
    user: userId,
    book: bookId
  })

  await orderInstance.save((err) => {
    if (err) {
      throw err
    }
  })

  return orderInstance
}

const updateOrder = async (orderInstance, bookId) => {
  orderInstance.book = bookId
  orderInstance.updatedAt = new Date()

  await orderInstance.save((err) => {
    if (err) {
      throw err
    }
  })
  return orderInstance
}

const deleteOrder = async (orderInstance) => {
  orderInstance.isDeleted = true
  orderInstance.updatedAt = new Date()

  await orderInstance.save((err) => {
    if (err) {
      throw err
    }
  })
  return orderInstance
}

const deleteAllOrderOfUser = async (userId) => {
  return await Model.updateMany({ user: userId }, { isDeleted: true });
}

export default {
  Model,
  getOrderOfUserById,
  list,
  listByUserId,
  createOrder,
  updateOrder,
  deleteOrder,
  deleteAllOrderOfUser,
  schema: orderSchema
};
