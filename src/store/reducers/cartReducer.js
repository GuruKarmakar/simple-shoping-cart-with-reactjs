import {
    ADD_TO_CART,
    REMOVE_ITEM,
    ADD_QUANTITY,
    SUB_QUANTITY
} from '../actions/actionCart'

const init = {
    items: [
        { id: 1, title: 'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 110, img: 'https://cdn.shopify.com/s/files/1/0752/4221/products/KP025BKN_2048x.jpg?v=1524683527' },
        { id: 2, title: 'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 80, img: 'https://rukminim1.flixcart.com/image/332/398/jyxaw7k0/shoe/b/k/f/dg-319-red-spider-sports-6-digitrendzz-red-original-imafehyf2gfpbuj4.jpeg?q=50' },
        { id: 3, title: 'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 120, img: 'https://s7d4.scene7.com/is/image/JCPenney/DP1020201823111331C.tif?wid=350&hei=350&op_usm=.4,.8,0,0&resmode=sharp2' },
        { id: 4, title: 'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 260, img: 'https://assets.ajio.com/medias/sys_master/root/h9f/he0/13018714767390/-473Wx593H-460342492-blue-MODEL.jpg' },
        { id: 5, title: 'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 160, img: 'https://images.boardriders.com/global/dcshoes-products/all/default/hi-res/adys100470_kaliss,p_nwh_frt2.jpg' },
        { id: 6, title: 'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 90, img: 'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/rlpfdp3vppliikmmv5lp/vaporfly-4-flyknit-running-shoe-v7G3FB.jpg' }
    ],
    addedItem: [],
    total: 0
}

const cartReducer = (state = init, action) => {
    if (action.type === ADD_TO_CART) {
        const add = state.items.find(item => item.id === action.id)
        const ifExits = state.addedItem.find(item => action.id === item.id)
        if (ifExits) {
            add.quantity += 1
            return {
                ...state,
                total: state.total + add.price
            }
        } else {
            add.quantity = 1
            return {
                ...state,
                addedItem: state.addedItem.concat(add),
                total: state.total + add.price
            }
        }
    }

    if(action.type === REMOVE_ITEM){
        const removeItem = state.items.find(item => item.id === action.id)
        const new_item = state.addedItem.filter(item => item.id !== action.id)

        const newTotal = state.total - (removeItem.price * removeItem.quantity)
        console.log(removeItem)

        return {
            ...state,
            addedItem:new_item,
            total:newTotal
        }
    }

    if(action.type === ADD_QUANTITY) {
        const add = state.items.find(item => item.id === action.id)
        add.quantity += 1
        return {
            ...state,
            total: state.total + add.price
        }
    }
    if(action.type === SUB_QUANTITY){
        const add = state.items.find(item => item.id === action.id)
        const newTotal = state.total - add.price
        
        if(add.quantity === 1){
            const new_item = state.addedItem.filter(item => item.id !== action.id)
           
            return {
                ...state,
                addedItem:new_item,
                total:newTotal
            }
        }else{
            add.quantity -= 1
            
            return{
                ...state,
                total:newTotal
            }

        }

        // return {
        //     ...state,
            
        // }
    }
    return state
}

export default cartReducer