class CreateHearts < ActiveRecord::Migration
  def change
    create_table :hearts do |t|
      t.references :user
      t.references :image, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
