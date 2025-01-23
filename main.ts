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
const stock: { [id: string]: number } = { c001: 3, c002: 1 };
const cart: string[] = [];

const codeitmall: {
  stock: { [id: string]: number };
  cart: string[];
  addToCarts: (id: string, quantity?: number) => boolean; // 화살표 문법 사용
  addManyToCart: (...ids: string[]) => void; // 아무값도 리턴하지 않을때는 void 함수라고 함
} = {
  stock: {
    c001: 3,
    c002: 1,
  },
  cart: [],
  addToCarts,
  addManyToCart,
};

function addToCarts(id: string, quantity?: number) {
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

function addManyToCart(...ids: string[]) {
  for (const id of ids) {
    addToCart(id);
  }
}

function addToCart(id: string, quantity: number = 1) {
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

enum Size {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL", // enum은 되도록 값을 정하고 사용할 것
}

interface Clothe {
  // 타입을 interface로 지정
  id: string;
  name: string;
  price: number;
  memberdOnly?: boolean;
}

interface ClothingProduct extends Clothe {
  // 상속이 가능하다
  sizes: Size[];
}

let clothe1: ClothingProduct = {
  // interface를 적고 나머지 적으면 됨
  id: "c001",
  name: "코드잇 블랙 후디",
  price: 1000,
  sizes: [Size.M, Size.L],
};

// console.log(Size.M);

interface PrintProductFunction {
  (product: Clothe): void;
}

const printProduct: PrintProductFunction = (product) => {
  console.log(`${product.name}의 가격은 ${product.price}원 입니다.`);
};

printProduct;
