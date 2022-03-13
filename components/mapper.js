// campaign mapper; hard coded

// const map = [
//   {
//     'Kanye West': {
//       albumName: 'TeamYe',
//       NFTName: 'TeamYe',
//       mem: '21,045',
//       desc: "Exclusive community available to fans who own NFTs from Yeat's“Up 2 Me” Campaign",
//     },
//   },
//   { Drake: { albumName: 'ClubStrokes', NFTName: 'ClubStrokes', mem: '5,671' } },
//   { 'The Strokes': { albumName: 'DrakeZone', NFTName: 'DrakeZone', mem: '32,135' } },
//   { 'D. Savage': { albumName: 'DSavCente', NFTName: 'DSavCente', mem: '934' } },
// ];

function mapper() {
  return [
    {
      'Kanye West': {
        albumName: 'TeamYe',
        NFTName: 'TeamYe',
        mem: '21,045',
        desc: "Exclusive community available to fans who own NFTs from Yeat's“Up 2 Me” Campaign",
        events: [
          { eventTitle: 'Donda Tour', eventLocation: 'Crypto.com Staduim' },
          { eventTitle: 'Donda 2 Listening party', eventLocation: 'Mercedes Staduim' },
        ],
      },
    },
    {
      'The Strokes': {
        albumName: 'ClubStrokes',
        NFTName: 'ClubStrokes',
        mem: '5,671',
        desc: 'Exclusive community available to fans who own a The Strokes NFT',
        events: [
          { eventTitle: 'SF Concert', eventLocation: 'SF' },
          { eventTitle: 'LA Concert', eventLocation: 'LA' },
          { eventTitle: 'NYC Concert', eventLocation: 'NYC' },
          { eventTitle: 'Atlanta Concert', eventLocation: 'Atlanta' },
          { eventTitle: 'Philly Concert', eventLocation: 'Philly' },
          { eventTitle: 'DC Concert', eventLocation: 'DC' },
        ],
      },
    },
    {
      Drake: {
        albumName: 'DrakeZone',
        NFTName: 'DrakeZone',
        mem: '32,135',
        desc: 'Exclusive community available to fans who own a Drake NFT',
        events: [
          { eventTitle: 'Toronto Concert', eventLocation: 'Toronto' },
          { eventTitle: 'SF Concert', eventLocation: 'SF' },
          { eventTitle: 'Ottawa Concert', eventLocation: 'Ottawa' },
          { eventTitle: 'LA Concert', eventLocation: 'LA' },
          { eventTitle: 'NYC Concert', eventLocation: 'NYC' },
        ],
      },
    },
    {
      'D. Savage': {
        albumName: 'DSavCenter',
        NFTName: 'DSavCenter',
        mem: '934',
        desc: 'Exclusive community available to fans who own a D.Savage NFT',
        events: [
          { eventTitle: 'D. Savage listening party', eventLocation: 'IG LIVE' },
          { eventTitle: 'Album sneak peak', eventLocation: 'IG LIVE' },
          { eventTitle: 'Meet & Greet', eventLocation: 'LA' },
          { eventTitle: 'Live Q&A', eventLocation: 'IG LIVE' },
        ],
      },
    },
  ];
}

module.exports = mapper;
