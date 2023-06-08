/* eslint-disable max-len */
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

const COLLECTION_USERS_ROLES = "usersRoles";

export const addAdminRole = functions.https.onRequest((request, response) => {
    // recupérer l'utilisateur avec son email présent dans le body de la requête
    admin
        .auth()
        .getUserByEmail(request.body.email)
        .then((user) => {
            admin.auth().setCustomUserClaims(user.uid, {
                admin: true,
            });
            // met à jour le document de l'utilisateur dans la collection newUsers
            admin
                .firestore()
                .collection(COLLECTION_USERS_ROLES)
                .doc(user.uid)
                .update({
                    role: "admin",
                });
            response.send({
                message: `Success! ${request.body.email} has been made an admin.`,
            });
        })
        .catch((err) => {
            return err;
        });
});

export const createUser = functions.auth.user().onCreate((user) => {
    const { email, uid } = user;
    return admin.firestore().collection(COLLECTION_USERS_ROLES).doc(uid).set({
        email: email,
        role: "user",
    });
});
