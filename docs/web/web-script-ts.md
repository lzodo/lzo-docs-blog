---
  title: TypeScript 基础
---
**JavaScript 的超级，在js es6 es6以上的js语法这个添加了 接口(interfaces)、强类型(Strongly Typed)、泛型(Generics)...** 

## 安装

```shell
npm install -g typescript
# 查看版本
tsc -v
tsc script.ts # 编译生成js文件
tsc --init # 生成ts配置文件

# vscode直接右键运行ts文件
npm install -g ts-node
# ts-node 需要依赖  tslib @types/node 两个包
npm install tslib @types/node -g
ts-node script.ts # 直接运行 script.ts
```
>   解决了JavaScript类型缺失问题，错误发现的越早越好，开发阶段对类型进行校验

## 编译

### 手动直接编译
```shell
tsc file.ts
```

### vscode自动编译
```shell
# 1. 项目目录生成配置文件 
tsc --init

# 2. 修改配置文件参数 如:
"strict": false 
"outDir": "./js"

# 3.启动监视任务
终端 -> 运行任务 -> 监视xx项目 tsconfig.json

或 

# tsc -p d:\lzo-project\lzo-everyday\tsconfig.json --watch 直接箭头指定的tsconfig
```
## ts语法
### 类型注解
>  这是一种轻量的为函数或者变量提添加的约束，冒号后面的都是类型

```javascript
// 完整格式 var/let/const 标识符:数据类型 = 赋值
// 声明类型后，TypeScript 就会进行类型检测，声明类型称为 类型注解
let age: number = 20;
function tsfun(str: string) {
    console.log(str);
}
//如果类型不对,编译时会报错
tsfun("str");

```
### 基础数据类型
```javascript
// 常用基础类型
let a: string = "str";
let b: number = 20;
let c: boolean = true;
let d: string | number = 20; //联合类型 

// 对象,一般配合接口interface使用
let obj = {
  name: "lzo",
  age: 18,
};
// let obj: {
//     name: string;
//     age: number;
// }

//非严格模式下（配置文件strict：false）undefined和null是可以赋值给其他类型变量的
let e: null = null;
let f: undefined = undefined;

// js 不存在的类型
let anytype: any = "any"; // 值可以是任意类型，js的类型就是any
let tuple: [string, number] = ["str", 20]; //元组：固定元素个数与元素类型
let unknownType: unknown = 8; // 任意不确定类型，任意数据都是不合法的,只能在类型缩小后操作
unknownType = "12"; // 赋值还是没问题的
// console.log(unknownType.length) // 这样的操作就不行了
if (typeof unknownType == "string") {
  // 必须进行类型校验(缩小 将类型缩小到一定范围)，才能根据缩小后的类型进行对应操作
  console.log(unknownType.length);
}

// void 表示函数没有返回值的时候，用void来表示
// 用户指定函数返回void的时候，允许函数不返回 和 返回undefined(返回null不行)
function summ(a: number, b: number): void {
  return undefined;
}
// 用户没有指定void的时候，如果返回undefined，返回值类型部分，类型推导为 undefined类型

// never类型
// 函数不会返回任何东西时，报错或死循环，通常自动推导时可以出现
// 不可能有符合条件的地方，就会被推导为never （let aaa:number&string;）aaa就是never类型
// switch 用于到不了的case或default里面的变量，（可能出现的case，但是没有处理，直接报错，让用户意识到少处理了一些）
function foo(){
    return []
}

-----------------------------------------------------------------------

//枚举
enum USER_ENUM {
    USER,
    ADMIN,
    THREE = "three",
}
console.log(USER_ENUM.USER); //0
console.log(USER_ENUM.ADMIN); //1
console.log(USER_ENUM.THREE); //three
//可以通过数值类型值拿到key
console.log(USER_ENUM[1]); //ADMIN


//any 都可以类型
const arr2: any = ["1", 2];

//void类型像是与any类型相反,只能为它赋予undefined和null：
const vi: void = undefined;

//object 非基础数据类型
const create = (obj: object) => {};
create([]);
create({});
create(() => {});
create(String);
```
#### 类型别名 Type

