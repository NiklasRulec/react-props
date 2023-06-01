const ShopItem = (props) => {
    console.log(props);
    return ( 
        <article className="shop-item">
            <img src={props.artikel.img} alt="Bild" />
            <p>{props.artikel.name}</p>
            <p>{props.artikel.price + "$"}</p>
            <button> Buy now</button>
        </article>
     );
}
 
export default ShopItem;