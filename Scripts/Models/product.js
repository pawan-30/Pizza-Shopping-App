class Product {
    constructor(id, Name, Desc, Price, url) {
        this.id = id;
        this.Name = Name;
        this.Desc = Desc;
        this.Price = Price;
        this.url = url;
        this.isAddedInCart = false;
    }
}
export default Product;