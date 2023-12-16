/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  CardHeader,
  Avatar
} from "@mui/material";
import { Product } from "../../app/models/product";
import { Link } from "react-router-dom";
import { useState } from "react";
import agent from "../../app/api/agent";
import React from "react";
import {LoadingButton} from "@material-ui/lab";
import { useStoreContext } from "../../app/context/StoreContext";
import { currencyFormat } from "../../app/util/util";


interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {

  const [loading, setLoading] = useState(false);
  const {setBasket} = useStoreContext();

  function handleAddItem(productId: number){
    setLoading(true);
    agent.Basket.addItem(productId)
        .catch(error => console.log(error))
        .then(basket => setBasket(basket))
        .finally(() => setLoading(false));
  }

  return (
    <Card>
      <CardHeader 
       avatar={
        <Avatar sx={{bgcolor: 'secondary.main'}}>
            {product.name.charAt(0).toUpperCase()}
        </Avatar>
       }
       title={product.name}
       titleTypographyProps={{
        sx: {fontWeight: 'bold', color: 'primary.main'}
       }}
      />
      <CardMedia
        sx={{ height: 150, backgroundSize: 'contain', bgcolor: 'primary.main' }}
        image={product.pictureUrl}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom color='secondary' variant="h5">
          {currencyFormat(product.price)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <LoadingButton loading={loading} onClick={() => handleAddItem(product.id) } size="small">ADD TO CART</LoadingButton>
        <Button component={Link} to={`/catalog/${product.id}`} size="small">VIEW</Button>
      </CardActions>
    </Card>
  );
}
