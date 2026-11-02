import { STORE_INFO, type Product } from '@/data/vastrangData';

type ProductInquiryOptions = {
  color?: string;
  size?: string;
  quantity?: number;
};

export function getProductWhatsAppHref(
  product: Product,
  options: ProductInquiryOptions = {},
) {
  const details = [
    'Hi, I am interested in this product:',
    product.title,
    `Price: ${product.salePrice}`,
    options.color ? `Color: ${options.color}` : undefined,
    options.size ? `Size: ${options.size}` : undefined,
    options.quantity ? `Quantity: ${options.quantity}` : undefined,
    `Product image: ${product.image}`,
  ].filter(Boolean);

  return `https://wa.me/${STORE_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(details.join('\n'))}`;
}
