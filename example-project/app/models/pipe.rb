class Pipe < ApplicationRecord
    has_many :hits
    has_many :users, through: :hits
end
