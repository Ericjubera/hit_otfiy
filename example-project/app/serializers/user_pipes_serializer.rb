class UserPipesSerializer < ActiveModel::Serializer
  attributes :id, :name,:age
  has_many :pipes
end
