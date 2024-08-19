import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function calculateDiscountedPrice(price, discount) {
    if (discount < 0 || discount > 100) {
        throw new Error("Discount must be between 0 and 100");
    }
    const discountAmount = (price * discount) / 100;
    const finalPrice = price - discountAmount;
    return finalPrice;
}