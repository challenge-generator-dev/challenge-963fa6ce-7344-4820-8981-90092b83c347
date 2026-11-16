import React from 'react';
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';
import { ProductResponseDto } from '../../services/product.service';

interface ProductCardProps {
  product: ProductResponseDto;
  onEdit: (product: ProductResponseDto) => void;
  onDelete: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onEdit, onDelete }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          Precio: ${product.price.toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Categoría: {product.category}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onEdit(product)}>Editar</Button>
        <Button size="small" color="error" onClick={() => onDelete(product.id)}>Eliminar</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;