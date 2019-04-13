import { Route } from "../../components/router/Route";
import { RouteModel } from "../../components/router/RouteModel";
import { Router } from "../../components/router/Router";

class PostRoute extends Route {

    constructor() {
        super();

        this.initialise(this.route());
    }

    protected route(): RouteModel {
        return new RouteModel({
            method: 'GET',
            endpoint: '/post',
            schema : null,
            handler: this.process.bind(this)
        });
    }
}

class PostRoute2 extends Route {

    constructor() {
        super();

        this.initialise(this.route());
    }

    protected route(): RouteModel {
        return new RouteModel({
            method: 'GET',
            endpoint: '/',
            schema : null,
            handler: this.process.bind(this)
        });
    }
}

export { PostRoute, PostRoute2 }