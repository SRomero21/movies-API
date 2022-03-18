const {Actors} = require('../models/actors.model');

// Utils
const { catchAsync } = require('../util/catchAsync')
const { AppError } = require('../util/appError')

exports.getAllActors = catchAsync(async (req,res,next) => {
    const actors = await Actors.findAll({
        where: {status: 'active'}
    })

    res.status(200).json({
        status: 'succes',
        data: {
            actors
        }
    })
});

exports.getActorsById = catchAsync(async (req,res,next) => {
    
    const { id } = req.params
    const actor = await Actor.findOne({where: { id }})

    if(!actor) {
        return next(new AppError(404, 'Actor not found'))
    }

    res.status(200).json({
        status: 'succes',
        data: {actor}
    })
})

exports.createNewActor = catchAsync(async (req,res,next) => {
    const {name,country, oscardsPrizes, rating, age, profilePic} = req.body;

    if(!name || !country || !oscardsPrizes || !rating || !age || !profilePic) {
        return next(
            new AppError (
                400, 'yao'
            )
        )
    }
})

exports.updateActor = catchAsync(async (req, res, next) => {

})

exports.deleteActor = catchAsync(async (req,res,next) => {
    
})