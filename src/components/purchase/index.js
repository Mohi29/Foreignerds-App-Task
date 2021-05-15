import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
// import GooglePayButton from '@google-pay/button-react';
// import { GooglePay } from 'react-native-google-pay';

// const allowedCardNetworks = ['VISA', 'MASTERCARD'];
// const allowedCardAuthMethods = ['PAN_ONLY', 'CRYPTOGRAM_3DS'];
 
// const requestData = {
//   cardPaymentMethod: {
//     tokenizationSpecification: {
//       type: 'PAYMENT_GATEWAY',
//       // stripe (see Example):
//     //   gateway: 'stripe',
//     //   gatewayMerchantId: '',
//     //   stripe: {
//     //     publishableKey: 'pk_test_TYooMQauvdEDq54NiTphI7jx',
//     //     version: '2018-11-08',
//     //   },
//       // other:
//       gateway: 'example',
//       gatewayMerchantId: 'exampleGatewayMerchantId',
//     },
//     allowedCardNetworks,
//     allowedCardAuthMethods,
//   },
//   transaction: {
//     totalPrice: '1',
//     totalPriceStatus: 'FINAL',
//     currencyCode: 'USD',

//   },
//   merchantName: 'Example Merchant',
// };
 
// Set the environment before the payment request
// GooglePay.setEnvironment(GooglePay.ENVIRONMENT_TEST);
 
// // Check if Google Pay is available
// GooglePay.isReadyToPay(allowedCardNetworks, allowedCardAuthMethods)
//   .then((ready) => {
//     if (ready) {
//       // Request payment token
//       GooglePay.requestPayment(requestData)
//         .then((token) => {
//             console.log("myToken", token)
//           // Send a token to your payment gateway
//         })
//         .catch((error) => console.log(error.code, error.message));
//     }
//   })

export class PurchaseScreen extends Component {



    render() {
        return (
            <View>
                {/* <GooglePayButton 
                    environment="TEST"
                    paymentRequest={{
                        apiVersion: 2,
                        apiVersionMinor: 0,
                        allowedPaymentMethods: [{
                            type: 'CARD',
                            parameters: {
                                allowedAuthMethods:['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                allowedCardNetworks: ['MASTERCARD', 'VISA']
                            },
                            tokenizationSpecification: {
                                type: 'PAYMENT_GATEWAY',
                                parameters: {
                                    gateway: 'example',
                                    gatewayMerchantId: 'exampleGatewayMerchantId',
                                }
                            }
                        }],
                        merchantInfo: {
                            merchantId: '12345678901234567890',
                            merchantName: 'Demo Merchant'
                        },
                        transactionInfo: {
                            totalPriceStatus: 'FINAL',
                            totalPriceLabel: 'Total Price',
                            totalPrice: '1',
                            currencyCode: 'USD',
                            countryCode: 'US'
                        },
                        shippingAddressRequired: true,
                        callbackIntents: ['PAYMENT_AUTHORIZATION']
                    }}
                    onLoadPaymentData = {paymentRequest => {
                        console.log("pay success", paymentRequest)
                    }}
                    onPaymentAuthorized={paymentData => {
                        console.log("payment authorized..", paymentData)
                        return {transactionState: 'SUCCESS'}
                    }}
                    // existingPaymentMethodRequired={false}
                    buttonColor='black'
                    buttonType='buy'
                /> */}
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseScreen)
