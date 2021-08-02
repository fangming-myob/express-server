import express from 'express'

export const router = express.Router()

router.get('/', (req, res) => {
    res.send('Get user')
})

router.post('/', (req, res) => {
    res.send('Create user')
})