import Joi from 'joi'

const registerValidation = async (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(100).required(),
        email: Joi.string().email().required,
        password: Joi.string().min(4).max(100).required()
    })

    const { error } = schema.valid(req.body)

    if (error) {
        return res.status(400)
            .json({ success: false, message: 'Bad request' })
    }

    next()

}
const loginValidation = async (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required,
        password: Joi.string().min(4).max(100).required()
    })

    const { error } = schema.valid(req.body)

    if (error) {
        return res.status(400)
            .json({ success: false, message: 'Bad request' })
    }

    next()

}


export {registerValidation, loginValidation}