/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { TableContainer, Paper, Table, TableBody, TableRow, TableCell } from "@mui/material";
import { currencyFormat } from "../../app/util/util";
import { useAppSelector } from "../../app/store/configureStore";

export default function BasketSummary() {
    const {basket} = useAppSelector(state => state.basket);

    let deliveryFee = 500;

    const subtotal = basket?.items.reduce((sum, item) => (
        sum + (item.price * item.quantity)
    ), 0) ?? 0;     // daca functia reduce e undefined sau null , atunci return 0


    if(subtotal > 10000){
        deliveryFee = 0;
    }


    return (
        <>
            <TableContainer component={Paper} variant={'outlined'}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell colSpan={2}>Subtotal</TableCell>
                            <TableCell align="right">{currencyFormat(subtotal)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Delivery fee*</TableCell>
                            <TableCell align="right">{currencyFormat(deliveryFee)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Total</TableCell>
                            <TableCell align="right">{currencyFormat(subtotal + deliveryFee)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <span style={{fontStyle: 'italic'}}>*Orders over $100 qualify for free delivery</span>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}