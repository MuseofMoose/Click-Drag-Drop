class AddMediaToPicture < ActiveRecord::Migration
  def change
    add_column :pictures, :media, :string
  end
end
