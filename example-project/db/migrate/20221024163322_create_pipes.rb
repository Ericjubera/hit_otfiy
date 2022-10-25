class CreatePipes < ActiveRecord::Migration[7.0]
  def change
    create_table :pipes do |t|
      t.string :item_name
      t.string :color
      t.string :size
      t.string :image

      t.timestamps
    end
  end
end
