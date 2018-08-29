
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('places').del()
    .then(function () {
      // Inserts seed entries
      return knex('places').insert([
        {id: 1, name: 'Waiwhetū', pronunciation: 'Why-fet-oo', filename: ''},
        {id: 2, name: 'Wainuiomata', pronunciation: 'Why-noo-ee-or-mah-tah', filename: ''},
        {id: 3, name: 'Pōneke', pronunciation: 'Poor-neh-keh', filename: ''},
        {id: 4, name: 'Porirua', pronunciation: 'Poor-ree-r-oo-ah', filename: ''},
        {id: 5, name: 'Aotea', pronunciation: 'Oh-teh-ah', filename: ''},
        {id: 6, name: 'Kenepuru', pronunciation: '', filename: ''},
        {id: 7, name: 'Papakowhai', pronunciation: '', filename: ''},
        {id: 8, name: 'Taupō', pronunciation: '', filename: ''},
        {id: 9, name: 'Paremata', pronunciation: '', filename: ''},
        {id: 10, name: 'Paraparaumu', pronunciation: '', filename: ''},
        {id: 11, name: 'Pukerua', pronunciation: '', filename: ''},
        {id: 12, name: 'Waikanae', pronunciation: '', filename: ''},
        {id: 13, name: 'Te Aro', pronunciation: '', filename: ''},
        {id: 14, name: 'Karori', pronunciation: '', filename: ''},
        {id: 15, name: 'Hataitai', pronunciation: '', filename: ''},
        {id: 16, name: 'Horokiwi', pronunciation: '', filename: ''},
        {id: 17, name: 'Kaiwharawhara', pronunciation: '', filename: ''},
        {id: 18, name: 'Makara', pronunciation: '', filename: ''},
        {id: 19, name: 'Maupuia', pronunciation: '', filename: ''},
        {id: 20, name: 'Ngaio', pronunciation: '', filename: ''},
        {id: 21, name: 'Ngauranga', pronunciation: '', filename: ''},
        {id: 22, name: 'Ohariu', pronunciation: '', filename: ''},
        {id: 23, name: 'Owhiro', pronunciation: '', filename: ''},
        {id: 24, name: 'Paparangi', pronunciation: '', filename: ''},
        {id: 25, name: 'Rongotai', pronunciation: '', filename: ''},
        {id: 26, name: 'Tawa', pronunciation: '', filename: ''},
        {id: 27, name: 'Naenae', pronunciation: '', filename: ''},
        {id: 28, name: 'Titahi', pronunciation: '', filename: ''},
      ]);
    });
};
