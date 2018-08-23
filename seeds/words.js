
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('words').del()
    .then(function () {
      // Inserts seed entries
      return knex('words').insert([
        {id: 1, maori_word: 'Kia ora', pronunciation: '', filename: ''},
        {id: 2, maori_word: 'Hui', pronunciation: '', filename: ''},
        {id: 3, maori_word: 'Marae', pronunciation: '', filename: ''},
        {id: 4, maori_word: 'Haere mai!', pronunciation: '', filename: ''},
        {id: 5, maori_word: 'Nau mai!', pronunciation: '', filename: ''},
        {id: 6, maori_word: 'Tangi', pronunciation: '', filename: ''},
        {id: 7, maori_word: 'Karanga', pronunciation: '', filename: ''},
        {id: 8, maori_word: 'Manuhiri', pronunciation: '', filename: ''},
        {id: 9, maori_word: 'Tangata whenua', pronunciation: '', filename: ''},
        {id: 10, maori_word: 'Whaikōrero', pronunciation: '', filename: ''},
        {id: 11, maori_word: 'Kaikōrero', pronunciation: '', filename: ''},
        {id: 12, maori_word: 'Waiata', pronunciation: '', filename: ''},
        {id: 13, maori_word: 'Koha', pronunciation: '', filename: ''},
        {id: 14, maori_word: 'Wharenui', pronunciation: '', filename: ''},
        {id: 15, maori_word: 'Wharepaku', pronunciation: '', filename: ''},
        {id: 16, maori_word: 'Aroha', pronunciation: '', filename: ''},
        {id: 17, maori_word: 'Manaakitanga', pronunciation: '', filename: ''},
        {id: 18, maori_word: 'Mauri', pronunciation: '', filename: ''},
        {id: 19, maori_word: 'Rohe', pronunciation: '', filename: ''},
        {id: 20, maori_word: 'Taihoa', pronunciation: '', filename: ''},
        {id: 22, maori_word: 'Taonga', pronunciation: '', filename: ''},
        {id: 23, maori_word: 'Tino Rangatiratanga', pronunciation: '', filename: ''},
        {id: 24, maori_word: 'Tūrangawaewae', pronunciation: '', filename: ''},
        {id: 25, maori_word: 'Whakapapa', pronunciation: '', filename: ''},
        {id: 26, maori_word: 'Whenua', pronunciation: '', filename: ''},
        {id: 27, maori_word: 'Iwi', pronunciation:'', filename: ''},
        {id: 28, maori_word: 'Hapū', pronunciation: '', filename: ''},
        {id: 29, maori_word: 'Pākehā', pronunciation: '', filename: ''},
        {id: 30, maori_word: 'Rangatira', pronunciation: '', filename: ''},
        {id: 31, maori_word: 'Tama', pronunciation: '', filename: ''},
        {id: 32, maori_word: 'Tamāhine', pronunciation: '', filename: ''},
        {id: 33, maori_word: 'Tamaiti', pronunciation: '', filename: ''},
        {id: 34, maori_word: 'Tamariki', pronunciation: '', filename: ''},
        {id: 35, maori_word: 'Tāne', pronunciation: '', filename: ''},
        {id: 36, maori_word: 'Teina', pronunciation: '', filename: ''},
        {id: 37, maori_word: 'Tipuna', pronunciation: '', filename: ''},
        {id: 38, maori_word: 'Tuahine', pronunciation: '', filename: ''},
        {id: 39, maori_word: 'Tuakana', pronunciation: '', filename: ''},
        {id: 40, maori_word: 'Tungāne', pronunciation: '', filename: ''},
        {id: 41, maori_word: 'Wahine', pronunciation: '', filename: ''},
        {id: 42, maori_word: 'Whānau', pronunciation: '', filename: ''},
        {id: 43, maori_word: 'Whanaunga', pronunciation: '', filename: ''},
        {id: 44, maori_word: 'Maunga', pronunciation: '', filename: ''},
        {id: 45, maori_word: 'Moana', pronunciation: '', filename: ''},
        {id: 46, maori_word: 'Motu', pronunciation: '', filename: ''},
        {id: 47, maori_word: 'Nui', pronunciation: '', filename: ''},
        {id: 48, maori_word: 'Haere rā', pronunciation: '', filename: ''},
        {id: 49, maori_word: 'Mōrena', pronunciation: '', filename: ''},
        {id: 50, maori_word: 'Tēnā koe', pronunciation: '', filename: ''},
        {id: 51, maori_word: 'Ihu', pronunciation: '', filename: ''},
        {id: 52, maori_word: 'Kakī', pronunciation: '', filename: ''},
        {id: 53, maori_word: 'Kauae', pronunciation: '', filename: ''},
        {id: 54, maori_word: 'Māhunga', pronunciation: '', filename: ''},
        {id: 55, maori_word: 'Manawa', pronunciation: '', filename: ''},
        {id: 56, maori_word: 'Niho', pronunciation: '', filename: ''},
        {id: 57, maori_word: 'Poho', pronunciation: '', filename: ''},
        {id: 58, maori_word: 'Puku', pronunciation: '', filename: ''},
        {id: 59, maori_word: 'Ringa', pronunciation: '', filename: ''},
        {id: 60, maori_word: 'Waewae', pronunciation: '', filename: ''},
        {id: 61, maori_word: 'Whakarongo', pronunciation: '', filename: ''},
        {id: 62, maori_word: 'Hōha', pronunciation: '', filename: ''},
        {id: 63, maori_word: 'Paru', pronunciation: '', filename: ''},
      ]);
    });
};
