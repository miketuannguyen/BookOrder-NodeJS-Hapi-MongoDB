import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    publisher: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    category: {
      name: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
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

const Model = mongoose.model('Book', bookSchema)

const findById = async (bookId) => await Model.findOne({
  _id: bookId,
  isDeleted: false
})

const list = async () => await Model.find({ isDeleted: false })

const createBook = async (bookInfo) => {
  const bookInstance = new Model({
    _id: new mongoose.Types.ObjectId(),
    ...bookInfo
  })
  
  await bookInstance.save((err) => {
    if (err) {
      throw err
    }
  })
  
  return bookInstance
};

const updateBook = async (bookInstance, newBookInfo) => {
  Object.assign(bookInstance, newBookInfo)
    
  await bookInstance.save((err) => {
    if (err) {
      throw err
    }
  })
    
  return bookInstance
};

const deleteBook = async (bookInstance) => {
  bookInstance.isDeleted = true
  await bookInstance.save((err) => {
    if (err) {
      throw err
    }
  })

  return bookInstance
}

const deleteAll = async () => {
  return await Model.updateMany({}, { isDeleted: true });
}

export default {
  Model,
  list,
  findById,
  createBook,
  updateBook,
  deleteBook,
  deleteAll
};
