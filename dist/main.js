"use strict";
// let size: number = 100; // 타입을 정의 하는 것은 타입스크립트에서만
// size = 150;
// const product = {
//   id: "c001",
//   name: "오빠차",
//   price: 1200,
// };
// product.price = 310; // 밖에서 안으로 오류를 읽어보면 됨
// // npm run build 시 콘솔에서 오류 보여줌
// let item: string = "문자열 형태";
// let itemPrice: number = 1234;
// let menbersOnly: boolean = true;
// let owner: undefined = undefined;
// let seller: null = null;
// // 숫자형 Number.is 메소드 활용해야함
// let num = 2 / 0; // infinity
// let num2 = 0 / 0; // NaN
// const cart: string[] = [];
// cart.push("haha");
// cart.push("merong");
// cart.push(100); // 타입 오류 반환
// const carts: string[][] = [["a", "b"], ["c"]]; // 배열
// let mySize: number[] = [168, 55];
// mySize = [179, 60];
// mySize = [];
// // 배열이지만 개수를 명확하게 하고 싶을때 튜플 타입 사용
// let myInfo: [number, number] = [168, 55]; // 요소 자리에 타입이 들어감
// // 객체
// let products: {
//   id: string; // 객체 타입은 세미콜론 사용
//   name: string;
//   price: number;
//   membersOnly?: boolean; //optional property
//   sizes: string[];
// } = {
//   id: "bitna",
//   name: "bitnari",
//   price: 2000,
//   membersOnly: true,
//   sizes: ["S", "M"],
// }; // cmd + i 를 누르면 porperties를 추천해줌
// if (products.membersOnly) {
//   console.log("회원전용상품");
// } else {
//   console.log("일반 상품");
// }
// let field = "field name";
// let obj = {
//   [field]: "field value",
// };
// let stock: {
//   [productId: string]: number; // property의 값이 숫자형
// } = {
//   c001: 3,
//   c002: 1,
// };
// // const items: any 하면 javascript 랑 똑같아짐
// const parsedProduct: {
//   // 1. 콜론으로 타입 정의
//   name: string;
//   price: number;
// } = JSON.parse('{"name": "코드잇 토트백", "price":12000}'); // 혹은 2. as를 붙여서 사용
// 함수에서 타입을 정의하는 방법
const stock = { c001: 3, c002: 1 };
const cart = [];
const codeitmall = {
    stock: {
        c001: 3,
        c002: 1,
    },
    cart: [],
    addToCarts,
    addManyToCart,
};
function addToCarts(id, quantity) {
    if (!quantity) {
        quantity = 1;
    }
    if (codeitmall.stock[id] < quantity) {
        return false;
    }
    codeitmall.stock[id] -= quantity;
    for (let i = 0; i < quantity; i++) {
        cart.push(id);
    }
    return true;
}
function addManyToCart(...ids) {
    for (const id of ids) {
        addToCart(id);
    }
}
function addToCart(id, quantity = 1) {
    //   if (typeof quantity === "undefined") {
    //     quantity = 1;
    //   } // 이렇게 하기 보다 quantity: number = 1파라미터에 바로 기본값을 작성한다.
    // 암묵적으로 any가 되었기 때문에 오류를 반환한다.
    if (stock[id] < quantity) {
        return false;
    }
    stock[id] -= quantity;
    for (let i = 0; i < quantity; i++) {
        cart.push(id);
    }
    return true;
}
console.log(stock, cart);
const result1 = addToCart("c001", 1);
console.log(`결과1: ${result1}`);
console.log(stock, cart);
const result2 = addToCart("c002", 2);
// enum 열거형
var Size;
(function (Size) {
    Size["S"] = "S";
    Size["M"] = "M";
    Size["L"] = "L";
    Size["XL"] = "XL";
})(Size || (Size = {}));
const printProduct = (product) => {
    console.log(`${product.name}의 가격은 ${product.price}원 입니다.`);
};
printProduct;
// literal type
let productName1 = "제품1"; // let : string type
const productName2 = "제품2"; // const : 문자열이 type <== literal type : 변수값이 타입
let small = 95; // 숫자형은 literal type에 포함되지 않음
const large = 100; // 100인 값을 타입으로 함
function printSize(size) {
    // size : 1인 literal로 하면 받을 수 없음
    console.log(`${size} 사이즈 입니다.`);
}
printSize(small);
printSize(large);
const carts = ["c001", "c002", "c003"];
var ClothingSize;
(function (ClothingSize) {
    ClothingSize["S"] = "S";
    ClothingSize["M"] = "M";
    ClothingSize["L"] = "L";
})(ClothingSize || (ClothingSize = {}));
// Union type | 이런 것 : a or b인 경우에 사용 <== 논리연산자와 비슷함
// sizes의 타입이 다름
function printSizes(product) {
    // union
    const availableSizes = product.sizes.join(", ");
    console.log(`구매 가능한 사이즈는 다음과 같습니다 ${availableSizes}`);
    // 아래와 같이 다르게 처리 가능
    if ("color" in product) {
        console.log(product.color);
    }
    if ("handmade" in product) {
        console.log(product.handmade ? "장인 제품" : "공장 제품");
    }
}
const productTableKeys = [
    // (keyof Product)[] 이렇게 바로 사용하기 가능함
    "name",
    "price",
    "membersOnly",
    "salePrice", //자동 완성 됨
];
const example = {
    id: "a",
    name: "Bitna",
    price: 2000,
    salePrice: 1500,
};
console.log(typeof example); // 자바스크립트니까 타입이 string으로 나오고
// typeof : 이미 존재하는 타입을 가지고 와서 타입을 정의할때 사용
let exmaple2; // 타입스크립트니까 타입이 example로 나옴
// generic type
const shoesSizes = [230, 235, 240];
shoesSizes.map((num) => { });
const clothingSizes = ["M", "L", "XL"];
clothingSizes.map((names) => { });
function printArray(items) {
    // type parameter T U V로 임의의 타입을 표현함
    for (const item of items) {
        console.log(item);
    }
}
printArray(shoesSizes); // 마우스 대면 각각 타입이 추론됨
printArray(clothingSizes);
const map = new Map();
// generic type은 보통 T, V, U 안에서 사용함
