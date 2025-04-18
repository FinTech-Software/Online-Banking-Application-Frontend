import { cn } from "../../utils/cn";

export interface TransactionProps {
  id: string;
  type: "credit" | "debit" | "transfer";
  status: "completed" | "pending" | "failed";
  amount: number;
  currency?: string;
  recipient?: string;
  sender?: string;
  date: Date;
  description?: string;
  className?: string;
}

export function TransactionItem({
  type,
  status,
  amount,
  currency = "USD",
  recipient,
  sender,
  date,
  description,
  className,
}: TransactionProps) {
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);

  const statusColors = {
    completed: "bg-green-100 text-green-800",
    pending: "bg-yellow-100 text-yellow-800",
    failed: "bg-red-100 text-red-800",
  };

  const typeColors = {
    credit: "text-green-600",
    debit: "text-red-600",
    transfer: "text-blue-600",
  };

  const typeIcons = {
    credit: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-green-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
          clipRule="evenodd"
        />
      </svg>
    ),
    debit: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-red-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
          clipRule="evenodd"
        />
      </svg>
    ),
    transfer: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-blue-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
          clipRule="evenodd"
        />
      </svg>
    ),
  };

  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-lg border p-4",
        className
      )}
    >
      <div className="flex items-center space-x-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
          {typeIcons[type]}
        </div>
        <div>
          <p className="font-medium">
            {type === "credit"
              ? `Received from ${sender}`
              : type === "debit"
              ? `Paid to ${recipient}`
              : `Transfer to ${recipient}`}
          </p>
          <p className="text-sm text-gray-500">
            {description || "Transaction"}
          </p>
          <p className="text-xs text-gray-400">{formattedDate}</p>
        </div>
      </div>
      <div className="text-right">
        <p className={cn("font-semibold", typeColors[type])}>
          {type === "credit" ? "+" : "-"}
          {formattedAmount}
        </p>
        <span
          className={cn(
            "mt-1 inline-block rounded-full px-2 py-0.5 text-xs font-medium",
            statusColors[status]
          )}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
    </div>
  );
}
