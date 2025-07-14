class apiError extends Error{
    constructor(
        statusCode,
        message= "something went wrong",
        errors = [],
        statck = "",
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors


        if(statck){
            this.statck = statck
        }else{
            Eroor.captureStackTrace(this, this.constructor)
        }
    }
}

export {apiError}
