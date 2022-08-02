class Phone < ActiveRecord::Base
    belongs_to :company, :optional => true
end