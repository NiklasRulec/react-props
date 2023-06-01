import ShopItem from "./ShopItem";
import cocooil from "../../assets/cocooil.jpeg"
import camera from "../../assets/camera.avif"
import shampoo from "../../assets/shampoo.webp"

const ShopList = () => {

    const itemsArray =[
        {
            img : cocooil,
            name : "Coco-Oil",
            price : 30
        },
        {
            img : camera,
            name : "Polaroid",
            price : 60
        },
        {
            img : shampoo,
            name : "Maui Moisture",
            price : 20
        }
    ]
    return ( 
        <section className="shop-list">
            {itemsArray.map((item,index) => <ShopItem artikel={item} key={index}/> )}
        </section>
     );
}
 
export default ShopList;