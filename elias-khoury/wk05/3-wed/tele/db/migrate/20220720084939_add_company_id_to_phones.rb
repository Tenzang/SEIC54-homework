class AddCompanyIdToPhones < ActiveRecord::Migration[5.2]
  def change
    add_column :phones, :company_id, :integer
  end
end