```typescript
type MyNumber = number
const age:MyNumber = 16

// 对象
type PointType = {
    x:number  // 逗号和封号都可以，如果有换行，可以不指定任何符号
    y:number
    z?:number // z可选
 }

function add(point:PointType){
    console.log(point.x) // 放心的使用point
    return point.x + point.y
}

add({x:1,y:2})
```

#### 类型推导

```typescript
// 类型推导/类型推断
// 声明标识符如果有赋值，会根据赋值的类型推导出标识符的类型注解
let lxtd = "lxtd";    // 推导为 string
let lxtd2 = 2.3;      // 推导为 number
const lxtd3 = 2.3;    // 推导为 字面量类型2.3
const lxtd4 = 'lxtd'; // 推导为 字面量类型lxtd

let lxtd = "str";
lxtd = 124; //报错了 推断成了字符串类型
```

#### 类型断言

>   告诉ts要操作的对象就是那个类型，可以对这个对象做那个类型可以做的事情 

```typescript
const imgEl = document.querySelector(".img") as HTMLImageElement
imgEl.src = 'xxx' // 如果没有断言，ts不知道 imgEl 就是 图片对象，给设置src就会报错

//类型断言 
function getString(str:string|number):number{
    let num:number;
    // 高速ts编译器我的str是什么类型，断言str为string就可以取length
    // 前提是str类型可以是string
    // 两种方式: <类型>变量  或  变量 as 类型
    
    // num = (<string>str).length
    num = (str as string).length
    return num;
}

console.log(getString(12))
```

#### 非空类型断言 !

```typescript
// 非空类型断言
interface IPersion {
  name: string;
  infos?: {
    name: string;
  };
}
const ematyInfo: IPersion = {
  name: "lzo",
};

// 访问时可以用 可选链?. 避免infos.name不存在时
console.log(ematyInfo.infos?.name)

// 赋值时就不能使用 ?. 了
// 方案1 利息缩小
if(ematyInfo.infos){
    ematyInfo.infos.name = 'xun'
}

// 方案2 非空类型断言（强制告诉ts infos一定不为空，危险如果断言错了，给undefined赋值，程序就出错了）
ematyInfo.infos!.name = 'xun'
```

#### 字面量类型

```typescript
const name = 'lzo' // 具体值，const定义的变量，自动推导成字面量
let age:18 = 18 // 指定为字面量类型

// 使用场景
type MethodType = "get" | "post";

// 1
const reqinfos = {
  method: "post",
};

// 2
const reqinfos2 = {
  method: "post"
} as const;

// 3
interface reqinfos3Inter {
  method: MethodType;
}
const reqinfos3: reqinfos3Inter = {
  method: "post",
};

function requet(url: string, method: MethodType) {
  console.log(method);
} // 使用 MethodType 比 string 更加合理

requet("url", "post"); // 可以
requet("url", reqinfos.method as MethodType); // reqinfos.method 是 string 类型 不能直接赋值到 MethodType 类型
requet("url", reqinfos2.method); // 直接将 reqinfos2 所有属性变成字面量类型
requet("url", reqinfos3.method); // 直接将 reqinfos3.method 变成字面量类型 

```

#### 函数类型

```typescript
// 函数类型（类型返回值用的是箭头）
// 有些语言这个参数名称 a|b 是可以省略的，ts中是不可省略的，如果省略就变成 string:any 
let add: (a: string, b: string) => string = (a: string, b: string): string => a + b;
console.log(add("1", "211"));                                      
 
// 提取
type add2Type = (a: string, b: string) => string; // 指定返回值必须为string
let add2: add2Type = (a: string, b: string): string => a + b;
console.log(add("1", "211"));

// 根据执行上下文自动推导匿名函数的类型
let arr5 = ["1", "2", 3];
arr5.forEach((item, index) => {});
```

#### 交叉类型

