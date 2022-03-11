import { createContext, useState } from 'react';
import { Yeezus } from '../icons';

const CampaignDescriptions = {
    "YEEZUS": 'Having been vocal about it for years, Ye is donating 10% of proceeds to the "Free Larry Hoover" campaign',
    "DONDA": 'Ye is donating 15% of proceeds to the "Cancel SNL" campaign',
    "THE L": 'Ye is donating 5% of proceeds to Blue Star Moms',
    "VIEWS": 'Drake is donating 1% of proceeds to CARE charity',
    "CLB": 'Drake is donating 8% of proceeds to the Wounded Warrior Project',
    "SCORPION": 'Drake is donating 10% of proceeds to "Save the Children"',
    "IS THIS IT": "The Strokes are donating 5% of proceeds to St. Jude Children's Research Hospital",
    "ANGLES": 'The Strokes are donating 7% of proceeds to Smile Train Charity',
    "ROOM": 'The Strokes are donating 15% of proceeds to the International Rescue Committee',
    "D PHOENIX": 'D. Savage is donating 10% of proceeds to Camp Kesem',
    "TRUST": 'D. Savage is donating 12% of proceeds to Stanford',
    "BPL": 'D. Savage is donating 15% of proceeds to Heifer International'
}

export const NFTsContext = createContext();

