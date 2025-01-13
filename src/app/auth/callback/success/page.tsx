"use client";

import Link from "next/link";

export default function VerificationSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <div className="rounded-full h-16 w-16 flex items-center justify-center bg-green-100">
            <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="mt-6 text-2xl font-bold text-gray-900">
            Email Verified Successfully!
          </h2>
          <p className="mt-2 text-center text-gray-600">
            Thank you for verifying your email. You can now sign in to your account.
          </p>
          <div className="mt-8 flex flex-col items-center space-y-4">
            <Link
              href="/auth/signin"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign In to Your Account
            </Link>
            <span className="text-sm text-gray-500">
              Get started with your verified account
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
