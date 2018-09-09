
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('words').del()
    .then(function () {
      // Inserts seed entries
      return knex('words').insert([
        {id: 1, maori_word: 'Kia ora', pronunciation: 'Key-ah-or-rah', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/2608.mp3"},
        {id: 2, maori_word: 'Hui', pronunciation: 'Who-ee', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/1528.mp3"},
        {id: 3, maori_word: 'Haere mai!', pronunciation: 'Hi-reh-my', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/717.mp3"},
        {id: 4, maori_word: 'Nau mai!', pronunciation: 'No-my', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/4356.mp3"},
        {id: 5, maori_word: 'Manuhiri', pronunciation: 'Mah-nuu-he-ree', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/3467.mp3"},
        {id: 6, maori_word: 'Tangata whenua', pronunciation: 'Tah-ng-ah-tah feh-nuu-ah', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/7420.mp3"},
        {id: 7, maori_word: 'Whaikōrero', pronunciation: 'F-eye-k-or-reh-ror', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/9313.mp3"},
        {id: 8, maori_word: 'Kaikōrero', pronunciation: 'K-eye-k-or-reh-ror', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/1949.mp3"},
        {id: 9, maori_word: 'Waiata', pronunciation: 'Why-ah-tah', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/9026.mp3"},
        {id: 10, maori_word: 'Koha', pronunciation: 'kor-hah', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/2771.mp3"},
        {id: 11, maori_word: 'Wharepaku', pronunciation: 'Far-reh-pah-kuu', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/11568.mp3"},
        {id: 12, maori_word: 'Aroha', pronunciation: 'Ah-ror-hah', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/414.mp3"},
        {id: 13, maori_word: 'Manaakitanga', pronunciation: 'Mah-nah-key-tah-ng-ah', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/3426.mp3"},
        {id: 14, maori_word: 'Tino Rangatiratanga', pronunciation: 'Tea-nor r-ah-ng-ah-tea-r-ah-tah-ng-ah', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/8124.mp3"},
        {id: 15, maori_word: 'Whakapapa', pronunciation: 'Far-car-pah-pah', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/9727.mp3"},
        {id: 16, maori_word: 'Whenua', pronunciation: 'Feh-nuu-ah', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/10256.mp3"},
        {id: 17, maori_word: 'Tamariki', pronunciation: 'Tah-mah-r-ee-key', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/7339.mp3"},
        {id: 18, maori_word: 'Tāne', pronunciation: 'Taah-neh', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/7378.mp3"},
        {id: 19, maori_word: 'Wahine', pronunciation: 'Wah-h-ee-neh', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/9003.mp3"},
        {id: 20, maori_word: 'Whānau', pronunciation: 'Faar-no', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/10062.mp3"},
        {id: 21, maori_word: 'Maunga', pronunciation: 'Mow-ng-ah', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/3952.mp3"},
        {id: 22, maori_word: 'Nui', pronunciation: 'Nuu-ee', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/4488.mp3"},
        {id: 23, maori_word: 'Mōrena', pronunciation: 'More-reh-nah', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/4213.mp3"},
        {id: 24, maori_word: 'Tēnā koe', pronunciation: 'Teh-nah Kweh', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/7919.mp3"},
        {id: 25, maori_word: 'Ihu', pronunciation: 'Ee-who', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/1674.mp3"},
        {id: 26, maori_word: 'Māhunga', pronunciation: 'Maah-who-ng-ah', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/3517.mp3"},
        {id: 27, maori_word: 'Puku', pronunciation: 'Poo-kuu', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/6143.mp3"},
        {id: 28, maori_word: 'Ringa', pronunciation: 'R-ee-ng-ah', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/6789.mp3"},
        {id: 29, maori_word: 'Waewae', pronunciation: 'Why-why', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/8974.mp3"},
        {id: 30, maori_word: 'Whakarongo', pronunciation: 'Fark-ah-roh-ngoh', filename: "https://drive.google.com/uc?export=download&id=1VZhPiGOb6CuI6ZLw1wzzITt-1Lv4EH7r"},
        {id: 31, maori_word: 'Hōhā', pronunciation: 'Whore-hah', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/1316.mp3"},
        {id: 32, maori_word: 'Paru', pronunciation: 'pah-roo', filename: "https://s3.amazonaws.com/media.tewhanake.maori.nz/dictionary/5331.mp3"},
      ]);
    });
};
