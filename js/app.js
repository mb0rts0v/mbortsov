var app = new Vue({
    el: ".content",
    data:{
        products:[{id:1, title:"Ripley Pineapple", image:"ripley.jpg", desc:"The Ripley variety is one of the sweetest pineapples in the world. It has reddish-green leaves with brown spots and an oval. When the pineapples are fully ripe, they have a pale copper color. The ripe sweet flesh is yellow, and more of it is found towards the bottom of the pineapple."},
                  {id:2, title:"Mordilona Pineapple", image:"mordilona.jpg", desc:"The northeastern part of Colombia and Venezuela is home to the Mordilona pineapple. This variety starts off with a green rind that turns yellowish-orange when ripe. The fruit has an uneven cylindrical shape and ample flesh. One way to tell the Mordilona pineapple is ready to eat is to smell the sweet aroma."},  
                  {id:3, title:"Cabezona Pineapple", image:"cabezona.jpg", desc:"Bite into the bitter-sweet Cabezona pineapple and enjoy a unique taste. This pineapple cultivar is native to Mexico and grows a strong large stem. The outer skin has small spikes and is yellowish-orange. Inside, you come across white flesh that turns yellow as the pineapple ripens."}, 
                  {id:4, title:"Giant Kew Pineapple", image:"giantkew.jpg", desc:"The Giant Kew pineapple is as big as the name suggests. This large pineapple produces a huge fruit with a coppery-yellow to yellow outer rind when ripe. It has broad and flat eyes and sweet flesh when ripe. The flesh has a pale-yellow color. It’s a late maturing pineapple variety that’s grown commercially in India."},
                  {id:5, title:"Brecheche Pineapple", image:"brecheche.jpg", desc:"Parts of southern Venezuela are known to grow the Brecheche pineapple. This is a tasty pineapple variety that works so well for tasty treats like desserts and pastries. The leaves of the Brecheche pineapple are olive-color, and the inside is a yellow middle section. One identifying factor for the Brecheche pineapple is its cylindrical shape and sweet aroma. The flesh is juicy and perfect for juices since it has little fiber."},  
                  {id:6, title:"Maipure Pineapple", image:"maipure.jpg", desc:"The Maipure pineapple originates from Venezuela. This is a unique one as it has both a sweet and sour taste even when ripe. When you get it, you can observe the yellow rind. The flesh is also yellow when ripe."},  
                  {id:7, title:"James Queen Pineapple", image:"jamesqueen.jpg", desc:"One pineapple that grows faster than the rest is the James Queen cultivar. The pineapple is a round shape with a reddish-orange exterior when ripe. This large fruit has dark green leaves with reddish spots and yellow, juicy flesh."},  
                  {id:8, title:"Monte Lirio Pineapple", image:"montelirio.jpg", desc:"The Monte Lirio pineapple has a globe-like shape and a rough yellow rind. The leaves remain dark green even when the pineapple is ripe. The fruit has white flesh. This pineapple is unique with sparse leaves that don’t have any spines. The flesh balances between sour and sweet even when ripe."}
    ],
    product:[],
    btnVisible:0,


    },
    mounted:function(){
        this.getProduct();
        this.checkInCart();
        // console.log("cart: " + window.localStorage.getItem("cart").split(","));
    },
    methods:{
        addItem:function(id){
            window.localStorage.setItem('prod', id)
        },
        getProduct:function(){
            if(window.location.hash){
                var id = window.location.hash.replace("#", "");
                if(this.products && this.products.length>0){
                    for(var i in this.products){
                        if(this.products[i] && this.products[i].id && id==this.products[i].id){
                            this.product = this.products[i];
                        }
                    }
                }
            }
        },
        addToCart:function(id){
            var cart = [];
            if(window.localStorage.getItem("cart")){
                cart = window.localStorage.getItem("cart").split(",");
            }
            if(cart.indexOf(String(id))==-1){
                cart.push(id);
                window.localStorage.setItem('cart', cart.join())
                this.btnVisible=1;
                console.log(cart);
            }
        },
        checkInCart:function(){
            if(this.product	&& this.product.id && window.localStorage.getItem('cart').split(',').indexOf(String(this.product.id))!=-1) this.btnVisible = 1;
        }
    }
});