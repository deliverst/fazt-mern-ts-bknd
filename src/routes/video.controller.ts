import {RequestHandler} from 'express'
import Video from './Video'

export const getVideos: RequestHandler = async (req, res) => {
    try {
        const allVideos = await Video.find()
        return res.json(allVideos)
    } catch (e) {
        res.json(e)
    }
}

export const createVideo: RequestHandler = async (req, res) => {
    const videoFound = await Video.findOne({url: req.body.url})
    if (videoFound) return res.status(301).json(
        {message: 'the url already exist'}
    )
    const video = new Video(req.body)
    console.log(video)
    const saveVideo = await video.save()
    res.json(saveVideo)
}
export const deleteVideo: RequestHandler = async (req, res) => {
    try {
        const videoFound = await Video.findByIdAndDelete(req.params.id)
        if (!videoFound) return res.json({message: 'video not found'})
        return res.json(videoFound)
    } catch (err) {
        res.json(err)
    }
}
export const updateVideo: RequestHandler = async (req, res, err) => {
    try {
        const videoUpdate = await Video.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if (!videoUpdate) return res.json({e: 'not found video'})
        return res.json(videoUpdate)
    } catch (e) {
        res.json(e)
    }
}

export const getVideo: RequestHandler = async (req, res) => {
    try {
        console.log(req.params.id)
        const getVideo = await Video.findById(req.params.id)
        return res.json(getVideo)
    } catch (e) {
        res.json(e)
    }
}