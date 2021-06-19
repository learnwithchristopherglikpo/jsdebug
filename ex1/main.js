const users=[
    {
        name:"Christopher",class:1
    },
    {
        name:"John",class:2
    },
    {
        name:"Mark" class:3
    }
    {
        name:"Brown",class:4
    }
]

users.forEach(user=>{
    displayUser(user)
})

function displayUser(user)
    console.log(`${user.name} is in class ${user.class}`);
}