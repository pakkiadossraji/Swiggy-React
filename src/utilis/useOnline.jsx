import { useEffect, useState } from "react"

const useOnline =()=>{
    const [isOnline,setIsOnline] = useState(true);

    useEffect(()=>{
         const handleOnline = () =>{
            setIsOnline(true);
         }
         const handOffline = () =>{
            setIsOnline(false);
         }
        window.addEventListener("online",handleOnline);
        window.addEventListener("offline", handOffline);
        return () =>{
            window.addEventListener("online",handleOnline);
            window.addEventListener("offline", handOffline);
        }
    },[])
    return isOnline
}
export default useOnline