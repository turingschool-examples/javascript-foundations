function Werewolf(name, location) {
  this.name = name;
  this.location = location;
}

function Victim() {

}

module.exports = { Werewolf: Werewolf,
                   Victim: Victim }
