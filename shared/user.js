User = new Meteor.Collection2('user', { 'schema' : {} });

// Collection2 already does schema checking
// Add custom permission rules if needed
User.allow({
    insert : function () {
        return true;
    },
    update : function () {
        return true;
    },
    remove : function () {
        return true;
    }
});

