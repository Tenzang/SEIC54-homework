class Recip < ActiveRecord::Base
    belongs_to :food, :optional => true
end