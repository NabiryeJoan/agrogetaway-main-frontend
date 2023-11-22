// // PaymentPage.js
// import {
//   Button,
//   Container,
//   Grid,
//   Paper,
//   TextField,
//   Typography,
// } from "@mui/material";
// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import React from "react";

// const Payment = () => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handlePayment = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       // Stripe.js has not yet loaded.
//       // Make sure to disable form submission until Stripe.js has loaded.
//       return;
//     }

//     // Your payment processing logic using Stripe API goes here
//     // For simplicity, we'll just log a message for now
//     console.log("Processing payment...");
//   };

//   return (
//     <Container maxWidth="md" style={{ marginTop: 40 }}>
//       <Paper elevation={3} style={{ padding: 20 }}>
//         <Typography variant="h4" gutterBottom>
//           Payment Details
//         </Typography>

//         <form onSubmit={handlePayment}>
//           <Grid container spacing={3}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="Cardholder Name"
//                 variant="outlined"
//                 fullWidth
//                 margin="normal"
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="Card Number"
//                 variant="outlined"
//                 fullWidth
//                 margin="normal"
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="Expiry Date"
//                 variant="outlined"
//                 fullWidth
//                 margin="normal"
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="CVC"
//                 variant="outlined"
//                 fullWidth
//                 margin="normal"
//               />
//             </Grid>
//             {/* Add more input fields as needed for payment details */}

//             <Grid item xs={12}>
//               <CardElement
//                 options={{
//                   style: {
//                     base: {
//                       fontSize: "16px",
//                       color: "#424770",
//                       "::placeholder": {
//                         color: "#aab7c4",
//                       },
//                     },
//                     invalid: {
//                       color: "#9e2146",
//                     },
//                   },
//                 }}
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 color="primary"
//                 fullWidth
//               >
//                 Pay Now
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//       </Paper>
//     </Container>
//   );
// };

// export default Payment;

// PaymentPage.js
import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Payment = () => {
  // Placeholder functions for handling Airtel and MTN payments
  const handleAirtelPayment = () => {
    console.log("Processing Airtel Mobile Money payment...");
    // Add your Airtel Mobile Money integration logic here
  };

  const handleMtnPayment = () => {
    console.log("Processing MTN Mobile Money payment...");
    // Add your MTN Mobile Money integration logic here
  };

  return (
    <Container maxWidth="md" style={{ marginTop: 40 }}>
      <Paper elevation={3} style={{ padding: 20 }}>
        <Typography variant="h4" gutterBottom>
          Payment Details
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Cardholder Name"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Card Number"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Expiry Date"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="CVC"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </Grid>
          {/* Add more input fields as needed for payment details */}

          <Grid item xs={12}>
            {/* Placeholder icons for Airtel and MTN */}
            <img
              src="path-to-airtel-icon.png"
              alt="Airtel Mobile Money"
              style={{ marginRight: "10px", cursor: "pointer" }}
              onClick={handleAirtelPayment}
            />
            <img
              src="path-to-mtn-icon.png"
              alt="MTN Mobile Money"
              style={{ cursor: "pointer" }}
              onClick={handleMtnPayment}
            />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Pay Now
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Payment;
