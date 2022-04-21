const Campsite = require('./Campsite');
const Comment = require('./Comment');
const Like = require('./Like');
const SiteFee = require('./SiteFee');
const SiteType = require('./SiteType');
const User = require('./User');

// 1-to-1: User and Campsite
User.hasMany(Campsite);

Campsite.belongsTo(User);

// many-to-mnay: User and Campsite
Campsite.belongsToMany(User, {
  through: Like,
  as: 'liked_sites',
});

User.belongsToMany(Campsite, {
  through: Like,
  as: 'liked_sites',
});

//1-to-many: User and Like
User.hasMany(Like);
Like.belongsTo(User);

//1-to-many: Campsite and Like
Campsite.hasMany(Like);
Like.belongsTo(Campsite);

//1-to-many: Comment and User
User.hasMany(Comment);
Comment.belongsTo(User);

//1-to-many: Campsite and Comment
Campsite.hasMany(Comment);
Comment.belongsTo(Campsite);

//1-to-many: SiteFee and Campsite
SiteFee.hasMany(Campsite);
Campsite.belongsTo(SiteFee);

//1-to-many: SiteType and Campsite
SiteType.hasMany(Campsite);
Campsite.belongsTo(SiteType);
