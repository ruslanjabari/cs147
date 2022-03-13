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
      },
    },
    { Drake: { albumName: 'ClubStrokes', NFTName: 'ClubStrokes', mem: '5,671' } },
    { 'The Strokes': { albumName: 'DrakeZone', NFTName: 'DrakeZone', mem: '32,135' } },
    { 'D. Savage': { albumName: 'DSavCente', NFTName: 'DSavCente', mem: '934' } },
  ];
}

module.exports = mapper;
