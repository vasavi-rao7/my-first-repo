function Nav({items}){
   return <nav>
        <ul >
            <li key={items.id}><a href="">{items.name}</a></li>
        </ul>
    </nav>
}
export default Nav;