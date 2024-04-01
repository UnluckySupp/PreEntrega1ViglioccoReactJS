import { Item } from "./Item"; 

export const ItemList = ({products}) => {
    return (
        <div className="d-flex flex-wrap gap-4">
        {products.map((product) => (
        <Item key={product.id} product={product}/>
        ))}
        </div>
    );
}