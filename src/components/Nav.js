function Nav({items}){
   return <nav>
        <ul key={items.id}>
            <li>{items.name}</li>
        </ul>
    </nav>
}
export default Nav;