import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-blue-600">
            BankPro
          </Link>
          <nav className="space-x-4">
            <Link
              to="/auth/login"
              className="text-gray-600 hover:text-blue-600"
            >
              Login
            </Link>
            <Link
              to="/auth/signup"
              className="text-gray-600 hover:text-blue-600"
            >
              Signup
            </Link>
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>
    </div>
  );
};

export default MainLayout;
