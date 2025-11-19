const Saludar = (props) => {
    return(
        <>
            <h2>Hola, {props.userinfo.nombre} tiene {" "}
                {props.userinfo.edad} años y tu color favorito es 
                {" "} {props.userinfo.color}
            </h2>
        </>
    )
}
export default Saludar