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
      },
    },
    {
      Drake: {
        albumName: 'DrakeZone',
        NFTName: 'DrakeZone',
        mem: '32,135',
        desc: 'Exclusive community available to fans who own a Drake NFT',
      },
    },
    {
      'D. Savage': {
        albumName: 'DSavCente',
        NFTName: 'DSavCente',
        mem: '934',
        desc: 'Exclusive community available to fans who own a D.Savage NFT',
      },
    },
  ];
}

module.exports = mapper;
