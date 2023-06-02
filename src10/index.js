import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let state = {
    "flags": [
        {
            countryName: "Belarus",
            flag: "url('http://www.flags.net/images/smallflags/BLRU0001.GIF')",
            mask: "+375 (XX) XXX-XX-XX",
        },
        {
            countryName: "Russia",
            flag: "url('http://www.flags.net/images/smallflags/RUSS0001.GIF')",
            mask: "+7 (XXX) XXX-XX-XX",
        },
        {
            countryName: "Ukraine",
            flag: "url('http://www.flags.net/images/smallflags/UKRN0001.GIF')",
            mask: "+380 (XX) XXX-XX-XX",
        },
        {
            countryName: "Poland",
            flag: "url('http://www.flags.net/images/smallflags/POLA0001.GIF')",
            mask: "+48 XXX-XXX-XXX",
        },
        {
            countryName: "Latvia",
            flag: "url('http://www.flags.net/images/smallflags/LATV0001.GIF')",
            mask: "+371 XXXX-XXXX",
        },
        {
            countryName: "USA",
            flag: "url('http://www.flags.net/images/smallflags/UNST0001.GIF')",
            mask: "+1 (XXX) XXX-XX-XX",
        },
    ],
    days: 31,
    months: 12,
    minYear: 1900,
    "products": [
        {
            id: 1,
            name: "французский сыр",
            price: 0.9,
            inStock: 99,
            description: "Каждый сорт сыра отличается огромным разнообразием, поэтому некоторые оценивают от 1000 до 1600 различных видов французского сыра. Французские сыры можно разделить на восемь категорий: les huit familles de fromage.'.",
            img: "https://www.fodors.com/wp-content/uploads/2019/05/HERO_FrenchCheesesNeverHeardOf_Heroshutterstock520248970.jpg",
            isNew: true,
            discount: "20",
        },
        {
            id: 2,
            name: "сыр",
            price: 4.9,
            inStock: 3,
            description: "Некоторые сыры классифицируются, охраняются и регулируются французским законодательством. Большинство из них классифицируются как Appellation d'origin contrôlée (AOC), самый высокий уровень защиты. Некоторые из них также защищены менее строгим, но все же регулируемым законом обозначением Label Régional (LR). Несколько французских сыров защищены защищённым географическим указанием Европейского Союза (PGI)..",
            img: "https://www.cheese.com/media/img/cheese/emmentaler_istock.jpg",
            isNew: false,
            discount: "0",
        },
        {
            id: 3,
            name: "масло",
            price: 99,
            inStock: 2,
            description: "Сливочное масло – это молочный продукт, изготовленный из белковых и жировых компонентов взбитых сливок. Это полутвердая эмульсия при комнатной температуре, состоящая примерно на 80% из молочного жира. Он используется при комнатной температуре в виде спреда, расплавляется в качестве приправы и используется в качестве жира при выпечке, приготовлении соусов, жарке на сковороде и других кулинарных процедурах.",
            img: "https://e0.edimdoma.ru/data/posts/0001/8459/18459-ed4_wide.jpg?1631181988",
            isNew: false,
            discount: "50",
        },
        {
            id: 4,
            name: "крем",
            price: 3.9,
            inStock: 0,
            description: "Сливки — это молочный продукт, состоящий из слоя с более высоким содержанием жира, снятого с верхней части молока перед гомогенизацией. В негомогенизированном молоке менее плотный жир в конце концов поднимается наверх. При промышленном производстве сливок этот процесс ускоряется за счет использования центрифуг, называемых «сепараторами».'. ",
            img: "https://www.wikihow.com/images/thumb/1/14/Make-Heavy-Cream-Step-12-Version-5.jpg/v4-1200px-Make-Heavy-Cream-Step-12-Version-5.jpg",
            isNew: false,
            discount: "0",
        },
        {
            id: 5,
            name: "сметана",
            price: 1.9,
            inStock: 32,
            description: "Сметана (на североамериканском английском, австралийском английском и новозеландском английском) или сметана (британский английский) — это молочный продукт, полученный путем ферментации обычных сливок с помощью определенных видов молочнокислых бактерий.[1] Бактериальная культура, введенная намеренно или естественным образом, сквашивает и сгущает сливки.",
            img: "https://www.budgetbytes.com/wp-content/uploads/2022/08/Sour-Cream-chips-above.jpg",
            isNew: false,
            discount: "0",
        },
        {
            id: 6,
            name: "молоко",
            price: 2.9,
            inStock: 86,
            description: "Молоко — это белая жидкая пища, вырабатываемая молочными железами млекопитающих. Это основной источник питания для молодых млекопитающих (включая младенцев, находящихся на грудном вскармливании), прежде чем они смогут переваривать твердую пищу. Иммунные факторы и иммуномодулирующие компоненты в молоке способствуют формированию молочного иммунитета.",
            img: "https://upload.wikimedia.org/wikipedia/commons/2/28/Milk_001.JPG",
            isNew: false,
            discount: "10",
        },
        {
            id: 7,
            name: "йогурт",
            price: 0.72,
            inStock: 0,
            description: "Йогурт – это продукт, полученный путем бактериальной ферментации молока. Бактерии, используемые для приготовления йогурта, известны как йогуртовые культуры. Ферментация сахаров в молоке этими бактериями производит молочную кислоту, которая воздействует на молочный белок, придавая йогурту его текстуру и характерный терпкий вкус.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL_-SRcFHSCXZ5g6QJdpBoHq0rK0hceSrLfFsiKpR70f8MMt9gx0e6Bv11Mu51zdb5ARQ&usqp=CAU",
            isNew: true,
            discount: "0",
        },
    ],
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App state={state} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
