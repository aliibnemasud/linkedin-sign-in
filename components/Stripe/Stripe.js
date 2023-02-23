import { checkout } from "@/chekout";

const Stripe = () => {
    return (


        <div>

            <img src="" alt="" />

            <h2>Price: $ 10</h2>

            <button onClick={()=> checkout({
                lineItems: [
                    {
                        price: 'price_1MeNuFBnUuL4pMAmFYLCJiHR',
                        quantity: 1
                    }
                ]
            }) }>Buy Now</button>           
        </div>
    )
}


export default Stripe;
