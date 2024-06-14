import './common.css'
function Nav(props){
   return <nav>
        <ul >
            <li key={props.items.id} className="list-type"><a href={props.items.path}>{props.items.name}</a></li>
        </ul>
    </nav>
}
export default Nav;