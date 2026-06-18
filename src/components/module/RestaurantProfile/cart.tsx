"use client"
import { CartItem } from "@/components/Types/api";
import { cn } from "@/lib/utils";
import { ChevronRight, CircleDollarSign, Minus, Plus, ShoppingBag, ShoppingCart, X } from "lucide-react";
import Image from "next/image";

 
export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onIncrease,
  onDecrease,
  onRemove,
}: {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onRemove: (id: number) => void;
}) {
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const deliveryFee = items.length > 0 ? Math.max(...items.map((i) => i.deliveryFee)) : 0;
  const total = subtotal + deliveryFee;
 
  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/40 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />
 
      {/* Drawer */}
      <div
        className={cn(
          "fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col bg-white dark:bg-[#1A1E1F] shadow-2xl",
          "transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-100 dark:border-[#273036] px-5 py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-[#3aad65]" />
            <h2 style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-lg font-bold text-neutral-300">
              Your Cart
            </h2>
            {items.length > 0 && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#3aad65] text-xs font-bold text-white">
                {items.reduce((s, i) => s + i.quantity, 0)}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-neutral-100 transition-colors"
            aria-label="Close cart"
          >
            <X className="h-4 w-4 text-[#3aad65]" />
          </button>
        </div>
 
        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-3 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100">
                <ShoppingCart className="h-8 w-8 text-[#3aad65]" />
              </div>
              <p className="text-sm text-neutral-400">Your cart is empty.<br/>Add some delicious food!</p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 rounded-xl border border-neutral-100 bg-neutral-50 dark:bg-[#212627] dark:border-[#273036] p-3"
                >
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-neutral-400 truncate"
                       >
                      {item.name}
                    </p>
                    <div className="flex items-center gap-1">
                      <CircleDollarSign></CircleDollarSign>
                       <p className="text-sm text-neutral-400 font-semibold">
                      {(item.price * item.quantity).toFixed(0)} TK
                    </p>
                    </div>
                   
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => item.quantity === 1 ? onRemove(item.id) : onDecrease(item.id)}
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-300 dark:border-[#273066] hover:bg-green-900 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="w-5 text-center text-sm font-bold">{item.quantity}</span>
                    <button
                      onClick={() => onIncrease(item.id)}
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-[#3aad65] text-white hover:bg-green-800 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
 
        {/* Footer Summary */}
        {items.length > 0 && (
          <div className="border-t border-neutral-100 dark:border-[#273036] px-5 py-4 space-y-3">
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between text-neutral-400">
                <span>Subtotal</span>
                <span>{subtotal.toFixed(0)} TK</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Delivery fee</span>
                <span>{deliveryFee.toFixed(0)} TK</span>
              </div>
              <div className="flex justify-between font-bold text-[#3aad65] border-t border-neutral-100 pt-2">
                <span>Total</span>
                <span className="text-[#3aad65]">{total.toFixed(0)} TK</span>
              </div>
            </div>
            <button
              className={cn(
                "flex w-full items-center justify-between rounded-xl bg-[#3aad65] px-4 py-3",
                "text-white font-semibold transition-all duration-200 hover:bg-green-800 active:scale-[0.98]"
              )}
            >
              <span>Place Order</span>
              <div className="flex items-center gap-1">
                <span>৳{total.toFixed(0)}</span>
                <ChevronRight className="h-4 w-4" />
              </div>
            </button>
          </div>
        )}
      </div>
    </>
  );
}