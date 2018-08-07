
var initState = {
    footList:[
        {path:"/home",txt:"首页",icon:"iconfont icon-shouye"},
        {path:"/community",txt:"社区",icon:"iconfont icon-m-shequ"},
        {path:"/shopping",txt:"商城",icon:"iconfont icon-shangcheng"},
        {path:"/mine",txt:"我的",icon:"iconfont icon-wode"},
    ],
    username:"",
    hometopbanner:[],
    one:[],
    two:[],
    three:[],
    shopping:[],
    details:[],
    car:[],
    count:0,
    aa:0,
    q:[12,13],
    checked:true
   
    
}


export default (state=initState,action)=>{

    var innum=()=>{
        var num = 0;
        
           var len = action.preload.length
           for(var i=0;i<len;i++){
               
               num+=action.preload[i].num*action.preload[i].price;
           }
           return num;
    }


    switch(action.type){
        case "gethometopbanner":
        state.hometopbanner=action.preload;
        return Object.assign({},state);
        break;

        case "getone":
        state.one=action.preload;
        return Object.assign({},state);
        break;


        case "gettwo":
        state.two=action.preload;
        return Object.assign({},state);
        break;


        case "getthree":
        state.three=action.preload;
        return Object.assign({},state);
        break;

        case "getshopping":
        state.shopping=action.preload;
        return Object.assign({},state);
        break;

        case "getdetails":
        state.details = action.preload;
        return Object.assign({},state);
        break;

        case "getcar":
        
        var num = 0;
        
           var len = action.preload.length
           for(var i=0;i<len;i++){
               console.log(1)
               action.preload[i].check=true;
              
               num+=action.preload[i].num*action.preload[i].price;
           }
           console.log(2);
           
           state.car = action.preload;
            state.count =  num;
            return Object.assign({},state);
            break;



        case "setnum":
        // state.shopping=action.preload;
        

        return Object.assign({},state);
        break;

        case "all":
       
        var arr = [];
        action.preload.car.forEach((item,index)=>{
           var obj={};
           obj.check = item.check;
           obj.id = item.id;
           obj.num = item.num;
           obj.name = item.name;
           obj.price = item.price;
           obj.img = item.img;
           // console.log(obj);
           // arr.push(obj); 
           arr[index] = obj;
        })
        console.log(arr);
        state.car = arr;
        state.checked = action.preload.checked;
        
        console.log(state.car);
        return Object.assign({},state);
        break;



        case "aa":
        state.q[0]=45;

       console.log(state.q[0]);
         return Object.assign({},state);
         break;


        default:
        return Object.assign({},state);
        break;


    }
    
}