const NFTsProvider = (props) => {
    console.log(NFTs, "NFTs in providr")
    const [NFTs, setNFTs] = useState({
        "YEEZUS":
            [
                {
                    NFTName: "BOUND 2 #001",
                    albumName: "YEEZUS",
                    color: "red",
                    val: "7.4 ETH",
                    width: 200,
                    showInfo: false,
                    desc: 'Having been vocal about it for years, Ye is donating 10% of proceeds to the "Free Larry Hoover" campaign',
                    artist: "Kanye West",
                    sold: false
                },
                {
                    NFTName: "BOUND 2 #002",
                    albumName: "YEEZUS",
                    color: "orange",
                    val: "7.4 ETH",
                    width: 200,
                    showInfo: false,
                    desc: 'Having been vocal about it for years, Ye is donating 10% of proceeds to the "Free Larry Hoover" campaign',
                    artist: "Kanye West",
                    sold: false
                },
                {
                    NFTName: "BOUND 2 #003",
                    albumName: "YEEZUS",
                    color: "#b89d00",
                    val: "7.4 ETH",
                    width: 200,
                    showInfo: false,
                    desc: 'Having been vocal about it for years, Ye is donating 10% of proceeds to the "Free Larry Hoover" campaign',
                    artist: "Kanye West",
                    sold: false
                },
                {
                    NFTName: "BOUND 2 #004",
                    albumName: "YEEZUS",
                    color: "green",
                    val: "7.4 ETH",
                    width: 200,
                    showInfo: false,
                    desc: 'Having been vocal about it for years, Ye is donating 10% of proceeds to the "Free Larry Hoover" campaign',
                    artist: "Kanye West",
                    sold: false
                },
                {
                    NFTName: "BOUND 2 #005",
                    albumName: "YEEZUS",
                    color: "cyan",
                    val: "7.4 ETH",
                    width: 200,
                    showInfo: false,
                    desc: 'Having been vocal about it for years, Ye is donating 10% of proceeds to the "Free Larry Hoover" campaign',
                    artist: "Kanye West",
                    sold: false
                },
                {
                    NFTName: "BOUND 2 #006",
                    albumName: "YEEZUS",
                    color: "blue",
                    val: "7.4 ETH",
                    width: 200,
                    showInfo: false,
                    desc: 'Having been vocal about it for years, Ye is donating 10% of proceeds to the "Free Larry Hoover" campaign',
                    artist: "Kanye West",
                    sold: false
                }
            ],
        "DONDA":
            [
                {
                    NFTName: "Jail #001",
                    albumName: "DONDA",
                    color: "red",
                    val: "7.2 ETH",
                    width: 200,
                    showInfo: false,
                    desc: 'Ye is donating 15% of proceeds to the "Cancel SNL" campaign',
                    artist: "Kanye West",
                    sold: false
                },
                {
                    NFTName: "Jail #002",
                    albumName: "DONDA",
                    color: "orange",
                    val: "7.2 ETH",
                    width: 200,
                    showInfo: false,
                    desc: 'Ye is donating 15% of proceeds to the "Cancel SNL" campaign',
                    artist: "Kanye West",
                    sold: false
                },
                {
                    NFTName: "Jail #003",
                    albumName: "DONDA",
                    color: "#b89d00",
                    val: "7.2 ETH",
                    width: 200,
                    showInfo: false,
                    desc: 'Ye is donating 15% of proceeds to the "Cancel SNL" campaign',
                    artist: "Kanye West",
                    sold: false
                },
                {
                    NFTName: "Jail #004",
                    albumName: "DONDA",
                    color: "green",
                    val: "7.2 ETH",
                    width: 200,
                    showInfo: false,
                    desc: 'Ye is donating 15% of proceeds to the "Cancel SNL" campaign',
                    artist: "Kanye West",
                    sold: false
                },
                {
                    NFTName: "Jail #005",
                    albumName: "DONDA",
                    color: "cyan",
                    val: "7.2 ETH",
                    width: 200,
                    showInfo: false,
                    desc: 'Ye is donating 15% of proceeds to the "Cancel SNL" campaign',
                    artist: "Kanye West",
                    sold: false
                },
                {
                    NFTName: "Jail #006",
                    albumName: "DONDA",
                    color: "blue",
                    val: "7.2 ETH",
                    width: 200,
                    showInfo: false,
                    desc: 'Ye is donating 15% of proceeds to the "Cancel SNL" campaign',
                    artist: "Kanye West",
                    sold: false
                }
            ],
        "THE L":
            [
                {
                    NFTName: "Famous #001",
                    albumName: "THE L",
                    color: "red",
                    val: "7.1 ETH",
                    width: 200,
                    showInfo: false,
                    desc: 'Ye is donating 5% of proceeds to Blue Star Moms',
                    artist: "Kanye West",
                    sold: false
                },
                {
                    NFTName: "Famous #002",
                    albumName: "THE L",
                    color: "orange",
                    val: "7.1 ETH",
                    width: 200,
                    showInfo: false,
                    desc: 'Ye is donating 5% of proceeds to Blue Star Moms',
                    artist: "Kanye West",
                    sold: false
                },
                {
                    NFTName: "Famous #003",
                    albumName: "THE L",
                    color: "#b89d00",
                    val: "7.1 ETH",
                    width: 200,
                    showInfo: false,
                    desc: 'Ye is donating 5% of proceeds to Blue Star Moms',
                    artist: "Kanye West",
                    sold: false
                },
                {
                    NFTName: "Famous #004",
                    albumName: "THE L",
                    color: "green",
                    val: "7.1 ETH",
                    width: 200,
                    showInfo: false,
                    desc: 'Ye is donating 5% of proceeds to Blue Star Moms',
                    artist: "Kanye West",
                    sold: false
                },
                {
                    NFTName: "Famous #005",
                    albumName: "THE L",
                    color: "cyan",
                    val: "7.1 ETH",
                    width: 200,
                    showInfo: false,
                    desc: 'Ye is donating 5% of proceeds to Blue Star Moms',
                    artist: "Kanye West",
                    sold: false
                },
                {
                    NFTName: "Famous #006",
                    albumName: "THE L",
                    color: "blue",
                    val: "7.1 ETH",
                    width: 200,
                    showInfo: false,
                    desc: 'Ye is donating 5% of proceeds to Blue Star Moms',
                    artist: "Kanye West",
                    sold: false
                }
            ],
        "VIEWS":
            [
                {
                    NFTName: "Hype #001",
                    albumName: "VIEWS",
                    color: "red",
                    val: "6.8 ETH",
                    width: 200,
                    showInfo: false,
                    desc: 'Drake is donating 1% of proceeds to CARE charity',
                    artist: "Drake",
                    sold: false
                },
                {
                    NFTName: "Hype #002",
                    albumName: "VIEWS",
                    color: "orange",
                    val: "6.8 ETH",
                    width: 200,
                    showInfo: false,
                    desc: 'Drake is donating 1% of proceeds to CARE charity',
                    artist: "Drake",
                    sold: false
                },
                {
                    NFTName: "Hype #003",
                    albumName: "VIEWS",
                    color: "#b89d00",
                    val: "6.8 ETH",
                    width: 200,
                    showInfo: false,
                    desc: 'Drake is donating 1% of proceeds to CARE charity',
                    artist: "Drake",
                    sold: false
                },
                {
                    NFTName: "Hype #004",
                    albumName: "VIEWS",
                    color: "green",
                    val: "6.8 ETH",
                    width: 200,
                    showInfo: false,
                    desc: 'Drake is donating 1% of proceeds to CARE charity',
                    artist: "Drake",
                    sold: false
                },
                {
                    NFTName: "Hype #005",
                    albumName: "VIEWS",
                    color: "cyan",
                    val: "6.8 ETH",
                    width: 200,
                    showInfo: false,
                    desc: 'Drake is donating 1% of proceeds to CARE charity',
                    artist: "Drake",
                    sold: false
                },
                {
                    NFTName: "Hype #006",
                    albumName: "VIEWS",
                    color: "blue",
                    val: "6.8 ETH",
                    width: 200,
                    showInfo: false,
                    desc: 'Drake is donating 1% of proceeds to CARE charity',
                    artist: "Drake",
                    sold: false
                }
            ],
        "CLB":
            [
                {
                    NFTName: "IMY2 #001",
                    albumName: "CLB",
                    color: "red",
                    val: "9.1 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["CLB"],
                    artist: "Drake",
                    sold: false
                },
                {
                    NFTName: "IMY2 #002",
                    albumName: "CLB",
                    color: "orange",
                    val: "9.1 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["CLB"],
                    artist: "Drake",
                    sold: false
                },
                {
                    NFTName: "IMY2 #003",
                    albumName: "CLB",
                    color: "#b89d00",
                    val: "9.1 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["CLB"],
                    artist: "Drake",
                    sold: false
                },
                {
                    NFTName: "IMY2 #004",
                    albumName: "CLB",
                    color: "green",
                    val: "9.1 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["CLB"],
                    artist: "Drake",
                    sold: false
                },
                {
                    NFTName: "IMY2 #005",
                    albumName: "CLB",
                    color: "cyan",
                    val: "9.1 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["CLB"],
                    artist: "Drake",
                    sold: false
                },
                {
                    NFTName: "IMY2 #006",
                    albumName: "CLB",
                    color: "blue",
                    val: "9.1 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["CLB"],
                    artist: "Drake",
                    sold: false
                }
            ],
        "SCORPION":
            [
                {
                    NFTName: "Elevate #001",
                    albumName: "SCORPION",
                    color: "red",
                    val: "7.1 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["SCORPION"],
                    artist: "Drake",
                    sold: false
                },
                {
                    NFTName: "Elevate #002",
                    albumName: "SCORPION",
                    color: "orange",
                    val: "7.1 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["SCORPION"],
                    artist: "Drake",
                    sold: false
                },
                {
                    NFTName: "Elevate #003",
                    albumName: "SCORPION",
                    color: "#b89d00",
                    val: "7.1 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["SCORPION"],
                    artist: "Drake",
                    sold: false
                },
                {
                    NFTName: "Elevate #004",
                    albumName: "SCORPION",
                    color: "green",
                    val: "7.1 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["SCORPION"],
                    artist: "Drake",
                    sold: false
                },
                {
                    NFTName: "Elevate #005",
                    albumName: "SCORPION",
                    color: "cyan",
                    val: "7.1 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["SCORPION"],
                    artist: "Drake",
                    sold: false
                },
                {
                    NFTName: "Elevate #006",
                    albumName: "SCORPION",
                    color: "blue",
                    val: "7.1 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["SCORPION"],
                    artist: "Drake",
                    sold: false
                }
            ],
        "IS THIS IT":
            [
                {
                    NFTName: "Soma #001",
                    albumName: "IS THIS IT",
                    color: "red",
                    val: "3.2 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["IS THIS IT"],
                    artist: "The Strokes",
                    sold: false
                },
                {
                    NFTName: "Soma #002",
                    albumName: "IS THIS IT",
                    color: "orange",
                    val: "3.2 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["IS THIS IT"],
                    artist: "The Strokes",
                    sold: false
                },
                {
                    NFTName: "Soma #003",
                    albumName: "IS THIS IT",
                    color: "#b89d00",
                    val: "3.2 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["IS THIS IT"],
                    artist: "The Strokes",
                    sold: false
                },
                {
                    NFTName: "Soma #004",
                    albumName: "IS THIS IT",
                    color: "green",
                    val: "3.2 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["IS THIS IT"],
                    artist: "The Strokes",
                    sold: false
                },
                {
                    NFTName: "Soma #005",
                    albumName: "IS THIS IT",
                    color: "cyan",
                    val: "3.2 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["IS THIS IT"],
                    artist: "The Strokes",
                    sold: false
                },
                {
                    NFTName: "Soma #006",
                    albumName: "IS THIS IT",
                    color: "blue",
                    val: "3.2 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["IS THIS IT"],
                    artist: "The Strokes",
                    sold: false
                }
            ],
        "ANGLES":
            [
                {
                    NFTName: "Games #001",
                    albumName: "ANGLES",
                    color: "red",
                    val: "2.9 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["ANGLES"],
                    artist: "The Strokes",
                    sold: false
                },
                {
                    NFTName: "Games #002",
                    albumName: "ANGLES",
                    color: "orange",
                    val: "2.9 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["ANGLES"],
                    artist: "The Strokes",
                    sold: false
                },
                {
                    NFTName: "Games #003",
                    albumName: "ANGLES",
                    color: "#b89d00",
                    val: "2.9 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["ANGLES"],
                    artist: "The Strokes",
                    sold: false
                },
                {
                    NFTName: "Games #004",
                    albumName: "ANGLES",
                    color: "green",
                    val: "2.9 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["ANGLES"],
                    artist: "The Strokes",
                    sold: false
                },
                {
                    NFTName: "Games #005",
                    albumName: "ANGLES",
                    color: "cyan",
                    val: "2.9 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["ANGLES"],
                    artist: "The Strokes",
                    sold: false
                },
                {
                    NFTName: "Games #006",
                    albumName: "ANGLES",
                    color: "blue",
                    val: "2.9 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["ANGLES"],
                    artist: "The Strokes",
                    sold: false
                }
            ],
        "ROOM":
            [
                {
                    NFTName: "12:51 #001",
                    albumName: "ROOM",
                    color: "red",
                    val: "2.7 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["ROOM"],
                    artist: "The Strokes",
                    sold: false
                },
                {
                    NFTName: "12:51 #002",
                    albumName: "ROOM",
                    color: "orange",
                    val: "2.7 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["ROOM"],
                    artist: "The Strokes",
                    sold: false
                },
                {
                    NFTName: "12:51 #003",
                    albumName: "ROOM",
                    color: "#b89d00",
                    val: "2.7 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["ROOM"],
                    artist: "The Strokes",
                    sold: false
                },
                {
                    NFTName: "12:51 #004",
                    albumName: "ROOM",
                    color: "green",
                    val: "2.7 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["ROOM"],
                    artist: "The Strokes",
                    sold: false
                },
                {
                    NFTName: "12:51 #005",
                    albumName: "ROOM",
                    color: "cyan",
                    val: "2.7 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["ROOM"],
                    artist: "The Strokes",
                    sold: false
                },
                {
                    NFTName: "12:51 #006",
                    albumName: "ROOM",
                    color: "blue",
                    val: "2.7 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["ROOM"],
                    artist: "The Strokes",
                    sold: false
                }
            ],
        "D PHOENIX":
            [
                {
                    NFTName: "Opera #001",
                    albumName: "D PHOENIX",
                    color: "red",
                    val: "1.1 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["D PHOENIX"],
                    artist: "D. Savage",
                    sold: false
                },
                {
                    NFTName: "Opera #002",
                    albumName: "D PHOENIX",
                    color: "orange",
                    val: "1.1 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["D PHOENIX"],
                    artist: "D. Savage",
                    sold: false
                },
                {
                    NFTName: "Opera #003",
                    albumName: "D PHOENIX",
                    color: "#b89d00",
                    val: "1.1 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["D PHOENIX"],
                    artist: "D. Savage",
                    sold: false
                },
                {
                    NFTName: "Opera #004",
                    albumName: "D PHOENIX",
                    color: "green",
                    val: "1.1 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["D PHOENIX"],
                    artist: "D. Savage",
                    sold: false
                },
                {
                    NFTName: "Opera #005",
                    albumName: "D PHOENIX",
                    color: "cyan",
                    val: "1.1 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["D PHOENIX"],
                    artist: "D. Savage",
                    sold: false
                },
                {
                    NFTName: "Opera #006",
                    albumName: "D PHOENIX",
                    color: "blue",
                    val: "1.1 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["D PHOENIX"],
                    artist: "D. Savage",
                    sold: false
                }
            ],
        "TRUST":
            [
                {
                    NFTName: "Wytd #001",
                    albumName: "TRUST",
                    color: "red",
                    val: "1.5 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["TRUST"],
                    artist: "D. Savage",
                    sold: false
                },
                {
                    NFTName: "Wytd #002",
                    albumName: "TRUST",
                    color: "orange",
                    val: "1.5 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["TRUST"],
                    artist: "D. Savage",
                    sold: false
                },
                {
                    NFTName: "Wytd #003",
                    albumName: "TRUST",
                    color: "#b89d00",
                    val: "1.5 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["TRUST"],
                    artist: "D. Savage",
                    sold: false
                },
                {
                    NFTName: "Wytd #004",
                    albumName: "TRUST",
                    color: "green",
                    val: "1.5 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["TRUST"],
                    artist: "D. Savage",
                    sold: false
                },
                {
                    NFTName: "Wytd #005",
                    albumName: "TRUST",
                    color: "cyan",
                    val: "1.5 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["TRUST"],
                    artist: "D. Savage",
                    sold: false
                },
                {
                    NFTName: "Wytd #006",
                    albumName: "TRUST",
                    color: "blue",
                    val: "1.5 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["TRUST"],
                    artist: "D. Savage",
                    sold: false
                }
            ],
        "BPL":
            [
                {
                    NFTName: "Runtz #001",
                    albumName: "BPL",
                    color: "red",
                    val: "1.8 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["BPL"],
                    artist: "D. Savage",
                    sold: false
                },
                {
                    NFTName: "Runtz #002",
                    albumName: "BPL",
                    color: "orange",
                    val: "1.8 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["BPL"],
                    artist: "D. Savage",
                    sold: false
                },
                {
                    NFTName: "Runtz #003",
                    albumName: "BPL",
                    color: "#b89d00",
                    val: "1.8 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["BPL"],
                    artist: "D. Savage",
                    sold: false
                },
                {
                    NFTName: "Runtz #004",
                    albumName: "BPL",
                    color: "green",
                    val: "1.8 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["BPL"],
                    artist: "D. Savage",
                    sold: false
                },
                {
                    NFTName: "Runtz #005",
                    albumName: "BPL",
                    color: "cyan",
                    val: "1.8 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["BPL"],
                    artist: "D. Savage",
                    sold: false
                },
                {
                    NFTName: "Runtz #006",
                    albumName: "BPL",
                    color: "blue",
                    val: "1.8 ETH",
                    width: 200,
                    showInfo: false,
                    desc: CampaignDescriptions["BPL"],
                    artist: "D. Savage",
                    sold: false
                }
            ],

    }
    );

    return (
        <NFTsContext.Provider value={[NFTs, setNFTs]}>
            {props.children}
        </NFTsContext.Provider>
    );
};

export default NFTsProvider;