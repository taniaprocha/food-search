[
  {name: 'Pão de mistura de trigo e centeio'},
  {name: 'Queijo flamengo light com menos 50% de gordura Terra Nostra'},
  {name: 'Água mineral natural'},
  {name: 'Sopa de vegetais'},
  {name: 'Azeite'},
  {name: 'Flocos de aveia'},
  {name: 'Leite de vaca UHT magro'},
  {name: 'Ovo de galinha cozido'},
].each do |attributes|
  Food.find_or_initialize_by(
    parameterized_name: ActiveSupport::Inflector.parameterize(attributes[:name]), 
  ).update!(attributes)
end



