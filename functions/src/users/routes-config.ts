import { Application } from "express";
import { create, all, get, patch, remove } from "./controller";

import { isAuthenticated } from "../auth/authenticated";
import { isAuthorized } from "../auth/authorized";
import { helloWorld } from "../utils/helloworld";

export function routesConfig(app: Application) {
    app.post(
        "/users",
        isAuthenticated,
        isAuthorized({ hasRole: ["admin", "recruteur"] }),
        create
    );
    // lists all users
    app.get("/users", [
        isAuthenticated,
        isAuthorized({ hasRole: ["admin", "recruteur"] }),
        all,
    ]);
    // get :id user
    app.get("/users/:id", [
        isAuthenticated,
        isAuthorized({ hasRole: ["admin", "recruteur"], allowSameUser: true }),
        get,
    ]);
    // updates :id user
    app.patch("/users/:id", [
        isAuthenticated,
        isAuthorized({ hasRole: ["admin", "recruteur"], allowSameUser: true }),
        patch,
    ]);
    // deletes :id user
    app.delete("/users/:id", [
        isAuthenticated,
        isAuthorized({ hasRole: ["admin", "recruteur"] }),
        remove,
    ]);
    // hello world (basic example from firebase docs)
    app.get("/utils/hello", [helloWorld]);
}
