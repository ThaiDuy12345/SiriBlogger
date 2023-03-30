import express from 'express'
import mongoose from 'mongoose'
import accountModel from '../model/account'
export const getAllAccount = async (req: express.Request, res: express.Response): Promise<void> => {

}

export const getAccount = async (req: express.Request, res: express.Response): Promise<void> => {
    try{
        res.json(await accountModel.findOne({
            _id: req.params.Id
        }))
    }catch(err){
        console.log(err)
    }
        
}
export const deleteAccount = async (req: express.Request, res: express.Response): Promise<void> => {

}
export const updateAccount = async (req: express.Request, res: express.Response): Promise<void> => {

}
export const createAccount = async (req: express.Request, res: express.Response): Promise<void> => {
    const account = new accountModel({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        dateOfBirth: req.body.dateOfBirth,
        gender: req.body.gender,
        password: req.body.password,
        phone: req.body.phone,
        rank: "none",
        avatar: req.body.avatar
    })
    try{
        res.json(await accountModel.create(account))
    }catch(err){
        console.log(err)
    }
}
export const loadImage = (req: express.Request, res: express.Response): void => {
    res.json({name:req.file?.filename})
}

export const getAccountByEmailAndPassword = async (req: express.Request, res: express.Response): Promise<void> => {
    try{
        res.json(await accountModel.findOne({
            email: req.body.email,
            password: req.body.password
        }))
    }catch(err){
        console.log(err)
    }
}
        