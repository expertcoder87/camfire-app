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

ActiveRecord::Schema.define(version: 20161024122536) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "actions", force: :cascade do |t|
    t.string   "level"
    t.integer  "target_id"
    t.integer  "character_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.string   "target_type"
    t.index ["character_id"], name: "index_actions_on_character_id", using: :btree
  end

  create_table "attributes", force: :cascade do |t|
    t.string   "name",        null: false
    t.string   "description", null: false
    t.integer  "game_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["game_id"], name: "index_attributes_on_game_id", using: :btree
  end

  create_table "characters", force: :cascade do |t|
    t.string   "name"
    t.string   "description"
    t.string   "type"
    t.string   "gifts"
    t.string   "faults"
    t.string   "currency"
    t.float    "available_currency_ammount"
    t.integer  "armour_cap_value"
    t.integer  "armour_current_value"
    t.integer  "hp_cap_value"
    t.integer  "hp_current_value"
    t.integer  "xp"
    t.integer  "fp"
    t.integer  "game_id"
    t.integer  "user_id"
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.string   "character_type"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.index ["game_id"], name: "index_characters_on_game_id", using: :btree
    t.index ["user_id"], name: "index_characters_on_user_id", using: :btree
  end

  create_table "contexts", force: :cascade do |t|
    t.string   "name",       null: false
    t.integer  "game_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["game_id"], name: "index_contexts_on_game_id", using: :btree
  end

  create_table "games", force: :cascade do |t|
    t.string   "world_name",                       null: false
    t.string   "description",                      null: false
    t.integer  "starting_xp"
    t.boolean  "use_fudge_points"
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
    t.boolean  "shared_to_market", default: false
    t.integer  "gm_id"
    t.integer  "created_by_id"
    t.integer  "parent_id"
  end

  create_table "inventories", force: :cascade do |t|
    t.string   "name"
    t.integer  "character_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.integer  "capacity"
    t.index ["character_id"], name: "index_inventories_on_character_id", using: :btree
  end

  create_table "inventory_items", force: :cascade do |t|
    t.integer  "thing_id"
    t.integer  "inventory_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.integer  "quantity"
    t.index ["inventory_id"], name: "index_inventory_items_on_inventory_id", using: :btree
    t.index ["thing_id"], name: "index_inventory_items_on_thing_id", using: :btree
  end

  create_table "invitations", force: :cascade do |t|
    t.string   "email"
    t.string   "status"
    t.integer  "game_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["game_id"], name: "index_invitations_on_game_id", using: :btree
  end

  create_table "quest_items", force: :cascade do |t|
    t.string   "description"
    t.integer  "quest_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.boolean  "is_complete"
    t.index ["quest_id"], name: "index_quest_items_on_quest_id", using: :btree
  end

  create_table "quests", force: :cascade do |t|
    t.string   "name"
    t.integer  "character_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["character_id"], name: "index_quests_on_character_id", using: :btree
  end

  create_table "scenes", force: :cascade do |t|
    t.string   "name"
    t.string   "secret_story_details"
    t.boolean  "share_image"
    t.integer  "story_id"
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.datetime "shared_at"
    t.index ["story_id"], name: "index_scenes_on_story_id", using: :btree
  end

  create_table "skills", force: :cascade do |t|
    t.string   "name",        null: false
    t.string   "description", null: false
    t.integer  "game_id"
    t.integer  "context_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["context_id"], name: "index_skills_on_context_id", using: :btree
    t.index ["game_id"], name: "index_skills_on_game_id", using: :btree
  end

  create_table "stories", force: :cascade do |t|
    t.string   "title"
    t.string   "public_description"
    t.string   "secret_gm_overview"
    t.boolean  "share_to_players"
    t.integer  "game_id"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.index ["game_id"], name: "index_stories_on_game_id", using: :btree
  end

  create_table "things", force: :cascade do |t|
    t.string   "name",                 null: false
    t.string   "description",          null: false
    t.integer  "armour_current_value"
    t.integer  "armour_cap_value"
    t.float    "offensive_factor"
    t.float    "encumbrance"
    t.integer  "game_id"
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.index ["game_id"], name: "index_things_on_game_id", using: :btree
  end

  create_table "user_auths", force: :cascade do |t|
    t.string   "provider"
    t.string   "uid"
    t.integer  "user_id"
    t.string   "token"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: :cascade do |t|
    t.string   "firstname"
    t.string   "lastname"
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

end
