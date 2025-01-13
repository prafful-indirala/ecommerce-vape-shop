"use client";

import Link from "next/link";

export default function VerificationError() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <div className="rounded-full h-16 w-16 flex items-center justify-center bg-red-100">
            <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="mt-6 text-2xl font-bold text-gray-900">
            Verification Failed
          </h2>
          <p className="mt-2 text-center text-gray-600">
            We couldn't verify your email. This might happen if:
          </p>
          <ul className="mt-4 text-sm text-gray-600 list-disc list-inside">
            <li>The verification link has expired</li>
            <li>The link was already used</li>
            <li>The link is invalid</li>
          </ul>
          <div className="mt-8 flex flex-col items-center space-y-4">
            <Link
              href="/auth/register"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Try Registering Again
            </Link>
            <Link
              href="/auth/signin"
              className="text-sm text-indigo-600 hover:text-indigo-500"
            >
              Return to Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
