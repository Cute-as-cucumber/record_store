//higher order function, takes a function that takes (req, res, next)
//if the function throws error, pass it to the next error handling middleware
//so that the server won't be crashed

const asyncHandler = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
}

export default asyncHandler;