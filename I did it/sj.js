    var cart = [];
    var itemList = [
        {item: 'Sand', price: 4},
        {item: 'Dark Oak Planks', price: 5},
        {item: 'Pizza Wood Carving', price: 3},
        {item: 'Pizza Plushie', price: 3},
        {item: '50 Rep', price: 2},
        {item: '100 Rep', price: 4},

        {item: 'Chocolate Chip', price: 3},
        {item: 'Butter Cookie', price: 2},
        {item: 'Crinkle Cookie', price: 3},
        {item: 'Sugar Cookie', price: 1},
        {item: 'Macaroon', price: 2},
        {item: 'Gingerbread', price: 2},

        {item: 'Steak', price: 3},
        {item: 'Leather', price: 7},
        {item: 'Cactus', price: 3},
        {item: 'Lamp', price: 1},
        {item: 'Book & Quill', price: 2},
        {item: 'Enchanting Services', price: 15},

        {item: 'Spyglass Regular', price: 5},
        {item: 'Spyglass Ultra Zoom', price: 10},
        {item: 'Microphone & Speaker Attachment', price: 3},
        {item: 'Spyglass Stand', price: 3},
        {item: 'AHA Sticker', price: 1},
        {item: 'Spyglass Repair', price: 3},

        {item: 'Lucky Luck Crystal', price: 1},
        {item: 'Love Crystal', price: 1},
        {item: 'Strength of The Badger Crystal', price: 1},
        {item: 'Dodge and Weave Crystal', price: 1},
        {item: 'Silver Tongue Speech Crystal', price: 1},
        {item: 'Courage of the Lion Crystal', price: 1},
        {item: 'CatScent Creeper Repellent Crystal', price: 1},
        {item: 'Houdini Escape Crystal', price: 1},
        
        {item: 'Jellie Panda Reserve Ticket', price: 1},
        {item: 'T-Shirt', price: 2},
        {item: 'Keychain', price: 1},
        {item: 'Plushie', price: 3},
        {item: 'Hat', price: 2},
        {item: 'Stickers', price: 1},

        {item: 'Parchment paper', price: 5},
        {item: 'Mapping Paper', price: 2},
        {item: 'Graphing Paper', price: 2},
        {item: 'Construction Paper', price: 1},
        {item: 'Multi-media Paper', price: 3},
        {item: 'Wrapping Paper', price: 1},

        {item: 'Wrist Watch', price: 4},
        {item: 'Pocket Watch', price: 4},
        {item: 'Cuckoo Clock', price: 5},
        {item: 'Hourglass', price: 2},
        {item: 'Clock Repairs', price: 2},
        {item: 'Doormat', price: 1},

        {item: 'Bread Loaf', price: 1},
        {item: 'Baguette', price: 2},
        {item: 'Bagel', price: 3},
        {item: 'Chocolate Cake', price: 4},
        {item: 'Strawberry Cake', price: 3},
        {item: 'Bad Boy Sunglass', price: 5},
    ]
    function add(event){
        if(JSON.parse(localStorage.getItem("shoppingList"))!=null){
            cart=JSON.parse(localStorage.getItem("shoppingList"));
        }
        var items=event.target.innerHTML.trim();
        var price=event.target.nextElementSibling.innerHTML.trim();
        price=Number(price.slice(0,2));
        var order={prod_name: items, prod_price: price};
        cart.push(order);
        var store=JSON.stringify(cart);
        localStorage.setItem("shoppingList",store);
    }
    function showGoods(){
        cart=JSON.parse(localStorage.getItem("shoppingList"));
        document.getElementById("cart").innerHTML="";
        var total=0;
        document.getElementById("total").innerHTML="";
        for(var i=0; i<cart.length; i++){
            total+=Number(cart[i].prod_price);
            document.getElementById("cart").innerHTML+="<div class='row'>"+
            "<div class='border col' onclick='remove(event)'>"+cart[i].prod_name+
            "</div>"+"<div class='col'>"+cart[i].prod_price+"</div>"+"</div>";
            document.getElementById("total").innerHTML="Total: "+total;
        }
        document.getElementById("what").value=JSON.stringify(cart);
    }
    function remove(event){
        var delthing=event.target.innerHTML;
        for(var i=0;i<cart.length;i++){
            if(cart[i].prod_name==delthing){
                cart.splice(i,1);
                break;
            }
        }
        var store=JSON.stringify(cart);
        localStorage.setItem("shoppingList",store);
        showGoods();
    }