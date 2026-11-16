import { useState, useEffect, useCallback } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  FormHelperText,
  CircularProgress,
  Alert,
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ProductResponseDto, CreateProductDto, UpdateProductDto, productService as ProductService } from '../../services/product.service';

interface ProductFormProps {
  product?: ProductResponseDto | null;
  onSave?: () => void;
  onCancel?: () => void;
}

const CATEGORIES = [
  'Electrónica',
  'Ropa',
  'Alimentos',
  'Hogar',
  'Deportes',
  'Libros',
  'Juguetes',
  'Otros',
];

const initialFormState: CreateProductDto = {
  name: '',
  description: '',
  price: 0,
  category: '',
};

export function ProductForm({ product, onSave, onCancel }: ProductFormProps) {
  const [formData, setFormData] = useState<CreateProductDto>(initialFormState);
  const [errors, setErrors] = useState<Partial<Record<keyof CreateProductDto, string>>>({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const isEditing = !!product;

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
      });
    } else {
      setFormData(initialFormState);
    }
  }, [product]);

  const validateForm = useCallback((): boolean => {
    const newErrors: Partial<Record<keyof CreateProductDto, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    } else if (formData.name.length < 3) {
      newErrors.name = 'El nombre debe tener al menos 3 caracteres';
    } else if (formData.name.length > 100) {
      newErrors.name = 'El nombre no puede exceder 100 caracteres';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'La descripción es requerida';
    } else if (formData.description.length < 10) {
      newErrors.description = 'La descripción debe tener al menos 10 caracteres';
    }

    if (formData.price <= 0) {
      newErrors.price = 'El precio debe ser mayor a 0';
    } else if (formData.price > 999999.99) {
      newErrors.price = 'El precio no puede exceder 999,999.99';
    }

    if (!formData.category) {
      newErrors.category = 'La categoría es requerida';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleChange = useCallback(
    (field: keyof CreateProductDto) => (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { value: string } }
    ) => {
      const value = event.target.value;
      setFormData((prev) => ({ ...prev, [field]: field === 'price' ? Number(value) : value }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    },
    [errors]
  );

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();
      setSubmitError(null);

      if (!validateForm()) {
        return;
      }

      setLoading(true);
      try {
        if (isEditing && product) {
          const updateData: UpdateProductDto = {
            name: formData.name,
            description: formData.description,
            price: formData.price,
            category: formData.category,
          };
          await ProductService.updateProduct(product.id, updateData);
        } else {
          await ProductService.createProduct(formData);
        }
        onSave?.();
      } catch (err) {
        setSubmitError(err instanceof Error ? err.message : 'Error al guardar el producto');
        console.error('Error saving product:', err);
      } finally {
        setLoading(false);
      }
    },
    [formData, isEditing, product, validateForm, onSave]
  );

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 600, mx: 'auto', p: 3 }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2 }}>
        {onCancel && (
          <Button
            variant="outlined"
            color="secondary"
            onClick={onCancel}
            startIcon={<ArrowBackIcon />}
          >
            Volver
          </Button>
        )}
        <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
          {isEditing ? 'Editar Producto' : 'Nuevo Producto'}
        </Typography>
      </Box>

      {submitError && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {submitError}
        </Alert>
      )}

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
        <TextField
          label="Nombre del Producto"
          value={formData.name}
          onChange={handleChange('name')}
          error={!!errors.name}
          helperText={errors.name}
          fullWidth
          required
          inputProps={{ 'aria-label': 'Nombre del producto' }}
        />

        <TextField
          label="Descripción"
          value={formData.description}
          onChange={handleChange('description')}
          error={!!errors.description}
          helperText={errors.description}
          fullWidth
          required
          multiline
          rows={4}
          inputProps={{ 'aria-label': 'Descripción del producto' }}
        />

        <TextField
          label="Precio"
          type="number"
          value={formData.price}
          onChange={handleChange('price')}
          error={!!errors.price}
          helperText={errors.price}
          fullWidth
          required
          inputProps={{ 
            'aria-label': 'Precio del producto',
            min: 0,
            step: 0.01,
          }}
          InputProps={{
            startAdornment: <Box sx={{ mr: 0.5 }}>$</Box>,
          }}
        />

        <FormControl fullWidth error={!!errors.category} required>
          <InputLabel id="category-label">Categoría</InputLabel>
          <Select
            labelId="category-label"
            value={formData.category}
            label="Categoría"
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prev) => ({ ...prev, category: value }));
              if (errors.category) {
                setErrors((prev) => ({ ...prev, category: undefined }));
              }
            }}
            aria-label="Categoría del producto"
          >
            {CATEGORIES.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </Select>
          {errors.category && <FormHelperText>{errors.category}</FormHelperText>}
        </FormControl>

        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            disabled={loading}
            startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SaveIcon />}
            sx={{ flex: 1 }}
          >
            {loading ? 'Guardando...' : isEditing ? 'Actualizar' : 'Crear'}
          </Button>
          {onCancel && (
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              onClick={onCancel}
              disabled={loading}
            >
              Cancelar
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
}