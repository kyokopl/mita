
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('places').del()
    .then(function () {
      // Inserts seed entries
      return knex('places').insert([
        {id: 1, name: 'Waiwhetū', pronunciation: 'Why-fet-oo', filename: ''},
        {id: 2, name: 'Wainuiomata', pronunciation: 'Why-noo-ee-or-mah-tah', filename: ''},
        {id: 3, name: 'Pōneke', pronunciation: 'Poor-neh-keh', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/5810.mp3"},
        {id: 4, name: 'Porirua', pronunciation: 'Poor-ree-r-oo-ah', filename: ''},
        {id: 5, name: 'Aotea', pronunciation: 'Oh-teh-ah', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/267.mp3"},
        {id: 6, name: 'Kenepuru', pronunciation: 'Ken-air-poo-rew', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/2557.mp3"},
        {id: 7, name: 'Papakowhai', pronunciation: 'Pah-pah-kor-f-eye', filename: ''},
        {id: 8, name: 'Taupō', pronunciation: 'Toe-poor', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/15449.mp3"},
        {id: 9, name: 'Paremata', pronunciation: 'Par-reh-mah-tah', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/5297.mp3"},
        {id: 10, name: 'Paraparaumu', pronunciation: 'Pah-rah-pah-rah-eww-moo', filename: ''},
        {id: 11, name: 'Pukerua', pronunciation: 'Poo-keh-r-eww-ah', filename: ''},
        {id: 12, name: 'Waikanae', pronunciation: 'why-car-n-eye', filename: ''},
        {id: 13, name: 'Te Aro', pronunciation: 'Teh Ah-ro', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/7883.mp3"},
        {id: 14, name: 'Karori', pronunciation: 'Car-r-oar-ee', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/47731.mp3"},
        {id: 15, name: 'Hataitai', pronunciation: 'Hah-tie-tie', filename: ""},
        {id: 16, name: 'Horokiwi', pronunciation: 'Whore-ror-key-wee', filename: ''},
        {id: 17, name: 'Kaiwharawhara', pronunciation: 'K-eye-far-ah-far-ah', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/41588.mp3"},
        {id: 18, name: 'Makara', pronunciation: 'Mah-car-rah', filename: ''},
        {id: 19, name: 'Maupuia', pronunciation: 'Mow-poo-ee-yah', filename: ''},
        {id: 20, name: 'Ngaio', pronunciation: 'Ng-ah-ee-yo', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/4521.mp3"},
        {id: 21, name: 'Ngauranga', pronunciation: 'Ng-owe-rah-ng-ah', filename: ''},
        {id: 22, name: 'Ohariu', pronunciation: 'Oar-hah-ree-yew', filename: ''},
        {id: 23, name: 'Owhiro', pronunciation: 'Oar-fee-roh', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/4851.mp3"},
        {id: 24, name: 'Paparangi', pronunciation: 'Pah-pah-rah-ng-ee', filename: ''},
        {id: 25, name: 'Rongotai', pronunciation: 'Roh-ng-oar-tie', filename: ''},
        {id: 26, name: 'Tawa', pronunciation: 'Tah-wah', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/7817.mp3"},
        {id: 27, name: 'Naenae', pronunciation: 'n-eye-n-eye', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/43177.mp3"},
        {id: 28, name: 'Titahi', pronunciation: 'Tea-tah-hee', filename: ''},
      ]);
    });
};
