class Player < ActiveRecord::Base
    belongs_to :team, :optional => true
end