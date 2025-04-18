"use client"

import { useState } from "react"
import { DashboardLayout } from "../../components/layouts/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { TransactionItem } from "../../components/ui/transaction-item"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Link } from "react-router-dom"

// Mock data
const transactions = [
  {
    id: "tx1",
    type: "debit" as const,
    status: "completed" as const,
    amount: 120.5,
    recipient: "Amazon",
    date: new Date(2023, 3, 15),
    description: "Online Shopping",
  },
  {
    id: "tx2",
    type: "credit" as const,
    status: "completed" as const,
    amount: 2500.0,
    sender: "Employer Inc.",
    date: new Date(2023, 3, 10),
    description: "Salary",
  },
  {
    id: "tx3",
    type: "transfer" as const,
    status: "pending" as const,
    amount: 500.0,
    recipient: "Savings Account",
    date: new Date(2023, 3, 5),
    description: "Monthly Transfer",
  },
  {
    id: "tx4",
    type: "debit" as const,
    status: "failed" as const,
    amount: 89.99,
    recipient: "Streaming Service",
    date: new Date(2023, 3, 2),
    description: "Subscription",
  },
  {
    id: "tx5",
    type: "debit" as const,
    status: "completed" as const,
    amount: 45.0,
    recipient: "Grocery Store",
    date: new Date(2023, 3, 1),
    description: "Groceries",
  },
  {
    id: "tx6",
    type: "credit" as const,
    status: "completed" as const,
    amount: 150.0,
    sender: "John Smith",
    date: new Date(2023, 2, 28),
    description: "Payment",
  },
  {
    id: "tx7",
    type: "transfer" as const,
    status: "completed" as const,
    amount: 1000.0,
    recipient: "Investment Account",
    date: new Date(2023, 2, 25),
    description: "Investment Transfer",
  },
]

function Transactions() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filter, setFilter] = useState("all")

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch =
      transaction.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.recipient?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.sender?.toLowerCase().includes(searchTerm.toLowerCase())

    if (filter === "all") return matchesSearch
    if (filter === "credit") return transaction.type === "credit" && matchesSearch
    if (filter === "debit") return transaction.type === "debit" && matchesSearch
    if (filter === "transfer") return transaction.type === "transfer" && matchesSearch
    if (filter === "pending") return transaction.status === "pending" && matchesSearch
    if (filter === "completed") return transaction.status === "completed" && matchesSearch
    if (filter === "failed") return transaction.status === "failed" && matchesSearch

    return matchesSearch
  })

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Transactions</h1>
        <p className="text-gray-600">View and manage your transaction history</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <CardTitle>Transaction History</CardTitle>
            <div className="flex space-x-2">
              <Link to="/all-transactions">
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </Link>
              <Button variant="primary" size="sm">
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-6 space-y-4">
            <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
              <Input
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="md:w-80"
              />
              <div className="flex flex-wrap gap-2">
                <Button variant={filter === "all" ? "primary" : "outline"} size="sm" onClick={() => setFilter("all")}>
                  All
                </Button>
                <Button
                  variant={filter === "credit" ? "primary" : "outline"}
                  size="sm"
                  onClick={() => setFilter("credit")}
                >
                  Income
                </Button>
                <Button
                  variant={filter === "debit" ? "primary" : "outline"}
                  size="sm"
                  onClick={() => setFilter("debit")}
                >
                  Expenses
                </Button>
                <Button
                  variant={filter === "transfer" ? "primary" : "outline"}
                  size="sm"
                  onClick={() => setFilter("transfer")}
                >
                  Transfers
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={filter === "completed" ? "primary" : "outline"}
                size="sm"
                onClick={() => setFilter("completed")}
              >
                Completed
              </Button>
              <Button
                variant={filter === "pending" ? "primary" : "outline"}
                size="sm"
                onClick={() => setFilter("pending")}
              >
                Pending
              </Button>
              <Button
                variant={filter === "failed" ? "primary" : "outline"}
                size="sm"
                onClick={() => setFilter("failed")}
              >
                Failed
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((transaction) => <TransactionItem key={transaction.id} {...transaction} />)
            ) : (
              <div className="flex h-40 flex-col items-center justify-center rounded-lg border border-dashed p-4 text-center">
                <p className="text-lg font-medium text-gray-600">No transactions found</p>
                <p className="text-sm text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  )
}

export default Transactions
