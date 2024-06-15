function CustomButton(props){
    return <button style={{
        backgroundColor:props.backgroundColor||'#F4CE14',
    color:props.color ||'#000000',
    padding:props.padding || '18px',
    width:props.width||'200px'
}}
onClick={props.onClick}>{props.title}</button>
}
export default CustomButton;