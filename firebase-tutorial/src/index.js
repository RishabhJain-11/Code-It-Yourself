import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, onSnapshot,
    addDoc, deleteDoc, doc, query, where, orderBy, serverTimestamp,
    getDoc, updateDoc
} from 'firebase/firestore'

import {
    getAuth
} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDei3ixIL5wVxrtST1aCqLSxa94s7Y1H1k",
    authDomain: "fir-9iners.firebaseapp.com",
    projectId: "fir-9iners",
    storageBucket: "fir-9iners.appspot.com",
    messagingSenderId: "380072840009",
    appId: "1:380072840009:web:d9feff579f46e49edce898"
};

// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();
const auth = getAuth();

// collection reference
const colRef = collection(db, 'books');

// queries
const q = query(colRef, orderBy("createdAt"))

// get collection data
/*
getDocs(colRef).then(snapshot => {
    let books = []
    snapshot.docs.forEach(doc => {
        books.push({ ...doc.data(), id: doc.id })
    })
    console.log(books);
}).catch(err => {
    console.log(err.message);
})
*/


// realtime get collection data
onSnapshot(q, (snapshot) => {
    let books = []
    snapshot.docs.forEach(doc => {
        books.push({ ...doc.data(), id: doc.id })
    })
    console.log(books);
})


// adding docs
const addBookForm = document.querySelector('.add')

addBookForm.addEventListener('submit', (e) => {
    e.preventDefault()

    addDoc(colRef, {
        title: addBookForm.title.value,
        author: addBookForm.author.value,
        createdAt: serverTimestamp()
    })
        .then(() => {
            addBookForm.reset()
        })
})


// deleting docs
const deleteBookForm = document.querySelector('.delete')

deleteBookForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const docRef = doc(db, 'books', deleteBookForm.id.value)

    deleteDoc(docRef).then(() => {
        deleteBookForm.reset()
    })
})

const docRef = doc(db, "books", "S9eqIDDaEthftYv9Vqoc")

onSnapshot(docRef, (doc) => {
    console.log(doc.data(), doc.id)
})

const updateForm = document.querySelector(".update")
updateForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const docRef = doc(db, 'books', updateForm.id.value)
    updateDoc(docRef, {
        title: 'updated title'
    }).then(() => {
        updateForm.reset()
    })
})

