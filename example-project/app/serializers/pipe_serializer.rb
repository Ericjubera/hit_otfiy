class PipeSerializer < ActiveModel::Serializer
  attributes :id, :item_name, :color, :size, :image
end