```typescript
// 交叉类型 （多种类型同时满足）
interface Info {
  name: string;
}
interface Info2 {
  age: number;
}
const infos: Info & Info2 = {
  name: "lzo",
  age: 18,
};

// 数组
let arr: number[] = [1, 2, 3]; //数组 指定数据类型，只能放数字
let arr2: (string | number)[] = [1, 2, 3, "str"]; //数组 指定数据类型,可存放多种类型
let list: Array<number> = [1, 2, 3]; // 泛型写法
let list2: ReadonlyArray<number> = [1, 2, 3]; //list2的元素确保不会被修改
```

#### 类型缩小（类型保护）

>   将需要使用的变量类型范围进行缩小

```typescript
// 联合类型案例
// typeof
let val:number|string = 10;
if(typeof val == string){ // val 的类型可以是 number 和 string，这里缩小为string，直接就能使用string的方法
    console.log(val.length)
}

// === or !==
type Direction = "left" | "right"
function switchdir(direction:Direction){
    if(direction === 'left'){
        console.log("这是left")
    }
}

// instanceof
let date:string|Date = "123"
if(date instanceof Date){
    console.log(date.getTime())
}

// in 判断是否有某个属性  （"name" in obj 判断obj对象是否存在name属性）


// ....
```



总结

+ `number`、`string`、`boolean`、`null`、`undefined`、数组`number[]`、元祖`[string, number,xxx]`、枚举`enum`、`any`、`void`、`object`等十几类
+ 联合类型： number | string
+ 类型断言： `<类型>变量`  或  `变量 as 类`，两种方式让编译器把变量当做指定的类型操作
+ 类型推断:  定义变量时`没有指定类型`,编译器会把根据变量的值推断出一个类型,没值就是any

### interface 与 对象

> 接口是一种能力或一种约束

```javascript

/**
 * type 与 interface 的区别 
 *      1、type 对类型使用范围广，interface 只能声明对象（但对对象使用的范围更广）
 *      2、声明对象时 interface 相同名称可以多次声明，属性叠加（使用别接口，扩展自己需要加入的东西），type不能声明两个相同名称的别名同时存在
 *      3、interface 支持继承 interface Persion2 extends Person {加入Persion2 独有的属性} 
 *      4、interface 可以被类实现 class Tree implements Person （Person 中所有属性方法都要被实现）
 *      5、总结建议：非对象类型使用type，如果使用对象类型的声明使用interface
 */

----------------------------------------------------------------------------------------------

//定义一个接口,如果类型不对||使用没有定义的属性||obj属性不够,ts会提示错误
interface Person {
    firsName: string;
    lastName: string;
    age: number;
}

//我们传入的对象参数实际上会包含很多属性，但是编译器只会检查那些必需的属性是否存在，并且其类型是否匹配
function showName(person: Person) {
    return person.firsName + person.lastName + "," + person.age + "岁";
}
let obj = {
    firsName: "liao",
    lastName: "zhongxun",
    age: 22,
    xxx:'xxx'
};
showName(obj);

//====================================
//定义一个接口,用来描述对象形状的interface类型
interface Person {
    readonly firsName: string; //名称定义好后不能随意更改
    lastName: string;
    age?: number; //可填可不填
}
let per1: Person = {
    firsName: "liao",
    lastName: "zhongxun",
};

//实例类型断言,使Person中不存在的key属性不会报错
let per2: Person = {
    ...per1,
    key: ["xxx", 12],
} as Person;



//接口扩展,继承
interface Persion2 extends Person {
    type: string;
    [key: string]: any; //定义接口设置，任意类型,创建对象时使Persion2中不存在的key属性不会报错
}
let per3: Persion2 = {
    ...per1,
    type: "extend",
    a: "2",
    c: ["xxx", 12],
};

//======================================================================

//函数签名
interface ISearchFunc {
    //定义一个调用签名
    (a: string, b: string): boolean;
}

//定义一个函数，使用定义的签名
const searchFunc: ISearchFunc = (a: string, b: string): boolean => {
    return a.search(b) > -1;
};

console.log(searchFunc("123", "123"));

//======================================================================
//函数签名
interface ISearchFunc {
    //定义一个调用签名
    (a: string, b: string): boolean;
}
//类接口
interface IFly{
    fly:ISearchFunc
}
interface IFly2{
    fly2:ISearchFunc
}

//类中 implements 的类接口都要实现
class Person implements IFly,IFly2{
    fly(a: string, b: string): boolean {
        console.log("实现IFly里的定义");
        return true;
    }
    fly2(a: string, b: string): boolean {
        console.log("实现IFly2里的定义")
        return true;
    }
}

let per1 = new Person()
per1.fly("1","2")
per1.fly2("3","4")

```

