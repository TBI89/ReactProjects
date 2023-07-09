import "./Products.css";
import nikeImg from "../../assets/images/nike-jordan.jpg";
import adidasImg from "../../assets/images/adidas.avif";
import newBalanceImg from "../../assets/images/new-balance.webp";
import reebokImg from "../../assets/images/reebok.webp";
import pumaImg from "../../assets/images/puma.webp";
import asicsImg from "../../assets/images/asics.jpg";

function Products(): JSX.Element {
    return (
        <div className="Products">
			<img src={nikeImg}/>
            <img src={adidasImg}/>
            <img src={newBalanceImg}/> <br/>
            <img src={reebokImg}/>
            <img src={pumaImg}/>
            <img src={asicsImg}/>
        </div>
    );
}

export default Products;
