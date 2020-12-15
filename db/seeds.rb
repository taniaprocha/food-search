[
  {name: 'Pão de mistura de trigo e centeio', energy: 272, fat: 1, carbohydrates: 54, protein: 9},
  {name: 'Queijo flamengo light com menos 50% de gordura Terra Nostra', energy: 235, fat: 13, carbohydrates: 1, protein: 28},
  {name: 'Água mineral natural', energy: 0, fat: 0, carbohydrates: 0, protein: 0},
  {name: 'Sopa de vegetais', energy: 11, fat: 0, carbohydrates: 1, protein: 1},
  {name: 'Azeite', energy: 899, fat: 100, carbohydrates: 0, protein: 0},
  {name: 'Flocos de aveia', energy: 366, fat: 6, carbohydrates: 62, protein: 14},
  {name: 'Babybel Light', energy: 208, fat: 12, carbohydrates: 1, protein: 25},
  {name: 'Leite de vaca UHT magro', energy: 35, fat: 0, carbohydrates: 5, protein: 3},
  {name: 'Ovo de galinha cozido', energy: 149, fat: 11, carbohydrates: 0, protein: 13},
].each do |attributes|
  Food.find_or_initialize_by(name: attributes[:name], 
    parameterized_name: ActiveSupport::Inflector.parameterize(attributes[:name]), 
    energy: attributes[:energy], 
    fat: attributes[:fat], 
    protein: attributes[:protein]).update!(attributes)
end

