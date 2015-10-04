var sol1 = {
name: "Solid Snake",
class: "Infiltrator",
weapon: "Assault Rifle",
hp: 25,
str: 10,
active: true,
loot: [""],
};

var sol2 = {
name: "Luger Wolf",
class: "Marksman",
weapon: "Sniper Rifle",  
hp: 15,
str: 20,
active: true,
loot: [""],
};

var sol3 = {
name: "Topaz Moon",
class: "Grenadier",
weapon: "Grenades",
hp: 20,
str: 15,
active: true,
loot: [""],
};

var boss = {
  name: "Metal Gear Tex(t)",
  class: "War Machine",
  hp: 25,
  str: 10,
  active: true,
}

var loot = ["a magnum!", "some hand grenades!", "the night vision goggles!", "some tasty rations!", "$5000 USD in local currency!"];

function command() {
  console.log("Please select one of the men under your command:");
  console.log(sol1.name + " the " + sol1.class + ".\n" + 
              sol2.name + " the " + sol2.class + ".\n" +
              sol3.name + " the " + sol3.class + ".\n");

  var choice = prompt();
  if (choice == sol1.name) {
    console.log("You've selected " + choice);
    battle(sol1, boss);
  } else if (choice == sol2.name) {
    console.log("You've selected " + choice);
    battle(sol2, boss);
  } else if (choice == sol3.name) {
    console.log("You've selected " + choice);
    battle(sol3, boss);
  } else {
    command();
  }
}

function battle(avatar, boss) {
  if (avatar.active == false) {
    console.log("You have been defeated! Game Over.");
    return;
  }
  var damage = Math.floor(Math.random() * (avatar.str - 1 + 1)) + 1;
  console.log(avatar.name + " aims his " + avatar.weapon + " and deals " + damage + " damage!");             
  //console.log(boss.name + " HP: " + boss.hp);
  boss.hp -= damage;
  console.log(boss.name + " HP: " + boss.hp + "\n");
  if (boss.hp <= 0) {
    console.log("You have won!");
    console.log("You've been awarded " + loot[Math.floor(Math.random() * (3 - 0 + 1)) + 0]);
    return;
  }
  
  var bdamage = Math.floor(Math.random() * (boss.str - 1 + 1)) + 1;
  console.log(boss.name + " returns fire and deals " + bdamage + " damage to " +               avatar.name + "!");
  //console.log(avatar.name + " HP: " + avatar.hp);
  avatar.hp -= bdamage;
  console.log(avatar.name + " HP: " + avatar.hp + "\n");
  if (avatar.hp <= 0) {
    avatar.active = false;
    battle(avatar, boss);
  }
  else {
    battle(avatar, boss);
  }
  
}

function scenario_one() {
  console.log("After an intense battle, " + boss.name + " is almost defeated.\nSend in a solider to finish him off!\n");
  var avatar = command();
}

scenario_one();