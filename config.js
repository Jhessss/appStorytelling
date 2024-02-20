import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: "AIzaSyA9VpuJkbelhoiwYQekZseurv-JT97e1XE",
	authDomain: "apphistorias-73b72.firebaseapp.com",
	databaseURL: "https://apphistorias-73b72-default-rtdb.firebaseio.com",
	projectId: "apphistorias-73b72",
	storageBucket: "apphistorias-73b72.appspot.com",
	messagingSenderId: "150871809281",
	appId: "1:150871809281:web:40d8ec743efa2065410f00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
