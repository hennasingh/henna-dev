// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from "firebase/firestore"
import { getStorage, ref, getDownloadURL } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNAO_nZm2VeV8PTJ788P9PTZ6X6sOyln8",
  authDomain: "portfolio-henna.firebaseapp.com",
  projectId: "portfolio-henna",
  storageBucket: "portfolio-henna.appspot.com",
  messagingSenderId: "524247744511",
  appId: "1:524247744511:web:ee945e4e888b309b3df1ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const projectCollectionRef = collection(db, "projects")

export async function getProjects(){
    const snapshot = await getDocs(projectCollectionRef)
    const projects = snapshot.docs.map(doc => ({
        ...doc.data(),
        id:doc.id
    }))
    return projects
}

 export async function convertGsUrlToHttpUrl(gsUrl) {
    const storage = getStorage();

    //Parse the gs:// URL to get the bucket name and path
    const matches = gsUrl.match(/^gs:\/\/([^\/]+)\/(.+)$/)
    if(!matches || matches.length < 3 ) {
        throw new Error("Invalid GS URL")
    }
    const [, bucketName, filePath] = matches;

    const storageRef = ref(storage, `gs://${bucketName}/${filePath}`)

    try {
        const httpUrl = await getDownloadURL(storageRef)
        return httpUrl
    } catch (error) {
        console.log("Error getting download URL: " , error)
        throw new Error("Failed to get download URL")
    }
}