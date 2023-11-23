import { doc, getDoc, updateDoc } from "@firebase/firestore";
import { auth, db } from "../firebase";
import { async } from "@firebase/util";

export const bagItems = async() => {
    
    const userDocRef = doc(db, "users", auth.currentUser.uid)
    const userDocSnapshot = await getDoc(userDocRef)
    const data = userDocSnapshot.data().bag
    return {data, success: true}
}

export const addToBag = async(productId, qty) => {
  
    const productRef = doc(db, "products", productId)
    const userDocRef = doc(db, "users", auth.currentUser.uid)
    const productSnapshot = await getDoc(productRef)
    const userDocSnapshot = await getDoc(userDocRef)
    if(userDocSnapshot.exists() && productSnapshot.exists()) {
        const userData = userDocSnapshot.data()
        const productData = productSnapshot.data()
        const bagItems = userData.bag || []
        bagItems.push({
            id: itemId,
            title: productData.prodTitle,
            price: productData.prodPrice,
            image: productData.prodImage,
            qty: qty
        })
        await updateDoc(userDocRef, {bag: bagItems})
        return{success: true, data: bagItems}
        
    } else {
        console.error("Product doesn't exist")
    }
}