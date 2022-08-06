Food.destroy_all

Food.create(:name => 'corn', :species => 'Zea mays convar. saccharata var. rugosa', :othername => 'Sweet corn, maize', :density => '1.32 g/cm', :funfact => 'In Malaysia, there exists a variety unique to the region of Cameron highlands named "pearl corn". The kernels are glossy white resembling pearls and can be eaten raw of the cob but often boiled in water and salt.', :image => 'https://en.wikipedia.org/wiki/File:VegCorn.jpg')

puts "#{ Food.count } foods created."

Recipe.destroy_all

Recipe.create(:name => 'Creamy corn soup', :ingredients => '6 corn cobs', :serving => '6', :time => '35m', :method => 'Step 1', :image => 'https://img.taste.com.au/48i6NFNk/w720-h480-cfill-q80/taste/2016/11/creamy-corn-soup-106552-1.jpeg')

puts "#{ recipe.count } recipes created."

# 6 corn cobs, husks and silks removed
# 2 tsp olive oil
# 1 brown onion, finely chopped
# 1 celery stick, finely chopped
# 1 leek, pale section only, thickly sliced
# 2 garlic cloves, crushed
# 2 Red Royale potatoes, peeled, coarsely chopped
# 4 cups (1L) Massel chicken style liquid stock or vegetable liquid stock
# 1/2 cup (125ml) light cream
# 2 bacon rashers, finely chopped
# Light cream, extra, to drizzle
# Finely chopped chives, to serve

# Step 1
# Use a sharp knife to cut down the side of each corn cob to remove the kernels. Reserve the corn cobs .
# Step 2
# Heat the oil in a large saucepan over medium heat. Add the onion , celery , leek and garlic . Cook, stirring, for 5 mins or until the onion softens. Add the corn kernels, reserved corn cobs, potato , stock and 2 cups (500ml) water. Bring to the boil. Reduce heat to medium-low and cook, stirring occasionally, for 30 mins or until the potato is tender. Set aside to cool slightly.
# Step 3
# Use tongs to remove and discard the corn cobs. Carefully use a stick blender to blend mixture until smooth. Season. Add the cream and stir to combine.
# Step 4
# Meanwhile, cook the bacon , stirring, in a frying pan over medium-high heat for 2 mins or until the bacon is crisp. Transfer to a plate lined with paper towel.
# Step 5
# Divide the soup among serving bowls. Drizzle with extra cream and sprinkle with bacon and chives .
