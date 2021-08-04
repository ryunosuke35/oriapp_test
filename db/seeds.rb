# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


LevelSetting.create(:level => 1, :thresold => 5)
LevelSetting.create(:level => 2, :thresold => 10)
LevelSetting.create(:level => 3, :thresold => 30)
LevelSetting.create(:level => 4, :thresold => 60)
LevelSetting.create(:level => 5, :thresold => 100)
LevelSetting.create(:level => 6, :thresold => 150)
LevelSetting.create(:level => 7, :thresold => 210)
LevelSetting.create(:level => 8, :thresold => 280)
LevelSetting.create(:level => 9, :thresold => 360)
LevelSetting.create(:level => 10, :thresold => 450)
