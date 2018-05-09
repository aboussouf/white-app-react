import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ProductDetails from 'components/ProductChoiceComponent/ProductDetails';

const ProductChoiceComponent = ({ products, productSelectionChange, selectedProductId }) => {
  const selectedProduct = products &&
  selectedProductId &&
  products.find((product) => product.id === selectedProductId);

  return (
    <div>
      <SelectField
        floatingLabelText="Sélectionner un produit"
        onChange={productSelectionChange}
        value={selectedProductId}
        fullWidth
      >
        {products &&
          products.map((product) =>
            <MenuItem key={`product_${product.id}`} value={product.id} primaryText={product.name} />
          )
          }
      </SelectField>
      {selectedProduct && selectedProduct.neededFiles &&
        <ProductDetails
          neededFiles={selectedProduct.neededFiles}
          description={selectedProduct.description}
          name={selectedProduct.name}
        />
      }
    </div>
  );
};


ProductChoiceComponent.propTypes = {
  products: PropTypes.array.isRequired,
  productSelectionChange: PropTypes.func.isRequired,
  selectedProductId: PropTypes.number,
};

export default ProductChoiceComponent;