### 函数
> 格式 test(变量,变量): 返回值{}   

#### 函数完整写法

```javascript
/**
 *  add变量:函数名
 *  (a: string, b: string) => string ==== add函数的类型
 *  (a: string, b: string): string => a + b ==== 符合这个类型的函数
 *  最后面的 string 指定返回值的类型，写上去方便使用的人知道，得到的是什么样的值
 */
let add: (a: string, b: string) => string = (a: string, b: string): string => a + b;

// 提取
type add2Type = (a: string, b: string) => string; // 指定返回值必须为string
let add2: add2Type = (a: string, b: string): string => a + b;
console.log(add("1", "211"));
```

#### 参数

```javascript
/**
 * 
 * @param a  默认参数,有默认值,可以不传
 * @param b  可选参数
 * @param ...args  剩余参数,必须放在最后面,如果参数够多，默认和可选一定会占一个
 */
function test(a: number = 123, b: number,...args:number[]): number {
    console.log(a) //1
    console.log(b) //2
    console.log(args) //[3,4,5,6,7,8]
    return a + b;
}

test(1,2,3,4,5,6,7,8)
```
#### 参数个数问题

>   TypeScript 对于传入的函数类型的参数个数，少于应有的个数是，不进行检测数量的（但会检测类型） 
>
>   因为js提供很多方法，有很多参数，有很多不常用的

```typescript
let arr = [1,2,3,4,5]
arr.forEach((item,index)=>{}) // 比如这里，其实还有第三个参数 array数组本生，一般情况基本不会用，没必要强制写入
```

#### 函数调用签名

>   调用签名（Call Signatures），函数除了可以被调用，**自己也**可以**拥有属性值**

>   函数表达式并不支持声明属性，如果需要描述一个带属性的函数，就需要在对象类型中写一个**调用签名**了

```typescript
// 函数调用签名
interface ISearchFunc {
  //定义一个调用签名
  (a: string, b: string): boolean; // 这边是冒号，前面的函数类型用的是 箭头=>
  name: string; // 添加属性
  age: number;
}

const bar: ISearchFunc = (a: string, b: string) => {
  return false;
};
bar.name = "lzo";
bar.age = 18;

```

#### 构造签名(了解) 

>   描述某个函数式当做构造函数使用的

```typescript
class Person {}
interface IPerson {
    new (): Person     
} 

function factory(fn:IPerson){
    return 123
}
console.log(factory(Date))
```

#### 可选/默认/剩余参数

```typescript
// 可选
function bar(x:number,y?:number){ // 可选参数y的类型为 number|undefined 的联合类型
    // 参数y需要缩小才能使用 
}
bar(10)
bar(10,20)

// 默认
function bar2(x:number,y = 100){} // 类型注解可以省略
bar(10)
bar(10,undefined) // 可以接收undefined值，undefined和不传是一样的，内部发现是undefined才使用默认值100
bar(10,20)

// 剩余 
function bar3(...args:number[]){}
bar3(1,2,3,4)
```

#### 重载(了解)

> 函数名字相同，但是参数类型或个数不同


```javascript
function getInfo(name:string):void; // 重载签名
function getInfo(age:number):void;
function getInfo(str:any):void{
    if(typeof str == "string"){
        console.log("名字:",str)
    }
    if(typeof str == "number"){
        console.log("年龄",str)
    }
}
getInfo("zhangsan")
```

#### 函数中的this类型

```typescript
const thobj = {
  name: "lzo",
  fn: function () {
    // 没有ts配置文件时，默认 any 类型不报错
    // 属性 noImplicitThis:true 根据上下文推导出this是谁
    console.log(this.name);
  },
};

function thobj2() {
  //console.log(this) // noImplicitThis:true  这里就不行了，不能有模糊类型的this存在，需要明确指定
}

function thobj3(this: { name: string }, info: { name: string }) {
  console.log(this); // 同过第一个参数指定this
}

thobj.fn();
thobj3.call({ name: "lzo" }, { name: "lzo" });

// ts还有很多this内置工具省略
```



