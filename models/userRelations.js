import mongoose from 'mongoose';
/*
The type field in this schema should equal one of the following options:
    - "pending_first_second" : This should be set if the first userID is requesting to be friends with the second.
    - "pending_second_first" : This should be set if the second userID is requesting to be friends with the first.
    - "friends" : This should be set if the two users are friends.
    - "block_first_second" : This should be set if the first user blocked the second.
    - "block_second_first" : This should be set if the second user blocked the first.
    - "block_both" : This should be set if both of the users blocked each other.

When setting the user IDs, the IDs should be compared lexicographically (firstUserID < secondUserID).
This ensures only one record of the relationship exist.
*/

const schemaOptions = {
    timestamps : {createdAt: 'relationship_requested_at', updatedAt: 'last_updated_at'}
}

const postSchema = mongoose.Schema({
    firstUserID: {type: mongoose.Schema.Types.ObjectId, required: true},
    secondUserID: {type: mongoose.Schema.Types.ObjectId, required: true},
    type: String,
    creator: {type: mongoose.Schema.Types.ObjectId},
}, schemaOptions)

var AddFriend = mongoose.model('AddFriend', postSchema);

export default AddFriend;