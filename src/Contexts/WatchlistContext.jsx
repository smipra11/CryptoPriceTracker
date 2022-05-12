import React,{createContext} from 'react'
 export const WatchlistContext = createContext();


const WatchlistProvider =({children}) =>{
    return(
    <WatchlistContext.Provider value={{value:'yay'}}>
        {children}
    </WatchlistContext.Provider>
    )

}
export default WatchlistProvider
