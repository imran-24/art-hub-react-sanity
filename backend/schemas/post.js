export default{
    name: 'post',
    title: 'Post',
    type: 'document',
    fields:[
       
       {
           name: 'message',
           title: 'Message',
           type: 'string'
       },
       
       {
           name: 'comment',
           title: 'Comment',
           type: 'array',
           of: [{type: 'comment'}]
       },
       {
           name: 'save',
           title: 'Save',
           type: 'array',
           of: [{type: 'save'}]
       },
       {
           name: 'like',
           title: 'Like',
           type: 'array',
           of: [{type: 'like'}]
       },
       {
           name: 'userId',
           title: 'UserId',
           type: 'string'
       },
       {
           name: 'postedBy',
           title: 'PostedBy',
           type: 'postedBy'
       }
       
    ]
}