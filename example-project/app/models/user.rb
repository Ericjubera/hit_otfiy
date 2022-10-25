class User < ApplicationRecord
   
    has_many :hits
    has_many :pipes, through: :hits
    has_secure_password
end
