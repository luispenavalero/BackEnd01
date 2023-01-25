let catalogo = [ ]

// Contruimos el producto como objeto
class Item {
    constructor(title, description, price, thumbnail, code, stock) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}

// Se crea el array vacío y el addProduct que pushea la información en el Array
class ProductManager {
    constructor () {
        this.product = new Array();
    }

    getProduct = () => {
        return this.product
    }

    addProdutc = (title, description, price, thumbnail, code, stock) => {
        let newItem = new Item(title, description, price, thumbnail, code, stock);

        this.product.push(newItem);
    }
}

// Probamos de introducir data en el Array
let test =  new ProductManager()
test.addProdutc("jabón", "Utencilio de limpieza", 50, "img.jpg", 2355, 22);
test.addProdutc("Vino", "Bebida alcohólica", 200, "img2.jpg", 853, 11);
test.addProdutc("Vino", "Bebida alcohólica", 200, "img2.jpg", 853, 11);
test.addProdutc("jabón", "Utencilio de limpieza", 50, "img.jpg", 2355, 22);






