import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';


const app = initializeApp({
	apiKey: 'AIzaSyCy4VqSDMRs9wx4KpmqzWAr37AuLGjBAgU',
	authDomain: 'rokeru-prod.firebaseapp.com',
	projectId: 'rokeru-prod',
	storageBucket: 'rokeru-prod.appspot.com',
	messagingSenderId: '163344002106',
	appId: '1:163344002106:web:4e92c338b8906cb37c5903',
	measurementId: 'G-VL890EC57T'
});


const db = getFirestore(app);

const initialize = async () => {
	try {
		console.log('Background script initialized',);

		const snap = await getDocs(collection(db, 'test'));

		console.log('fetched documents', snap.size)
	} catch (error) {
		console.error('initialize', error);
	}
};

void initialize();
