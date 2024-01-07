export class ErrorModel {
    constructor(message, status) { 
        this.message = message;
        this.status = status;
    }
}

export class RouteNotFoundErrorModel extends ErrorModel {
    constructor(route) {
        console.log("route not found");
        super(`Route ${route} Not Found!!!`, 404)
    }
}

export class ResourceNotFoundErrorModel extends ErrorModel {
    constructor(id) {
        super(`ID ${id} Not exists!!!`, 404)
    }
}

export class ValidationErrorModel extends ErrorModel {
    constructor(massage) {
        super(massage, 400)
    }
}

export class AuthErrorModel extends ErrorModel {
    constructor(massage) {
        super(massage, 401)
    }
}
