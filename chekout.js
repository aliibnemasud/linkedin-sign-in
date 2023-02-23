import { loadStripe } from "@stripe/stripe-js";

export async function checkout ({lineItems}){
    let stripePromise = null;

    const getStripe = () => {
        if(!stripePromise){
            stripePromise = loadStripe ("pk_test_51MeNjlBnUuL4pMAm5CZ3xP8IqqdGPCYCLRSip0MHwmMXVvHKLqmQsGTnaZabS2EYtQeB27TUKiqAkx1q4RFgpPXL0028NJAQiy")
        }
        return stripePromise
    }

    const stripe = await getStripe()

    await stripe.redirectToCheckout({
        mode:'payment',
        lineItems,
        successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: window.location.origin        
    })
}