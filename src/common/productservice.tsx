import { imagesData } from "./commonimages";

class ProductService{
    image = "../assets/img/faces/6.jpg";

    static productlist:any=[
        {
            id: "1",
            src: imagesData('product1'),
            num: "(23)",
            name: "women party wear dress",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia saepe esse.",
            disc: "$2,498",
            prices: "$1,967",
            price: 1967,
            Size: "Size",
            XXL: "XXL",
            bg: "Color :",
            colors: "Red color",
            stock: "In stock",
            stockbg: "success",
            qnty: 2,
        },
        {
            id: "2",
            src: imagesData('product2'),
            num: "(64)",
            name: "White Ear buds",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia saepe esse.",
            disc: "$2,999",
            prices: "$1,999",
            price: 1999,
            Size: "Size",
            XXL: "S",
            bg: "Color :",
            colors: "white color",
            stock: "Out of stock",
            stockbg: "danger",
            qnty: 2,
        },
        {
            id: "3",
            src: imagesData('product3'),
            num: "(41)",
            name: "simple white Chair",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia saepe esse.",
            disc: "$1,499",
            prices: "$999",
            price: 999,
            Size: "Size",
            XXL: "M",
            bg: "Color :",
            colors: "simple white color",
            stock: "In stock",
            stockbg: "success",
            qnty: 2,
        },
        {
            id: "4",
            src: imagesData('product4'),
            num: "(232)",
            name: "pink teddy bear",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia saepe esse.",
            disc: "$498",
            prices: "$225",
            price: 225,
            Size: "Size",
            XXL: "L",
            bg: "Color :",
            colors: "Sky blue color",
            stock: "In stock",
            stockbg: "success",
            qnty: 2,
        },
        {
            id: "5",
            src: imagesData('product5'),
            num: "(143)",
            name: "Lence Camara",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia saepe esse.",
            disc: "$298",
            prices: "$198",
            price: 198,
            Size: "Size",
            XXL: "XXL",
            bg: "Color :",
            colors: "black color",
            stock: "In stock",
            stockbg: "success",
            qnty: 2,
        },
        {
            id: "6",
            src: imagesData('product06'),
            num: "(29)",
            name: "Glass with soil gift item",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia saepe esse.",
            disc: "$2,999",
            prices: "$2,499",
            price: 2499,
            Size: "Size",
            XXL: "XL",
            bg: "Color :",
            colors: "Red color",
            stock: "Out of stock",
            stockbg: "danger",
            qnty: 1,
        },
        {
            id: "7",
            src: imagesData('product9'),
            num: "(20)",
            name: "Glass Flower pot",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia saepe esse.",
            disc: "$3,498",
            prices: "$2,999",
            price: 2999,
            Size: "Size",
            XXL: "S",
            bg: "Color :",
            colors: "pink color",
            stock: "In stock",
            stockbg: "success",
            qnty: 3,
        },
        {
            id: "8",
            src: imagesData('product8'),
            num: "(283)",
            name: "Mens party wear t-shirt",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia saepe esse.",
            disc: "$2,498",
            prices: "$1,967",
            price: 1967,
            Size: "Size",
            XXL: "XXL",
            bg: "Color :",
            colors: "gray color",
            stock: "In stock",
            stockbg: "success",
            qnty: 5,
        },
        {
            id: "9",
            src: imagesData('product9'),
            num: "(14)",
            name: "Glass Flower pot",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia saepe esse.",
            disc: "$1,499",
            prices: "$1,299",
            price: 1299,
            Size: "Size",
            XXL: "XXL",
            bg: "Color :",
            colors: "Red color",
            stock: "In stock",
            stockbg: "success",
            qnty: 2,
        },
        {
            id: "10",
            src: imagesData('product1'),
            num: "(23)",
            name: "women party wear dress",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia saepe esse.",
            disc: "$298",
            prices: "$198",
            price: 198,
            Size: "Size",
            XXL: "XXL",
            bg: "Color :",
            colors: "Red color",
            stock: "In stock",
            stockbg: "success",
            qnty: 2,
        },
        {
            id: "11",
            src: imagesData('product3'),
            num: "(29)",
            name: "simple white Chair",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia saepe esse.",
            disc: "$2,999",
            prices: "$2,499",
            price: 2499,
            Size: "Size",
            XXL: "XXL",
            bg: "Color :",
            colors: "Red color",
            stock: "In stock",
            stockbg: "success",
            qnty: 2,
        },
        {
            id: "12",
            src: imagesData('product7'),
            num: "(20)",
            name: "smooth and soft Kids wear",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia saepe esse.",
            disc: "$3,498",
            prices: "$2,999",
            price: 2999,
            Size: "Size",
            XXL: "XXL",
            bg: "Color :",
            colors: "Red color",
            stock: "In stock",
            stockbg: "success",
            qnty: 2,
        },
    ];
    static productlist2:any=[
        {
            id: "13",
            pic1: imagesData('product9'),
            pic2: imagesData('product09'),
            item: "Glass Flower pot",
            name: "Glass Flower pot",
            qnty: 2,
            src:imagesData('product9'),
            price: "55",
            stock: "In stock",
            stockbg: "success",
            prices: "$55",
            disc: "$59",
        },
        {
            id: "14",
            pic1: imagesData('product8'),
            pic2: imagesData('product08'),
            item: "Mens party wear t-shirt",
            name: "Mens party wear t-shirt",
            qnty: 2,
            src: imagesData('product8'),
            price: "40",
            stock: "In stock",
            stockbg: "success",
            prices: "$40",
            disc: "$59",
        },
        {
            id: '15',
            pic1: imagesData('product6'),
            pic2: imagesData('product06'),
            item: "glass with soil gift item",
            name: "glass with soil gift item",
            qnty: 2,
            src: imagesData('product6'),
            price: "95",
            stock: "In stock",
            stockbg: "success",
            prices: "$95",
            disc: "$59",
        },
        {
            id: "16",
            pic1: imagesData('product1'),
            pic2: imagesData('product01'),
            item: "women party wear dress",
            name: "women party wear dress",
            qnty: 2,
            src: imagesData('product1'),
            price: "80",
            stock: "In stock",
            stockbg: "success",
            prices: "$80",
            disc: "$59",
        },
        {
            id: "17",
            pic1: imagesData('product2'),
            pic2: imagesData('product02'),
            item: "White Ear buds",
            name: "White Ear buds",
            qnty: 2,
            src: imagesData('product2'),
            price: "35",
            stock: "In stock",
            stockbg: "success",
            prices: "$35",
            disc: "$59",
        },
        {
            id: "18",
            pic1: imagesData('product3'),
            pic2: imagesData('product03'),
            item: "simple white Chair",
            name: "simple white Chair",
            qnty: 2,
            src: imagesData('product3'),
            price: "50",
            stock: "In stock",
            stockbg: "success",
            prices: "$50",
            disc: "$59",
        },
        {
            id: "19",
            pic1: imagesData('product3'),
            pic2: imagesData('product04'),
            item: "pink teddy bear",
            name: "pink teddy bear",
            qnty: 2,
            src: imagesData('product3'),
            price: "45",
            stock: "In stock",
            stockbg: "success",
            prices: "$45",
            disc: "$59",
        },
        {
            id: "20",
            pic1: imagesData('product5'),
            pic2: imagesData('product05'),
            item: "Lence Camara",
            name: "Lence Camara",
            qnty: 2,
            src: imagesData('product5'),
            price: "55",
            stock: "In stock",
            stockbg: "success",
            prices: "$55",
            disc: "$59",
        },
        {
            id: "21",
            pic1: imagesData('product7'),
            pic2: imagesData('product07'),
            item: "smooth and soft Kids wear",
            name: "smooth and soft Kids wear",
            qnty: 2,
            src: imagesData('product7'),
            price: "70",
            stock: "In stock",
            stockbg: "success",
            prices: "$70",
            disc: "$59",
        },
        {
            id: "22",
            pic1: imagesData('product11'),
            pic2: imagesData('product10'),
            item: "Branded Alaram clock",
            name: "Branded Alaram clock",
            qnty: 2,
            src: imagesData('product11'),
            price: "80",
            stock: "In stock",
            stockbg: "success",
            prices: "$80",
            disc: "$70",
        },
        {
            id: "23",
            pic1: imagesData('product13'),
            pic2: imagesData('product12'),
            item: "Branded black headset",
            name: "Branded black headset",
            qnty: 2,
            src: imagesData('product13'),
            price: "550",
            stock: "In stock",
            stockbg: "success",
            prices: "$550",
            disc: "$239",
        },
        {
            id: "24",
            pic1: imagesData('product14'),
            pic2: imagesData('product15'),
            item: "Colorful coffee cup",
            name: "Colorful coffee cup",
            qnty: 2,
            src: imagesData('product14'),
            price: "60",
            stock: "In stock",
            stockbg: "success",
            prices: "$60",
            disc: "$49",
        },
    ];
    static Datacard:any = [
        {
          PRODUCT: imagesData('product01'),
          Title: "laborum et dolorum fuga",
          PRICE: 1999,
          Size: "Size",
          XXL: "S",
          bg:"",
          colors:"",
          Quantity: 1 ,
        },
        {
          PRODUCT:imagesData('product02'),
          Title: "laborum et dolorum fuga",
          PRICE: 1027,
          Quantity: 3,
        },
        {
          PRODUCT: imagesData('product03'),
          Title: "laborum et dolorum fuga",
          PRICE: "$1,027",
          Quantity: 4,
        },
        {
          PRODUCT: imagesData('product04'),
          Title: "laborum et dolorum fuga",
          PRICE: "$1,027",
          Quantity: 3,
        },
      
      ];
      
    static image: string;

    static getProductList(){
        return ProductService.productlist;
    }
    static getProductList2(){
        return ProductService.productlist2;
    }
    static getDatacard(){
        return ProductService.Datacard;
    }
    static id:any = "";
    static getidfronShop(id: any){
        this.id =  id;
    }

    static returnId(){
        return this.id;
    }

    static handleChange(ele:any){
        const [file] = ele.target.files;
        this.image =  URL.createObjectURL(file);
        this.returnImage();
    }
 
    static returnImage(){
         return this.image;
    }
 
    static handleChangeUrl(link:any){
        this.image =  link;
        this.returnImage();
    }

}
export default ProductService; 

