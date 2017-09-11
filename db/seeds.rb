# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Anime.destroy_all
Post.destroy_all



attackontitan = Anime.create(title:'Attack on Titan', plot: 'test test test everyone diees', poster:'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5ODk1NzUyMl5BMl5BanBnXkFtZTgwMjUyNzEyMTE@._V1_SX300.jpg')
deathnote = Anime.create(title: 'Death Note', plot: 'test 2 test 2', poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BODkzMjhjYTQtYmQyOS00NmZlLTg3Y2UtYjkzN2JkNmRjY2FhXkEyXkFqcGdeQXVyNTM4MDQ5MDc@._V1_SX300.jpg')

Post.create(comment: 'good show cool cool cool', anime_id: attackontitan)
Post.create(comment: 'smart cool cool smart', anime_id: deathnote )