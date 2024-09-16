import './polyfills.server.mjs';
import{Da as l,Fa as M,G as n,H as t,I as o,O as e,d as a,i as P,j as g,na as O}from"./chunk-J6DY6BDV.mjs";import"./chunk-5XUXGTUW.mjs";var _=class c{static \u0275fac=function(i){return new(i||c)};static \u0275cmp=P({type:c,selectors:[["app-checkout"]],decls:130,vars:0,consts:[["id","checkout"],[1,"container"],["href","#"],["routerLink","/myaccount"],["routerLink","/product_details"],["routerLink","/cart"],["routerLink","/checkout"],[1,"banks"],[1,"left"],[1,"box"],["for","name"],["type","text","id","name"],["for","company"],["type","text","id","company"],["for","street"],["type","text","id","street"],["for","floor"],["type","text","id","floor"],["for","city"],["type","text","id","city"],["for","phone"],["type","text","id","phone"],["for","email"],["type","email","id","email"],[1,"checked_save"],["type","checkbox","id","check","checked",""],["for","check"],[1,"right"],[1,"head"],[1,"product"],[1,"title_pro"],["src","assets/home/todays1.png","alt","todays1"],[1,"price"],["src","assets/home/todays3.png","alt","todays1"],[1,"total_price"],[1,"line"],[1,"body_bank"],[1,"bank_box"],[1,"choose"],["type","radio","id","radio","name","radio"],["for","radio"],[1,"imgs"],["src","assets/checkout/1.png","alt","checkout"],["src","assets/checkout/2.png","alt","checkout"],["src","assets/checkout/3.png","alt","checkout"],["src","assets/checkout/4.png","alt","checkout"],["type","radio","id","radio","name","radio","checked",""],[1,"coupon"],["type","text","placeholder","coupon code"],["type","submit"]],template:function(i,h){i&1&&(n(0,"section",0)(1,"div",1)(2,"ul")(3,"li")(4,"a",2),e(5,"account"),t()(),n(6,"span"),e(7,"/"),t(),n(8,"li")(9,"a",3),e(10,"my account"),t()(),n(11,"span"),e(12,"/"),t(),n(13,"li")(14,"a",4),e(15,"product"),t()(),n(16,"span"),e(17,"/"),t(),n(18,"li")(19,"a",5),e(20,"view cart"),t()(),n(21,"span"),e(22,"/"),t(),n(23,"li")(24,"a",6),e(25,"checkout"),t()()(),n(26,"div",7)(27,"form",8)(28,"h2"),e(29,"Billing Details"),t(),n(30,"div",9)(31,"label",10),e(32,"first name"),n(33,"span"),e(34,"*"),t()(),o(35,"input",11),t(),n(36,"div",9)(37,"label",12),e(38,"Company name"),n(39,"span"),e(40,"*"),t()(),o(41,"input",13),t(),n(42,"div",9)(43,"label",14),e(44,"street address"),n(45,"span"),e(46,"*"),t()(),o(47,"input",15),t(),n(48,"div",9)(49,"label",16),e(50,"Apartment, floor, etc. (optional)"),t(),o(51,"input",17),t(),n(52,"div",9)(53,"label",18),e(54,"Town/City"),n(55,"span"),e(56,"*"),t()(),o(57,"input",19),t(),n(58,"div",9)(59,"label",20),e(60,"Phone Number"),n(61,"span"),e(62,"*"),t()(),o(63,"input",21),t(),n(64,"div",9)(65,"label",22),e(66,"Email Address"),n(67,"span"),e(68,"*"),t()(),o(69,"input",23),t(),n(70,"div",24),o(71,"input",25),n(72,"label",26),e(73,"Save this information for faster check-out next tim"),t()()(),n(74,"div",27)(75,"div",28)(76,"div",29)(77,"div",30),o(78,"img",31),n(79,"h4"),e(80,"LCD Monitor"),t()(),n(81,"div",32),e(82,"$650"),t()(),n(83,"div",29)(84,"div",30),o(85,"img",33),n(86,"h4"),e(87,"H1 Gamepad"),t()(),n(88,"div",32),e(89,"$1100"),t()(),n(90,"div",34)(91,"div",9)(92,"h4"),e(93,"Subtotal:"),t(),n(94,"div",32),e(95,"$1750"),t()(),o(96,"div",35),n(97,"div",9)(98,"h4"),e(99,"Shipping:"),t(),n(100,"div",32),e(101,"free"),t()(),o(102,"div",35),n(103,"div",9)(104,"h4"),e(105,"Total:"),t(),n(106,"div",32),e(107,"$1750"),t()()()(),n(108,"form",36)(109,"div",37)(110,"div",38),o(111,"input",39),n(112,"label",40),e(113,"Bank"),t()(),n(114,"div",41),o(115,"img",42)(116,"img",43)(117,"img",44)(118,"img",45),t()(),n(119,"div",37)(120,"div",38),o(121,"input",46),n(122,"label",40),e(123,"Cash"),t()()(),n(124,"div",47),o(125,"input",48),n(126,"button",49),e(127,"Apply Coupon"),t()(),n(128,"a",2),e(129,"Place Order"),t()()()()()())},dependencies:[l],styles:['@charset "UTF-8";#checkout[_ngcontent-%COMP%]{padding:100px 0}#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:20px}#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:0 10px;text-transform:capitalize;color:#000;opacity:30%}@media (max-width: 768px){#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:10px;margin:0 5px}}#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   a[_ngcontent-%COMP%]{opacity:1}#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}@media (max-width: 767px){#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]{flex-direction:column;gap:30px}}@media (min-width: 768px) and (max-width: 992px){#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]{gap:15px}}#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:36px;font-weight:500;letter-spacing:4px;margin-bottom:24px}@media (max-width: 768px){#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:22px}}@media (max-width: 768px){#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{width:100%}}#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{margin-block:32px}#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;text-transform:capitalize;font-size:16px;font-weight:400;color:#0006;margin-bottom:8px}#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#db4444}#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:470px;height:50px;background-color:#f5f5f5;border:0;outline:0;padding:10px}@media (max-width: 767px){#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%}}@media (min-width: 768px) and (max-width: 992px){#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:380px}}#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .checked_save[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px}@media (max-width: 768px){#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .checked_save[_ngcontent-%COMP%]{gap:10px}}#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .checked_save[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{appearance:none;-webkit-appearance:none;width:24px;height:24px;border-radius:4px;border:1px solid #000000;position:relative}@media (max-width: 768px){#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .checked_save[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:18px;height:18px}}#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .checked_save[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked{background-color:#db4444;border:0}#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .checked_save[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked:after{content:"\\2713";font-family:"Font Awesome 6 Free";position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);color:#f5f5f5;font-size:18px}@media (max-width: 768px){#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .checked_save[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked:after{font-size:11px}}#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .checked_save[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:14px;font-weight:400}#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{width:527px}@media (max-width: 768px){#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{width:320px}}#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%], #checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px;font-weight:400}#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:32px}#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .title_pro[_ngcontent-%COMP%]{display:flex;align-items:center;gap:24px}#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .total_price[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .total_price[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{margin-block:20px}#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .body_bank[_ngcontent-%COMP%]   .bank_box[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-block:32px}#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .body_bank[_ngcontent-%COMP%]   .bank_box[_ngcontent-%COMP%]   .choose[_ngcontent-%COMP%]{display:flex;align-items:center}#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .body_bank[_ngcontent-%COMP%]   .bank_box[_ngcontent-%COMP%]   .choose[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:24px;height:24px;margin-right:16px}#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .body_bank[_ngcontent-%COMP%]   .bank_box[_ngcontent-%COMP%]   .choose[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked{background-color:#000}#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .body_bank[_ngcontent-%COMP%]   .bank_box[_ngcontent-%COMP%]   .choose[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:16px;font-weight:400}#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .body_bank[_ngcontent-%COMP%]   .bank_box[_ngcontent-%COMP%]   .imgs[_ngcontent-%COMP%]{display:flex;align-items:center}#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .body_bank[_ngcontent-%COMP%]   .bank_box[_ngcontent-%COMP%]   .imgs[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px}#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .body_bank[_ngcontent-%COMP%]   .coupon[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:300px;height:56px;padding:10px;border-radius:4px;border:1px solid #000000;margin-right:16px;font-size:16px;font-weight:400}@media (max-width: 767px){#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .body_bank[_ngcontent-%COMP%]   .coupon[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:210px;margin-right:3px}}@media (min-width: 768px) and (max-width: 992px){#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .body_bank[_ngcontent-%COMP%]   .coupon[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:170px;margin-right:5px}}#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .body_bank[_ngcontent-%COMP%]   .coupon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:211px;height:56px;background-color:#db4444;border-radius:4px;text-align:center;line-height:56px;color:#fff;border:0}@media (max-width: 767px){#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .body_bank[_ngcontent-%COMP%]   .coupon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100px}}@media (min-width: 768px) and (max-width: 992px){#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .body_bank[_ngcontent-%COMP%]   .coupon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:115px}}#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .body_bank[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:190px;height:56px;border-radius:4px;background-color:#db4444;text-align:center;line-height:56px;color:#f5f5f5;margin-top:20px}@media (max-width: 767px){#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .body_bank[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-inline:auto}}@media (min-width: 768px) and (max-width: 992px){#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .body_bank[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:135px;margin-inline:auto}}#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:54px}#checkout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banks[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:not(:last-child){margin-right:10px}']})};var p=[{path:"",component:_}],r=class c{static \u0275fac=function(i){return new(i||c)};static \u0275mod=g({type:c});static \u0275inj=a({imports:[M.forChild(p),M]})};var m=class c{static \u0275fac=function(i){return new(i||c)};static \u0275mod=g({type:c});static \u0275inj=a({imports:[O,r]})};export{m as CheckoutModule};
