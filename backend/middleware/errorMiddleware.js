const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
}

const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    //check for Mongoose bad ObjectId (cast error), if we pass a invlid ID
    if (err.name === 'CastError' && err.kind === 'ObjectId')  {
        message = `Resource not found`;
        statusCode = 404;
    }

    //if in dev mode send stack trace; if production mode hide it
    res.status(statusCode).json({
        message,
        stack: process.env.MODE_ENV === 'production' ? 'PIZZA': err.stack,
    });
};

export {notFound, errorHandler};