#### 匿名函数

```typescript
// 匿名函数最好不谣添加类型注解,例子中根据执行上下文推导出具体类型
let arr = ["1","2"]
arr.forEach((item,index)=>{}) // item:string,index:number
```

#### 其他

```javascript
//函数 参数、返回值
function test(a: string="123", b: string): string {
    return a + b;
}

//声明一个类型:一般在定义联合类型或定义临时变量时可以使用
type Sum = (a: string, b: string) => string;

//interface 声明类型可以继承,可以被类来实现
// interface Sum {
//     (a: string, b: string): string;
// }

let test2: Sum = (a: string, b: string): string => a + b;
//test2类型 (a: string, b: string) =>string,vscode鼠标移入会自动推导出来

```
### 泛型
> 泛型，在代码执行是传入类型，来确定结果  

```javascript
(() => {
    /**
     *  泛型:
     *      在定义接口、函数、类的时候不能确定要使用的数据类型，只能在接口、函数、类调用的时候才能确定的数据类型
     *       定义时不知道类型，利用T..等字幕占位，调用的时候将类型传入
     *  T:type
     */

    function createArray<T>(value: T): T[] {
        return [value];
    }

    //指定T为number类型number
    let caarr1 = createArray<number>(1);
    //一个泛型,调用时如果不指定，编译器通过参数自动推导出T的类型
    let caarr2 = createArray("1");

    //----------------------------------------------------------------------

    function createArray2<T, K>(value: T, key: K): K[] {
        return [key];
    }
    let ca1 = createArray2<string, number>("123", 123);
    let ca2 = createArray2("123", true); //通过参数自动推导出T,K的类型

    //----------------------------------------------------------------------
    //多个泛型实现反转
    let swap = <T, K>(tuple: [T, K]): [K, T] => {
        return [tuple[1], tuple[0]];
    };

    console.log(swap(["123",true]))

    //-----类中----------------------------------------------------
    class Person<T> {
        name: T;
    }
    new Person<string>()

    //-----接口中--------------------------------------------
    interface PersonInt <T>{
        name:T
    }
    let pint:PersonInt<string> = {
        name:"123"
    }
    console.log(pint)
})();

```

#### 泛型约束

```javascript
(() => {
    /**
     *  泛型约束:
     *      如果直接对一个泛型取length会报错，一个编译器不知道T到的有没有length
     *      限制调用时传入的内容
     *      <T extends ILength> //必须有长度,并且可调用split方法
     */

    //定义一个接口用来约束将来某个类型中必要的length属性
    interface ILength {
        length: number;
        split
    }

    function getLength<T extends ILength>(x: T): number {
        x.split("")
        return x.length;
    }

    console.log(getLength<string>("ds"))
})();
```

