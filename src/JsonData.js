import dishUrl from './assets/bruchetta.svg'
export const cardData=[
{
    id:1,
    imgUrl:require('./assets/greek salad.jpg'),
    title:'Greek salad',
    price:'$12.99',
    description:'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. '
},{
    id:2,
    imgUrl:dishUrl,
    title:'Bruchetta',
    price:'$12.99',
    description:'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. '
},
{
    id:3,
    imgUrl:require('./assets/lemon dessert.jpg'),
    title:'Lemon Dessert',
    price:'$12.99',
    description:'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. '
}

]
export const linkArray=[
    {
    name:'Home',
    id:11,
    path:'/'
    },
    {
    name:'About',
    id:12,
    path:'/about'
    },
    {
    name:'Menu',
    id:13
    },
    {
        name:'Reservations',
        id:14,
        path:'/booking-form'
    },
    {
        name:'Order Online',
        id:15,
        path:'/order-online'
    },
    {
        name:'Login',
        id:16
    }
]