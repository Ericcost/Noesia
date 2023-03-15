# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Les 6 thèmes des énigmes

topics = ["Histoire et Géographie", "Science et Environnement", "Art et Littérature", "Philosophie et Religion", "Sport et Bien-être", "Divertissement"]

topics.each do |topic|
  Topic.create!(title: topic)
end

20.times do |i|
  User.create!(email: "user#{i+1}@gmail.com", password: "12345#{i}", username: "user#{i+1}")
end

20.times do |i|
  Enigma.create!(title: Faker::Movie.title, description: Faker::Lorem.sentence(word_count:25), world: 1, level: i, topic_id: Topic.all.sample.id, hint: 'Débrouille toi !')
end