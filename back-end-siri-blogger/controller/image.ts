import express from 'express'

export const getImage = (req: express.Request, resp: express.Response) => {
    let path = __dirname.replace("\\controller","")
    resp.sendFile(`${path}/public/images/${req.params.Id}`)
}