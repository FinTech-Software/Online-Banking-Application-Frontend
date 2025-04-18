import { useState } from "react";
import { DashboardLayout } from "../components/layouts/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TransactionItem } from "@/components/ui/transaction-item";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Mock data
const accounts = [
  {
    id: "acc1",
    name: "Main Account",
    balance: 5280.42,
    currency: "USD",
    accountNumber: "**** 1234",
  },
  {
    id: "acc2",
    name: "Savings",
    balance: 12750.89,
    currency: "USD",
    accountNumber: "**** 5678",
  },
];

const recentTransactions = [
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
];

function Dashboard() {
  const [activeAccount, setActiveAccount] = useState(accounts[0]);

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back, John Doe</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Account Balance Card */}
        <Card className="col-span-full md:col-span-1">
          <CardHeader>
            <CardTitle>Account Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {accounts.map((account) => (
                <div
                  key={account.id}
                  className={`cursor-pointer rounded-lg border p-4 transition-colors ${
                    activeAccount.id === account.id
                      ? "border-blue-500 bg-blue-50"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveAccount(account)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{account.name}</p>
                      <p className="text-sm text-gray-500">
                        {account.accountNumber}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: account.currency,
                        }).format(account.balance)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions Card */}
        <Card className="col-span-full md:col-span-1">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Link to="/send-money">
                <Button className="w-full justify-start" variant="outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8z" />
                    <path d="M12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
                  </svg>
                  Send Money
                </Button>
              </Link>
              <Link to="/transactions">
                <Button className="w-full justify-start" variant="outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Transactions
                </Button>
              </Link>
              <Button className="w-full justify-start" variant="outline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                Pay Bills
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
                  <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" />
                </svg>
                Deposit
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Card */}
        <Card className="col-span-full md:col-span-1">
          <CardHeader>
            <CardTitle>Monthly Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-sm text-gray-500">Income</p>
                <p className="text-2xl font-bold text-green-600">$3,240.50</p>
                <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                  <div className="h-2 w-3/4 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-sm text-gray-500">Expenses</p>
                <p className="text-2xl font-bold text-red-600">$2,125.75</p>
                <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                  <div className="h-2 w-1/2 rounded-full bg-red-500"></div>
                </div>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-sm text-gray-500">Savings</p>
                <p className="text-2xl font-bold text-blue-600">$1,114.75</p>
                <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                  <div className="h-2 w-1/4 rounded-full bg-blue-500"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions */}
      <div className="mt-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Recent Transactions</h2>
          <Link to="/transactions">
            <Button variant="link">View All</Button>
          </Link>
        </div>
        <div className="space-y-4">
          {recentTransactions.map((transaction) => (
            <TransactionItem key={transaction.id} {...transaction} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
