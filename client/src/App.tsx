import { Routes, Route, Navigate } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import { ProductList } from './features/products/ProductList';
import { ProductForm } from './features/products/ProductForm';

function App() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 4 }}>
          Gestión de Productos
        </Typography>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/new" element={<ProductForm />} />
          <Route path="/products/:id/edit" element={<ProductForm />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default App;