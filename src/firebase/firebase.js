import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
const db = firebase.database();

export { db, firebase };

// The commented out code below is meant to act as references to firebase
// code. and not having to dive into the docs to find common examples

// const expenseListener = db.ref('expenses').on('value', data => {
//   const expenses = [];
//   data.forEach(item => {
//     expenses.push({
//       id: item.key,
//       ...item.val()
//     });
//   });
//   console.log(expenses);
// });
// db
//   .ref('expenses')
//   .once('value')
//   .then(data => {
//     const expenses = [];
//     data.forEach(item => {
//       expenses.push({
//         id: item.key,
//         ...item
//       });
//     });
//     console.log(expenses);
//   });

// db.ref().set(null); //this is used to clear the DB.

// the .push() is used to create array like structures in firebase.
// db.ref('expenses').push({
//   description: 'Paid for an Uber',
//   note: 'Took a trip to Englewood Cliffs, New Jersey',
//   amount: 4560,
//   createdAt: 0
// });
// db.ref('expenses').push({
//   description: 'Paid for an Lyft',
//   note: 'Took a trip to Englewood Cliffs, Spain',
//   amount: 2360,
//   createdAt: 0
// });
// db.ref('expenses').push({
//   description: 'Paid for an Juno',
//   note: 'Took a trip to Englewood Cliffs, New York',
//   amount: 560,
//   createdAt: 0
// });

// const onValueChange = db.ref().on('value', (snapshot) => {
//   const { name, job: { title, company } } = snapshot.val();
//   console.log(`${name} is a ${title} at ${company} `);
// });

// db
//   .ref('location/city')
//   .on('value', (snapshot) => {
//     console.log(snapshot.val())
//   })
// db
//   .ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const dbValue = snapshot.val();
//     console.log(dbValue);
//   })
//   .catch(error => console.log(error.message));

// db
//   .ref()
//   .set({
//     name: 'Nathaniel Quashie',
//     stressLevel: 6,
//     job: {
//       title: 'Software Developer',
//       company: 'Econify'
//     },
//     age: 30,
//     isDeveloper: true,
//     location: {
//       city: 'Brooklyn',
//       country: 'United States'
//     }
//   })
//   .then(data => console.log(data))
//   .catch(error => console.log(error.message));
//
// db
//   .ref('attributes')
//   .set({
//     height: 65,
//     weight: 205
//   })
//   .then(data => console.log(data))
//   .catch(error => console.log(error.message));

// db.ref().update({
//   stressLevel: 9,
//   'job/company': 'Designate',
//   'location/city': 'Manhattan'
// })

// db
//   .ref('isDeveloper')
//   .remove()
//   .then(() => console.log('data deletion a sucess'))
//   .catch(error => console.log(error.message));

// db
//   .ref('isDeveloper')
//   .set(true)
//   .then(() => console.log('data added!'))
//   .catch(error => console.log(error.message));
