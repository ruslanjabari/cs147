import { createContext, useState } from 'react';

export const HomeFeedContext = createContext();

const HomeFeedProvider = (props) => {
    const [homeFeed, setHomeFeed] = useState([
        {
            user: 'NickISAGoat',
            action: 'purchased',
            item: 'Bound 2 #004',
            likes: 4,
            liked: false, // hacky fix instead of storing users who liked
            artist: 'Ye',
            time: '15 minutes ago',
            NFTDetails: {
                NFTName: 'BOUND 2 #004',
                albumName: 'YEEZUS',
                color: 'green',
                val: '7.4 ETH',
                width: 200,
                showInfo: false,
                desc: 'Having been vocal about it for years, Ye is donating 10% of proceeds to the "Free Larry Hoover" campaign',
                artist: 'Kanye West',
                sold: false,
            },
        },
        {
            user: 'KANYE WEST',
            action: 'launched',
            item: 'DONDA',
            likes: 10,
            liked: false, // hacky fix instead of storing users who liked
            artist: 'Ye',
            time: '23 minutes ago',
            NFTDetails: null,
        },
    ]);

    return (
        <HomeFeedContext.Provider value={[homeFeed, setHomeFeed]}>
            {props.children}
        </HomeFeedContext.Provider>
    );
};

export default HomeFeedProvider;
