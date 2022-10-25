class HitSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :pipe_id, :time
  
end
