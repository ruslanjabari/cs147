import { createContext, useState } from 'react';
import { Yeezus } from '../icons';


export const UserDetailsContext = createContext();

// purchasedNFTs is a dictionary of artist keys and NFT objects from the artist:
// {"Kanye West": [{NFTName:....}]}
const UserDetailsProvider = (props) => {
    const [userDetails, setUserDetails] = useState({
        purchasedNFTs: { "Kanye West": [], "Drake": [], "The Strokes": [], "D. Savage": [] },
        following: [],
        potentialCommunities: [],
        joinedCommunities: []
    });

    return (
        <UserDetailsContext.Provider value={[userDetails, setUserDetails]}>
            {props.children}
        </UserDetailsContext.Provider>
    );
};

export default UserDetailsProvider;