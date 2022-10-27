class UserSerializer < ActiveModel::Serializer
  attributes :id, :name,:age,:password
  has_many :pipes
 
end
