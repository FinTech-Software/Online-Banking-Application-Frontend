import { useState } from "react";
import { DashboardLayout } from "../components/layouts/DashboardLayout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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

const recentRecipients = [
  {
    id: "rec1",
    name: "John Smith",
    accountNumber: "**** 9876",
    bankName: "Chase Bank",
  },
  {
    id: "rec2",
    name: "Jane Doe",
    accountNumber: "**** 5432",
    bankName: "Bank of America",
  },
  {
    id: "rec3",
    name: "Savings Account",
    accountNumber: "**** 5678",
    bankName: "Internal Transfer",
  },
];

function SendMoney() {
  const [step, setStep] = useState(1);
  const [selectedAccount, setSelectedAccount] = useState(accounts[0]);
  const [selectedRecipient, setSelectedRecipient] = useState<
    (typeof recentRecipients)[0] | null
  >(null);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [newRecipient, setNewRecipient] = useState({
    name: "",
    accountNumber: "",
    bankName: "",
    email: "",
  });

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and a single decimal point
    if (/^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  const handleNewRecipientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewRecipient({ ...newRecipient, [name]: value });
  };

  const handleContinue = () => {
    if (step === 1) {
      // Validate recipient selection
      if (!selectedRecipient && !newRecipient.name) {
        alert("Please select or add a recipient");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      // Validate amount
      if (!amount || parseFloat(amount) <= 0) {
        alert("Please enter a valid amount");
        return;
      }
      if (parseFloat(amount) > selectedAccount.balance) {
        alert("Insufficient funds");
        return;
      }
      setStep(3);
    } else if (step === 3) {
      // Process transfer (would be an API call in a real app)
      alert("Money sent successfully!");
      // Reset form
      setStep(1);
      setSelectedRecipient(null);
      setAmount("");
      setDescription("");
      setNewRecipient({
        name: "",
        accountNumber: "",
        bankName: "",
        email: "",
      });
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const isStepComplete = () => {
    if (step === 1) {
      return (
        selectedRecipient ||
        (newRecipient.name &&
          newRecipient.accountNumber &&
          newRecipient.bankName)
      );
    }
    if (step === 2) {
      return (
        amount &&
        parseFloat(amount) > 0 &&
        parseFloat(amount) <= selectedAccount.balance
      );
    }
    return true;
  };

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Send Money</h1>
        <p className="text-gray-600">
          Transfer funds to another account or recipient
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Transfer Details</CardTitle>
              <CardDescription>
                {step === 1
                  ? "Select or add a recipient"
                  : step === 2
                  ? "Enter the amount and description"
                  : "Review and confirm your transfer"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-4 text-lg font-medium">
                      Recent Recipients
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {recentRecipients.map((recipient) => (
                        <div
                          key={recipient.id}
                          className={`cursor-pointer rounded-lg border p-4 transition-colors ${
                            selectedRecipient?.id === recipient.id
                              ? "border-blue-500 bg-blue-50"
                              : "hover:bg-gray-50"
                          }`}
                          onClick={() => setSelectedRecipient(recipient)}
                        >
                          <p className="font-medium">{recipient.name}</p>
                          <p className="text-sm text-gray-500">
                            {recipient.accountNumber}
                          </p>
                          <p className="text-sm text-gray-500">
                            {recipient.bankName}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-4 text-lg font-medium">
                      Add New Recipient
                    </h3>
                    <div className="space-y-4">
                      <Input
                        label="Recipient Name"
                        name="name"
                        value={newRecipient.name}
                        onChange={handleNewRecipientChange}
                        placeholder="John Doe"
                      />
                      <Input
                        label="Account Number"
                        name="accountNumber"
                        value={newRecipient.accountNumber}
                        onChange={handleNewRecipientChange}
                        placeholder="XXXX XXXX XXXX XXXX"
                      />
                      <Input
                        label="Bank Name"
                        name="bankName"
                        value={newRecipient.bankName}
                        onChange={handleNewRecipientChange}
                        placeholder="Bank of America"
                      />
                      <Input
                        label="Email (Optional)"
                        name="email"
                        type="email"
                        value={newRecipient.email}
                        onChange={handleNewRecipientChange}
                        placeholder="john.doe@example.com"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-4 text-lg font-medium">
                      Transfer Amount
                    </h3>
                    <div className="space-y-4">
                      <Input
                        label="Amount"
                        type="text"
                        value={amount}
                        onChange={handleAmountChange}
                        placeholder="0.00"
                        icon={<span className="text-gray-500">$</span>}
                      />
                      <p className="text-sm text-gray-500">
                        Available Balance:{" "}
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: selectedAccount.currency,
                        }).format(selectedAccount.balance)}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-4 text-lg font-medium">
                      Description (Optional)
                    </h3>
                    <Input
                      label="Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Rent payment, Gift, etc."
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="mb-4 text-lg font-medium">
                    Review Transfer Details
                  </h3>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="mb-4 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">From</p>
                        <p className="font-medium">{selectedAccount.name}</p>
                        <p className="text-sm text-gray-500">
                          {selectedAccount.accountNumber}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">To</p>
                        <p className="font-medium">
                          {selectedRecipient
                            ? selectedRecipient.name
                            : newRecipient.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {selectedRecipient
                            ? selectedRecipient.accountNumber
                            : newRecipient.accountNumber}
                        </p>
                        <p className="text-sm text-gray-500">
                          {selectedRecipient
                            ? selectedRecipient.bankName
                            : newRecipient.bankName}
                        </p>
                      </div>
                    </div>
                    <div className="mb-4 border-t border-gray-200 pt-4">
                      <div className="flex justify-between">
                        <p className="font-medium">Amount</p>
                        <p className="font-bold">
                          {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: selectedAccount.currency,
                          }).format(parseFloat(amount))}
                        </p>
                      </div>
                      {description && (
                        <div className="mt-2 flex justify-between">
                          <p className="font-medium">Description</p>
                          <p>{description}</p>
                        </div>
                      )}
                    </div>
                    <div className="rounded-md bg-blue-50 p-4 text-blue-800">
                      <p className="text-sm">
                        By clicking "Send Money", you authorize this transfer
                        and agree to our terms of service.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              {step > 1 ? (
                <Button variant="outline" onClick={handleBack}>
                  Back
                </Button>
              ) : (
                <div></div>
              )}
              <Button onClick={handleContinue} disabled={!isStepComplete()}>
                {step === 3 ? "Send Money" : "Continue"}
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>From Account</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {accounts.map((account) => (
                  <div
                    key={account.id}
                    className={`cursor-pointer rounded-lg border p-4 transition-colors ${
                      selectedAccount.id === account.id
                        ? "border-blue-500 bg-blue-50"
                        : "hover:bg-gray-50"
                    }`}
                    onClick={() => setSelectedAccount(account)}
                  >
                    <p className="font-medium">{account.name}</p>
                    <p className="text-sm text-gray-500">
                      {account.accountNumber}
                    </p>
                    <p className="mt-2 text-lg font-bold">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: account.currency,
                      }).format(account.balance)}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Transfer Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-5 w-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Double-check recipient details before confirming
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-5 w-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Transfers between accounts are usually instant
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-5 w-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  External transfers may take 1-3 business days
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-5 w-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Save recipients for faster transfers in the future
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default SendMoney;
