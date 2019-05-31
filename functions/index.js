// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require("firebase-functions");
// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });
process.env.NODE_ENV = process.env.NODE_ENV || "production";
// Just in case
// const cors = require("cors")({ origin: true });
// Use this line for production
if (process.env.NODE_ENV === "production") {
  admin.initializeApp();
} else {
  const serviceAccount = require("../food-70e24-firebase-adminsdk-ieqbc-5be8f30203.json");
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://food-70e24.firebaseio.com"
  });
}

exports.config = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    return res.status(200).send({ config: process.env.NODE_ENV });
  });
});

// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
// exports.addMessage = functions.https.onRequest(async (req, res) => {
//   // Grab the text parameter.
// const original = req.query.text || "unknown";
//   // Push the new message into the Realtime Database using the Firebase Admin SDK.
//   const snapshot = await admin
//     .database()
//     .ref("/messages")
//     .push({ original: original });
//   // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
//   res.redirect(303, snapshot.ref.toString());
//   // res.status(200).send({ status: "Sent: " + original });
// });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.addNumbers = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    var output = 0;
    var body = JSON.parse(req.body);
    var numbers = body.numberArray;
    numbers.forEach(function(number) {
      output += number;
    });
    return res.send({ output });
  });
});

exports.helloWorld = functions.https.onRequest((req, res) => {
  // var params = req.query.text || req.body;
  console.log("helloWorld powershell");
  res.send({ message: "Hello from Firebase!" });
});
