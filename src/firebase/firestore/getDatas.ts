import firebase_app from "../config";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { doesNotReject } from "assert";

const db = getFirestore(firebase_app)
// TODO typing
export default async function getDatas(table: string) {

    let result : Array<Record<string, any>> = []
    let error = null;

    try {
        const snapshot = await getDocs(collection(db, table));
        snapshot.forEach(doc => {
          result.push({id: doc.id, ...doc.data()});
        })
    } catch (e) {
        error = e;
    }

    return { result, error };
}