import { createContext, useState } from 'react';
import { Yeezus } from '../icons';


export const UserDetailsContext = createContext();

// purchasedNFTs is a dictionary of artist keys and NFT objects from the artist:
// {"Kanye West": [{NFTName:....}]}

// messagesSent is [{userSentTo: [message, message, etc.]}]
const UserDetailsProvider = (props) => {
    const [userDetails, setUserDetails] = useState({
        purchasedNFTs: { "Kanye West": [], "Drake": [], "The Strokes": [], "D. Savage": [] },
        following: [],
        potentialCommunities: [],
        joinedCommunities: [],
        messagesSent: { "Walk5": [], "Ali2": [], "Milo7": [], "Kanye West": [], "The Strokes": [], "D. Savage": [], "Drake": [] }
    });

    return (
        <UserDetailsContext.Provider value={[userDetails, setUserDetails]}>
            {props.children}
        </UserDetailsContext.Provider>
    );
};

export default UserDetailsProvider;