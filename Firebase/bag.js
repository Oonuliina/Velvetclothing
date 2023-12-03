import {  doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebase";


export const getBagItems = async() => {
    const userDocRef = doc(db,"users",auth.currentUser.uid)
    const userDocSnapshot = await getDoc(userDocRef)
    const data = await userDocSnapshot.data().bag;
    return {data,success:true};
}

export const addToBag=async(itemId,qty)=>{
    console.log(itemId,qty)
    const productRef = doc(db,"products",itemId)
    const userDocRef = doc(db,"users",auth.currentUser.uid)
    const productSnapshot = await getDoc(productRef)
    const userDocSnapshot = await getDoc(userDocRef)
    if(userDocSnapshot.exists() && productSnapshot.exists()){
        const userData = userDocSnapshot.data();
        const productData = productSnapshot.data();
        const bagItems = userData.bag || [];
        bagItems.push({
            id:itemId,
            title:productData.prodTitle,
            price:productData.prodPrice,
            image:productData.prodImage,
            qty:qty,
        })
        await updateDoc(userDocRef, {bag: bagItems})
        console.log("items added to bag")
        return {success: true, data: bagItems}
    } else {
        console.error("user or product doesnt exist")
    }
}

export const removeItemById = async(id) => {
        const userDocRef = doc(db,"users",auth.currentUser.uid);
        const userDocSnapshot = await getDoc(userDocRef);
        if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data();
            const newBag = userData.bag.filter((item) => item.id !== id);
            await updateDoc(userDocRef, {bag:newBag})
            const subTotal = newBag.reduce((acc,curr) => acc + Number(curr.price))
            return {data: newBag, success: true, subTotal}
        } else {
            console.log("user doesn't exist")
        }
    }