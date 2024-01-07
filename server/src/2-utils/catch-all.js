function catchAll(err, request, response, next) {
    const status = err.status || 500;
    // Log all the errors to the console

    let message = err.message;

    response.status(status).send(message);

}
export default catchAll; 