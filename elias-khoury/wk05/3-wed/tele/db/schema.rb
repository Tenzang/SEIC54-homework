# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_07_20_084939) do

  create_table "companies", force: :cascade do |t|
    t.text "name"
    t.text "country"
  end

  create_table "phones", force: :cascade do |t|
    t.text "name"
    t.text "year"
    t.integer "price"
    t.text "processor"
    t.integer "company_id"
  end

end
