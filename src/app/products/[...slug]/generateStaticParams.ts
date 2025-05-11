// app/products/[id]/generateStaticParams.ts
import { singleProduct } from '../../../constants'; // Import sản phẩm từ constants

export const generateStaticParams = () => {
  // Trả về các tham số 'id' của các biến thể sản phẩm (varients)
  return singleProduct.varients.map((variant) => ({
    id: variant.id.toString(), // Đảm bảo id là string
  }));
};
