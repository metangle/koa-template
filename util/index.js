module.exports = {
    /**
     * create response body
     * @param {*} data any
     * @param {*} code number
     * @param {*} message string
     * @returns object
     */
    createResponse(data, code = 0, message) {
        return {
            code,
            message,
            data
        }
    }
}