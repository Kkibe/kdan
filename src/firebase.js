import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { increment } from "firebase/database";
import {addDoc, collection, doc, getDoc, getDocs, getFirestore, limit, query, updateDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDw1QZnLlEWLOwk54uOTf5V6393KqAv6UY",
    authDomain: "taxa-ca7ec.firebaseapp.com",
    projectId: "taxa-ca7ec",
    storageBucket: "taxa-ca7ec.appspot.com",
    messagingSenderId: "66856931301",
    appId: "1:66856931301:web:ee653d801cf12d2c9ca90c",
    measurementId: "G-SCQ3L2C189"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const storage = getStorage(app);
export const auth = getAuth(app);
//enablePersistentCacheIndexAutoCreation(app);
export const signInUser = (email, password, setError) => {
  signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    const user = userCredential.user;
    alert(`User with ${user.email} has logged in successfully`);
  }).catch(async (error) => {
    const errorMessage = await error.message;
    setError(errorMessage);
  });
  return null;
}

//news
const newsCollectionRef = collection(db, "news");
export const getNews= async (pagination, setNews) => {
  var q = query(newsCollectionRef);
  q = query(newsCollectionRef, limit(pagination));
  //const q = query(newsCollectionRef, orderBy("title"), limit(pagination));
  const news = [];
  const querySnapshot = await getDocs(q).then((data) => {
    data.forEach((doc) => {
     news.push({id: doc.id,...doc.data()});
    });
  }).then(() => {
    setNews(news);
    console.log(news);
  });
};
 

export const getNewsItem = async (newsId, setNewsItem) => {
  const newsDocRef = doc(db, "news", newsId);
  const newsDoc = await getDoc(newsDocRef);
  if (newsDoc.exists()) {
    setNewsItem({id: newsDoc.id, ...newsDoc.data()})
  } else {
    console.log("No such document!");
  }
  return null;
};

export const addNewsViews = async (newsId) => {
  const newsDocRef = doc(db, "news", newsId);
  const newsDoc = await getDoc(newsDocRef);
  if (newsDoc.exists()) {
    try {
      await updateDoc(newsDocRef, {
        views: increment(1)
      });
      console.log("Document successfully updated!");
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  }
  return null;
};

export const addContact = async (data, setToast, setError) => {
  const contactsDocRef = doc(db, "contacts");
  await addDoc(contactsDocRef, data).then(async (userCredential) => {
    setToast("Thank you for contacting us! We will get back to you soon");
  })
  .catch(async (error) => {
    const errorMessage = await error.message;
    setError(errorMessage);
  });
};

export  const addNews = async (data, setError) => {
  if (data.image) {
    // Upload image to Firebase Storage
    const imageRef = ref(storage, `images/${data.image.name.split(" ").join("_")}`);
    // Create file metadata including the content type
    /** @type {any} */
    const metadata = {
        contentType: 'image/jpeg',
    };
    
    // Upload the file and metadata
    const uploadTask = await uploadBytes(imageRef, data.image, metadata).then((response) => {
      return getDownloadURL(response.ref);
    }).then(async(downloadURL) => {
      const newsDocRef = collection(db, "news");
      await addDoc(newsDocRef, {
        title: data.title,
        description: data.description,
        category: data.category,
        imageUrl: downloadURL,
        timestamp: new Date().toLocaleDateString()
      }).then(async (docRef) => {
        window.location.replace(`/news/${docRef.id}`);
      })
      .catch(async (error) => {
        setError(errorMessage);
      });
    })
    
  } else {
    alert('Please upload an image');
  }
};


// documentTags is an ALPHABETICALLY SORTED array of tags we are querying for
async function queryDocuments(documentTags){
    let indexCollectionRef = db.collection("tag-tree")
    for (const tag of documentTags) {
        indexCollectionRef = indexCollectionRef.doc("index").collection(tag)
    }
    // returns all documents that are tagged 
    //  ordering can be applied to the query on any one of the sorting fields
    return await indexCollectionRef.get()
}