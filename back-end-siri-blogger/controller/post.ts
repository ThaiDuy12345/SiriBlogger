import express from 'express'


export const getAllPost = (req: express.Request, res: express.Response) => {

}

export const getPost = (req: express.Request, res: express.Response) => {

}
export const deletePost = (req: express.Request, res: express.Response) => {

}
export const updatePost = (req: express.Request, res: express.Response) => {

}
export const createPost = (req: express.Request, res: express.Response) => {

}
export const loadImage = (req: express.Request, res: express.Response) => {
    res.json({name:req.file?.filename})
}