import type React from "react"
// User types
export interface User {
    id: string
    username: string
    email: string
    firstName?: string
    lastName?: string
}

// Auth types
export interface AuthContextType {
    user: User | null
    isAuthenticated: boolean
    isLoading: boolean
    login: (username: string, password: string) => Promise<void>
    signup: (username: string, email: string, password: string, phone: string) => Promise<void>
    logout: () => void
}

// Transaction types
export type TransactionType = "credit" | "debit" | "transfer"
export type TransactionStatus = "completed" | "pending" | "failed"

export interface Transaction {
    id: string
    type: TransactionType
    status: TransactionStatus
    amount: number
    currency?: string
    recipient?: string
    sender?: string
    date: Date
    description?: string
    className?: string
}

// Account types
export interface Account {
    id: string
    name: string
    balance: number
    currency: string
    accountNumber: string
}

// Recipient types
export interface Recipient {
    id: string
    name: string
    accountNumber: string
    bankName: string
    email?: string
}

// Theme types
export interface ThemeContextType {
    theme: string
    toggleTheme: () => void
}

export interface ThemeProviderProps {
    children: React.ReactNode
    defaultTheme?: string
    storageKey?: string
}

// Component props
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
    icon?: React.ReactNode
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "primary" | "outline" | "ghost" | "link"
    size?: "default" | "sm" | "lg"
    isLoading?: boolean
    children: React.ReactNode
}

export interface CardProps {
    className?: string
    children: React.ReactNode
}

export interface CardHeaderProps {
    className?: string
    children: React.ReactNode
}

export interface CardTitleProps {
    className?: string
    children: React.ReactNode
}

export interface CardDescriptionProps {
    className?: string
    children: React.ReactNode
}

export interface CardContentProps {
    className?: string
    children: React.ReactNode
}

export interface CardFooterProps {
    className?: string
    children: React.ReactNode
}

export interface DashboardLayoutProps {
    children: React.ReactNode
}
