class RenameExperiencePointCulumnToExpPoint < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :experience_point, :exp_point
  end
end
