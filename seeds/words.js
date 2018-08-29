
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('words').del()
    .then(function () {
      // Inserts seed entries
      return knex('words').insert([
        {id: 1, maori_word: 'Kia ora', pronunciation: '', filename: ''},
        {id: 2, maori_word: 'Hui', pronunciation: '', filename: ''},
        {id: 3, maori_word: 'Haere mai!', pronunciation: '', filename: ''},
        {id: 4, maori_word: 'Nau mai!', pronunciation: '', filename: ''},
        {id: 5, maori_word: 'Manuhiri', pronunciation: '', filename: ''},
        {id: 6, maori_word: 'Tangata whenua', pronunciation: '', filename: ''},
        {id: 7, maori_word: 'Whaikōrero', pronunciation: '', filename: ''},
        {id: 8, maori_word: 'Kaikōrero', pronunciation: '', filename: ''},
        {id: 9, maori_word: 'Waiata', pronunciation: '', filename: ''},
        {id: 10, maori_word: 'Koha', pronunciation: '', filename: ''},
        {id: 11, maori_word: 'Wharepaku', pronunciation: '', filename: ''},
        {id: 12, maori_word: 'Aroha', pronunciation: '', filename: ''},
        {id: 13, maori_word: 'Manaakitanga', pronunciation: '', filename: ''},
        {id: 14, maori_word: 'Tino Rangatiratanga', pronunciation: '', filename: ''},
        {id: 15, maori_word: 'Whakapapa', pronunciation: '', filename: ''},
        {id: 16, maori_word: 'Whenua', pronunciation: '', filename: ''},
        {id: 17, maori_word: 'Tamariki', pronunciation: '', filename: ''},
        {id: 18, maori_word: 'Tāne', pronunciation: '', filename: ''},
        {id: 19, maori_word: 'Wahine', pronunciation: '', filename: ''},
        {id: 20, maori_word: 'Whānau', pronunciation: '', filename: ''},
        {id: 21, maori_word: 'Maunga', pronunciation: '', filename: ''},
        {id: 22, maori_word: 'Nui', pronunciation: '', filename: ''},
        {id: 23, maori_word: 'Mōrena', pronunciation: '', filename: ''},
        {id: 24, maori_word: 'Tēnā koe', pronunciation: '', filename: ''},
        {id: 25, maori_word: 'Ihu', pronunciation: '', filename: ''},
        {id: 26, maori_word: 'Māhunga', pronunciation: '', filename: ''},
        {id: 27, maori_word: 'Puku', pronunciation: '', filename: ''},
        {id: 28, maori_word: 'Ringa', pronunciation: '', filename: ''},
        {id: 29, maori_word: 'Waewae', pronunciation: '', filename: ''},
        {id: 30, maori_word: 'Whakarongo', pronunciation: '', filename: ''},
        {id: 31, maori_word: 'Hōha', pronunciation: '', filename: ''},
        {id: 32, maori_word: 'Paru', pronunciation: '', filename: ''},
      ]);
    });
};
