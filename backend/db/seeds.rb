# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
game1 = Game.create({world_name: 'Star Trek', description: 'Stardate 44360.2: The Dominion War is behind us but DS9 is still the wild west of the Alpha quadrant.
' })


thing1 = Thing.create(name: 'Red Starfleet Uniform', description: 'Standard issue mustard. Rank indicated by pips on the neck.',
               encumbrance: 1.0, armour_cap_value: 1, armour_current_value: 0, offensive_factor: 0, game_id: game1.id,
               avatar: File.open("#{Rails.root}/features/support/red_uniform.jpg"))
thing2 = Thing.create(name: 'Yellow Starfleet Uniform', description: 'Standard issue mustard. Rank indicated by pips on the neck.',
               encumbrance: 1.0, armour_cap_value: 1, armour_current_value: 0, offensive_factor: 0, game_id: game1.id,
               avatar: File.open("#{Rails.root}/features/support/yellow_uniform.jpg"))
thing3 = Thing.create(name: 'Blue Starfleet Uniform', description: 'Standard issue mustard. Rank indicated by pips on the neck.',
               encumbrance: 1.0, armour_cap_value: 1, armour_current_value: 0, offensive_factor: 0, game_id: game1.id)
thing4 = Thing.create(name: 'Klingon Armour', description: 'Standard issue starfleet safety armour.',
               encumbrance: 1.0, armour_cap_value: 10, armour_current_value: 8, offensive_factor: 2, game_id: game1.id)
thing5 = Thing.create(name: 'Phaser', description: 'Standard issue Starfleet security phaser, with variable power settings. When fired at level 1 or 2 the weapon stuns. At levels 3 and 4 it will kill.',
               encumbrance: 1.0, armour_cap_value: 1, armour_current_value: 0, offensive_factor: 10, game_id: game1.id,
               avatar: File.open("#{Rails.root}/features/support/star_trek_phaser.jpg"))
thing6 = Thing.create(name: 'Medkit', description: 'Standard issue medical kit.',
               encumbrance: 1.0, armour_cap_value: 1, armour_current_value: 0, offensive_factor: 0, game_id: game1.id)


attr1 = Attribute.create(name: 'Mind', description: 'All characters have a mind. Some are weak and some are strong. The mind attribute governs all manner of thinking, wisdom, conversation, and even telepathic powers.
', game_id: game1.id)
attr2 = Attribute.create(name: 'Body', description: 'All characters have a body. Some are weak and some are strong. The body attribute governs all manner of strength, wisdom, conversation, and even telepathic powers.
', game_id: game1.id)

contexts = Context.create([{name: 'computer terminal', game_id: game1.id}, {name: 'navigation console', game_id: game1.id},
                          {name: 'tactical console', game_id: game1.id}])

skill1  = Skill.create(name: 'Athletics', description: 'Athletics help in running, stamina etc', game_id: game1.id)
skill2 = Skill.create(name: 'Computer Hacking', description: 'Computer hacking allows the character to break into computer systems where they are not authorized, or to force a computer to do something it does not normally do. It does not help the user break codes, which is a decryption skill.
', game_id: game1.id, context_id: Context.first.id)


story1 = Story.create({title: 'Mission to Olmerak',
                      public_description: 'The Enterprise has been sent to open negotiations with the Olmeraki, a pre-warp civilization that was recently occupied by the Cardassians. But all is not as it seems, and as negotiations begin to falter a deeper mystery unfolds.',
                      secret_gm_overview: 'The Federation wants to open relations with the Olmeraki whose Cardassian conquerors have recently retreated after the conclusion of the Dominion War.

However, when the players arrive there are several indications that all is not as it appears. In fact, the rebel Jem Hadar have already been to the planet and negotiated a secret alliance, complete with exchange of hostages. The clues to this deal are waiting to be discovered.

Not all the Olmeraki are happy about the Jem Hadar alliance and some will seek the player’s help in freeing their hostages and joining an alliance with the Federation instead.
',
                      share_to_players: true,
                      game_id: game1.id})


scene1 = Scene.create({name: 'Quarks DS9',
                     story_id: story1.id,
                     avatar: File.open("#{Rails.root}/features/support/img1.jpg"),
                     secret_story_details: 'Quarks is one of the main social hub of DS9. Everyone knows this is the
                     best place to grab an alcoholic beverage.'})


character1 = Character.create({
        name: 'Bozon',
        character_type: 'PC',
        description: 'He is skilled in combat but short on charm and intelligence.',
        gifts: 'Quick witted',
        faults: "Picks fights he can't win",
        available_currency_ammount: 200,
        armour_cap_value: 10,
        armour_current_value: 7,
        hp_cap_value: 14,
        hp_current_value: 9,
        xp: 5,
        fp: 2,
        game_id: game1.id,
        avatar: File.open("#{Rails.root}/features/support/red_uniform.jpg")
   })

quest1 = Quest.create(name: 'Default Quest', character_id: character1.id)
quest_items = QuestItem.create([{description: 'Meet with captain price', quest_id: quest1.id},
     {description: 'Meet yuri', quest_id: quest1.id},
     {description: 'Conduct scans', quest_id: quest1.id},
     {description: 'Map Nabula', quest_id: quest1.id},
     {description: 'Collect Samples', quest_id: quest1.id}])
actions = Action.create([{level: 'Good', character_id: character1.id, target_type: 'Attribute', target_id: Attribute.first.id},
  {level: 'Great', character_id: character1.id, target_type: 'Skill', target_id: Skill.first.id}])

inventory1 = Inventory.create(name: 'Equipped', character_id: character1.id)
inventory1_item1 = InventoryItem.create(inventory_id: inventory1.id, thing_id: Thing.first.id)
inventory1_item2 = InventoryItem.create(inventory_id: inventory1.id, thing_id: Thing.last.id)
##############################################################################################################################

game2 = Game.create({world_name: 'Pirates', description: 'A pirate’s life is hard and short, but nothing beats the open sea, the wind in your sails, and a fat prize on the horizon. Take whatever you can and avoid the noose.'})

thing1 = Thing.create(name: 'Uniform', description: 'Standard issue mustard. Rank indicated by pips on the neck.',
               encumbrance: 1.0, armour_cap_value: 1, armour_current_value: 0, offensive_factor: 0, game_id: game2.id)
thing2 = Thing.create(name: 'Sword', description: 'Sword is a weapon mostly used by a pirate.',
               encumbrance: 1.0, armour_cap_value: 1, armour_current_value: 0, offensive_factor: 10, game_id: game2.id)
thing3 = Thing.create(name: 'ship', description: 'Standard ship for sailing in sea.',
               encumbrance: 1.0, armour_cap_value: 1, armour_current_value: 0, offensive_factor: 0, game_id: game2.id)
thing4 = Thing.create(name: 'Armour', description: 'Standard issue safety armour.',
               encumbrance: 1.0, armour_cap_value: 10, armour_current_value: 8, offensive_factor: 2, game_id: game2.id)
thing5 = Thing.create(name: 'Pistol', description: 'Standard weapon to be used in fight.',
               encumbrance: 1.0, armour_cap_value: 1, armour_current_value: 0, offensive_factor: 10, game_id: game2.id)
thing6 = Thing.create(name: 'Medkit', description: 'Standard issue medical kit.',
               encumbrance: 1.0, armour_cap_value: 1, armour_current_value: 0, offensive_factor: 0, game_id: game2.id)
thing6 = Thing.create(name: 'Compass', description: 'Standard compass used to find the direction.',
               encumbrance: 1.0, armour_cap_value: 1, armour_current_value: 0, offensive_factor: 0, game_id: game2.id)


attr1 = Attribute.create(name: 'Mind', description: 'All characters have a mind. Some are weak and some are strong. The mind attribute governs all manner of thinking, wisdom, conversation, and even telepathic powers.
', game_id: game2.id)
attr2 = Attribute.create(name: 'Body', description: 'All characters have a body. Some are weak and some are strong. The body attribute governs all manner of strength, wisdom, conversation, and even telepathic powers.
', game_id: game2.id)

contexts = Context.create([{name: 'wheel', game_id: game2.id}, {name: 'navigation console', game_id: game2.id},
                          {name: 'tactical console', game_id: game2.id}])

skill1  = Skill.create(name: 'Athletics', description: 'Athletics help in running, stamina etc', game_id: game2.id)
skill2 = Skill.create(name: 'Combat', description: 'Combat allows the character to fight a lone on many enemies', game_id: game2.id, context_id: Context.where(game_id: game2.id)[0].id)


story1 = Story.create({title: 'Mission to Olmerak',
                      public_description: 'The Enterprise has been sent to open negotiations with the Olmeraki, a pre-warp civilization that was recently occupied by the Cardassians. But all is not as it seems, and as negotiations begin to falter a deeper mystery unfolds.',
                      secret_gm_overview: 'The Federation wants to open relations with the Olmeraki whose Cardassian conquerors have recently retreated after the conclusion of the Dominion War.

However, when the players arrive there are several indications that all is not as it appears. In fact, the rebel Jem Hadar have already been to the planet and negotiated a secret alliance, complete with exchange of hostages. The clues to this deal are waiting to be discovered.

Not all the Olmeraki are happy about the Jem Hadar alliance and some will seek the player’s help in freeing their hostages and joining an alliance with the Federation instead.
',
                      share_to_players: true,
                      game_id: game2.id})


scene1 = Scene.create({name: 'Quarks DS9',
                      story_id: story1.id,
                      avatar: File.open("#{Rails.root}/features/support/img1.jpg"),
                     secret_story_details: 'Quarks is one of the main social hub of DS9. Everyone knows this is the
                     best place to grab an alcoholic beverage.'})


character1 = Character.create({
        name: 'Bozon',
        character_type: 'PC',
        description: 'He is skilled in combat but short on charm and intelligence.',
        gifts: 'Quick witted',
        faults: "Picks fights he can't win",
        available_currency_ammount: 200,
        armour_cap_value: 10,
        armour_current_value: 7,
        hp_cap_value: 14,
        hp_current_value: 9,
        xp: 5,
        fp: 2,
        game_id: game2.id,
        avatar: File.open("#{Rails.root}/features/support/red_uniform.jpg")
   })

quest1 = Quest.create(name: 'Default Quest', character_id: character1.id)
quest_items = QuestItem.create([{description: 'Meet with captain price', quest_id: quest1.id},
     {description: 'Meet yuri', quest_id: quest1.id},
     {description: 'Conduct scans', quest_id: quest1.id},
     {description: 'Map Nabula', quest_id: quest1.id},
     {description: 'Collect Samples', quest_id: quest1.id}])

actions = Action.create([{level: 'Good', character_id: character1.id, target_type: 'Attribute', target_id: Attribute.first.id},
  {level: 'Great', character_id: character1.id, target_type: 'Skill', target_id: Skill.first.id}])

inventory1 = Inventory.create(name: 'Equipped', character_id: character1.id)
inventory1_item1 = InventoryItem.create(inventory_id: inventory1.id, thing_id: Thing.first.id)
inventory1_item2 = InventoryItem.create(inventory_id: inventory1.id, thing_id: Thing.last.id)

Rake::Task['add_role:admin'].invoke
