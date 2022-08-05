class Song < ActiveRecord::Base
    belongs_to :band, :optional  => true
end