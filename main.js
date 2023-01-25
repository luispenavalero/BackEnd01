// Contruimos el producto como objeto
class Item {

    static id = 0

    constructor(title, description, price, thumbnail, code, stock) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
        this.id = ++Item.id
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
        if (this.product.some(prod => prod.code === code)) {
            console.log("Ya este producto existe")          
        } else {
            let newItem = new Item (title, description, price, thumbnail, code, stock);
            this.product.push(newItem)
            console.log("Item agregado")
        }
    }

    getElementById = (id) => {
        console.log(id)
    }

}


// Probamos de introducir data en el Array
let test =  new ProductManager()
test.addProdutc("jabón", "Utencilio de limpieza", 50, "img.jpg", 2355, 22);
test.addProdutc("Vino", "Bebida alcohólica", 200, "img2.jpg", 853, 11);
test.addProdutc("Jamón", "Charcutería", 50, "img3.jpg", 2655, 12);
test.addProdutc("Aceite", "Adereso", 85 , "img4.jpg", 3255, 16);
test.addProdutc("Aceitunas", "Charcutería", 60, "img5.jpg", 2655, 23);









