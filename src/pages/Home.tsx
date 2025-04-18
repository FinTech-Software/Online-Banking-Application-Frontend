import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-blue-700 md:text-5xl">
                Simple & Secure Banking
              </h1>
              <p className="text-lg text-gray-600">
                A clean, minimal banking experience designed with modern tech.
              </p>
              <div className="flex gap-4">
                <Link to="/auth/signup">
                  <Button size="lg">Get Started</Button>
                </Link>
                <Link to="/auth/login">
                  <Button variant="outline" size="lg">
                    Login
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative mx-auto h-[300px] w-full max-w-sm overflow-hidden rounded-xl bg-white shadow-lg">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="App Interface"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
            Features
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Secure Access</h3>
                <p className="text-gray-600">
                  Data encryption and multi-layer security keep your info safe.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Easy Transfers</h3>
                <p className="text-gray-600">
                  Send and receive money effortlessly with our smooth interface.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.5 4.5 0 00-2.676.662C6 6.234 5.5 7 5.5 8s.5 1.766 1.324 2.246c.48.32 1.054.545 1.676.662v1.94c-.39-.127-.68-.317-.843-.503a1 1 0 10-1.51 1.309c.562.65 1.412 1.077 2.353 1.253V15a1 1 0 102 0v-.093a4.5 4.5 0 002.676-.662C13.5 13.766 14 13 14 12s-.5-1.766-1.324-2.246A4.5 4.5 0 0011 9.093V7.15c.39.127.68.318.843.504a1 1 0 001.511-1.309c-.563-.65-1.413-1.077-2.354-1.254V5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Spending Insights</h3>
                <p className="text-gray-600">
                  Visualize your budget and track expenses in real-time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
