import { Request, Response } from "express";

type TRole = "admin" | "manager" | "consultant" | "recruteur";

export function isAuthorized(opts: {
    hasRole: Array<TRole>;
    allowSameUser?: boolean;
}) {
    return (req: Request, res: Response, next: any) => {
        const { role, uid } = res.locals;
        const { id } = req.params;

        if (opts.allowSameUser && id && uid === id) return next();

        if (!role) return res.status(403).send();

        if (opts.hasRole.includes(role)) return next();

        return res.status(403).send();
    };
}