### 类
```javascript
/**
 * class
 *
 * 继承:类与类的关系
 * 继承后类与类之间的叫法:
 *      A类继承B类:那么A类叫子类，B类叫基类
 *           子类: -> 派生类 
 *           基类: -> 超类（父类）
 * 
 * 多态:子类重写父类结果 是不同子类实例调用父级可以产生不同的结果
 * 修饰符:作用类中的成员,拿来设置成员(属性、构造函数、方法)的可访问性
 *      类中成员有默认修饰符public(外部实例可以通过 . 访问类中成员)
 *      public:公共的，任何地方都能访问
 *      protected:受保护的，(修饰后类类外部无法访问,但子类可以访问)
 *      private:私有的,(修饰后类类外部与子类都无法访问)
 *      !readonly:只读的,对类中的 属性 成进行修饰，修饰后其他地方只能获取，只有构造函数中能修改
 * 
 * 四种修饰符修饰构造函数的属性：
 *      效果一样
 *      但是有修饰符的属性就不需要定义成员属性，也不需要this.name = name;的步骤了
 * 
 * 
 *  。。。。
 *  https://www.bilibili.com/video/BV1rf4y167am?p=26&spm_id_from=pageDriver
 * 
 */
;(() => {
    //定义一个基类
    class Person {
        //定义属性
        name: string;
        age: number;
        gender: string; //性别
        sum: any;
        //定义构造函数
        constructor(name: string, age: number, gender: string) {
            //更新属性
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.sum = (str:string) => { // 构造函数中的实例方法，每new一次都会创建
                console.log(str);
            };
        }
        //定义实例方法  prototype 的方法
        sayHi(str: string) {
            console.log(`我是${this.name}`, str);
        }

        // 静态方法
        static staticTest(str: string) {
            console.log("金泰" + str);
        }
    }

    //定义一个子类
    class Student extends Person{
        //定义构造函数
        constructor(name: string, age: number, gender: string) {
            //使用super调用父级的构造函数
            super(name,age,gender);
        }

        sayHi(){
            console.log(`我是子类重写sayHi`)
            super.sayHi("我在调用父类的sayHi方法")
        }
    }

    let stu1 = new Student("aa",10,'男');
    stu1.sayHi();
    Student.staticTest("Student");
})();

```

#### 存取器

```javascript
/**
 * 存取器
 */
;(() => {
    //定义一个基类
    class Person {
        //定义属性
        name: string;
        age: number;
        //定义构造函数
        constructor(name: string, age: number) {
            //更新属性
            this.name = name;
            this.age = age;
        }

        get nameage() {
            //获取nameage的时候直接调用
            console.log("调用get");
            return this.name + "_" + this.age;
        }
        set nameage(val:string) {
            //设置nameage的时候直接调用
            console.log("调用set");
            this.name = val.split("_")[0];
            this.age = Number(val.split("_")[1]);
        }
    }

    let stu1 = new Person("aa", 10);
    console.log(stu1); //name:"aa",age:10
    console.log(stu1.nameage); //aa_10
    console.log((stu1.nameage = "bb_20"));
    console.log(stu1);//name:"bb",age:20
})();
```
#### 静态成员

```javascript

/**
 * 静态成员
 *      通过 static 修饰的属性或方法
 *      调用:类名.xxx 方式调用的，不能通过实例对象来使用
 *      普通方法不能获取静态属性
 *
 */
(() => {
    //定义一个基类
    class Person {
        //定义属性
        static name1: string;

        //定义构造函数
        constructor() {}
        //定义实例方法
        static sayHi(str: string) {
            console.log(`我是${this.name1}`, str);
        }
    }

    console.log(Person.name1);
    Person.sayHi("静态成员方法");
    console.log((Person.name1 = "cc"));
    Person.sayHi("静态成员方法");
})();
```

#### 抽象类

```javascript
/**
 * 抽象类
 *      抽象方法,只能定义,函数体不能有东西
 *      可以包含非抽象方法
 *      不能被实例化
 *      抽象类的子类必须实现抽象方法和抽象属性才能实例化
 *
 * 抽象类类似模板,定义的抽象方法和抽象属性子类必须拥有
 * 抽象类的目的和作用都是为子类服务的
 *
 */
(() => {
    //定义一个基类
    abstract class Person {
        //定义属性
        abstract name: string = "123";

        //定义方法
        abstract eat();

        //定义实例方法
        sayHi(str: string) {
            console.log(`我是${this.name}`, str);
        }
    }

    class Dog extends Person {
        name: string;
        eat() {
            console.log('实现eat')
        }
}
    let dog = new Dog();
    dog.sayHi('str')
    dog.eat()
    console.log(dog.name)
})();

```


### 声明文件
> 当使用第三方插件时需映入声明文件,才能获得代码补全接口提示的功能

如:jquery  声明文件 @types/jquery   
安装完成之后存放在node_module/@type文件夹中，运行项目是ts会自动解析到项目中

### 内置对象

``` javascript
(()=>{
    /**
     *  内置对象
     */
    let str:string = "str";
    let str2:string = new String("str") //“string”是基元，但“String”是包装器对象会报错
    let str3:String = new String("str") //正确
    console.log(str,str2,str3)
})()
```