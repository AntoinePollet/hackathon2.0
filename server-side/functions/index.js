const functions = require("firebase-functions");
const admin = require("firebase-admin");

// The Firebase Admin SDK to access Firestore.
const {initializeApp} = require("firebase-admin/app");
// const {getFirestore} = require("firebase-admin/firestore");

initializeApp({projectId: "hackathon2-0-d6ef2"});

// CONSTANTS FOR FIRESTORE
const COLLECTION_USERS_ROLES = "usersRoles";

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.addAdminRole = functions.https.onRequest((request, response) => {
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

exports.createUser = functions.auth.user().onCreate((user) => {
  const {email, uid} = user;
  return admin.firestore().collection(COLLECTION_USERS_ROLES).doc(uid).set({
    email: email,
    role: "user",
  });
});
