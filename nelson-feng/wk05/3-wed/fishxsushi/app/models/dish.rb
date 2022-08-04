class Dish < ActiveRecord::Base 
    belongs_to :fish, :optional => true
end