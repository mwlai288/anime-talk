class CreateAnimes < ActiveRecord::Migration[5.1]
  def change
    create_table :animes do |t|
      t.string :title
      t.string :plot
      t.string :poster

      t.timestamps
    end
  end
end
