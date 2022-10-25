class CreateHits < ActiveRecord::Migration[7.0]
  def change
    create_table :hits do |t|
      t.integer :user_id
      t.integer :pipe_id
      t.timestamp :time

      t.timestamps
    end
  end
end
