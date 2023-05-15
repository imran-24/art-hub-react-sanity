export default{
     name: 'deviation',
     title: 'Deviation',
     type: 'document',
     fields:[
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'tag',
            title: 'Tag',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
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