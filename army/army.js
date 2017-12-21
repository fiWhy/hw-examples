function Resource(type, damage, health, distance) {
    this.damage = damage;
    this.type = type;
    this.maxHealth = this.health = health;
    this.maxDistance = this.distance = distance;
}

Resource.prototype.isReadyToMove = function (distance) {
    return distance ? (this.distance - distance) >= 0 : this.distance;
}

Resource.prototype.isReadyToFight = function (damage) {
    return damage ? (this.health - damage) > 0 : this.health;
}

Resource.prototype.restore = function() {
    this.health = this.maxHealth;
    this.distance = this.maxDistance;
}

Resource.prototype.clone = function() {
    return new Resource(this.type, this.maxHealth, this.maxDistance);
}

Resource.prototype.attackedBy = function(target) {
    this.health -= target.damage;
}