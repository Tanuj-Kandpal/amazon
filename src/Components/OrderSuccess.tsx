import { Button } from "./components/Button";

interface OrderSuccessProps {
  orderNumber: string;
  estimatedDelivery: string;
  onViewOrder: () => void;
  onReturnHome: () => void;
}
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}): ButtonProps {
  const baseStyles =
    "px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors";
  const variantStyles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
      : "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-blue-500";
  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default function OrderSuccess({
  orderNumber,
  estimatedDelivery,
  onViewOrder,
  onReturnHome,
}: OrderSuccessProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg
                className="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Order Placed Successfully!
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Thank you for your purchase. Your order is confirmed.
            </p>
          </div>

          <div className="mt-8">
            <div className="text-sm text-gray-600">
              <p className="font-medium">Order number:</p>
              <p>{orderNumber}</p>
            </div>
            <div className="mt-3 text-sm text-gray-600">
              <p className="font-medium">Estimated delivery:</p>
              <p>{estimatedDelivery}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col space-y-4">
            <Button
              onClick={onViewOrder}
              className="w-full flex justify-center items-center"
            >
              <svg
                className="mr-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
              View Order
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
            <Button variant="outline" onClick={onReturnHome} className="w-full">
              Return to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
