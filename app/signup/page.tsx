'use client';
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Sign Up Page | Free Next.js Template for Startup and SaaS",
//   description: "This is Sign Up Page for Startup Nextjs Template",
//   // other metadata
// };

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    terms: false,
  });

  const router = useRouter(); // Initialize useRouter

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/create_user/', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        
      });
      console.log(formData)
      console.log('User created successfully:', response.data);
      router.push('/'); // Redirect to homepage on successful user creation
    } catch (error) {
      console.error('Error creating user:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <>
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="shadow-three mx-auto max-w-[500px] rounded bg-white px-6 py-10 dark:bg-dark sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Create your account
                </h3>
                <p className="mb-11 text-center text-base font-medium text-body-color">
                  It’s totally free and super easy
                </p>
                <button className="border-stroke dark:text-body-color-dark dark:shadow-two mb-6 flex w-full items-center justify-center rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none">
                  <span className="mr-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_95:967)">
                        <path
                          d="M20.0001 10.2216C20.0122 9.53416 19.9397 8.84776 19.7844 8.17725H10.2042V11.8883H15.8277C15.7211 12.539 15.4814 13.1618 15.1229 13.7194C14.7644 14.2769 14.2946 14.7577 13.7416 15.1327L13.722 15.257L16.7512 17.5567L16.961 17.5772C18.8883 15.8328 19.9997 13.266 19.9997 10.2216"
                          fill="#4285F4"
                        />
                        <path
                          d="M10.2042 20.0001C12.9592 20.0001 15.2721 19.1111 16.9616 17.5778L13.7416 15.1332C12.88 15.7223 11.7235 16.1334 10.2042 16.1334C8.91385 16.126 7.65863 15.7206 6.61663 14.9747C5.57464 14.2287 4.79879 13.1802 4.39915 11.9778L4.27957 11.9878L1.12973 14.3766L1.08856 14.4888C1.93689 16.1457 3.23879 17.5387 4.84869 18.512C6.45859 19.4852 8.31301 20.0005 10.2046 20.0001"
                          fill="#34A853"
                        />
                        <path
                          d="M4.39911 11.9777C4.17592 11.3411 4.06075 10.673 4.05819 9.99996C4.0623 9.32799 4.17322 8.66075 4.38696 8.02225L4.38127 7.88968L1.19282 5.4624L1.08852 5.51101C0.372885 6.90343 0.00012207 8.4408 0.00012207 9.99987C0.00012207 11.5589 0.372885 13.0963 1.08852 14.4887L4.39911 11.9777Z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M10.2042 3.86663C11.6663 3.84438 13.0804 4.37803 14.1498 5.35558L17.0296 2.59996C15.1826 0.901848 12.7366 -0.0298855 10.2042 -3.6784e-05C8.3126 -0.000477834 6.45819 0.514732 4.8483 1.48798C3.2384 2.46124 1.93649 3.85416 1.08813 5.51101L4.38775 8.02225C4.79132 6.82005 5.56974 5.77231 6.61327 5.02675C7.6568 4.28118 8.91279 3.87541 10.2042 3.86663Z"
                          fill="#EB4335"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_95:967">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Sign in with Google
                </button>

                <button className="border-stroke dark:text-body-color-dark dark:shadow-two mb-6 flex w-full items-center justify-center rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none">
                  <span className="mr-3">
                    <svg
                      fill="currentColor"
                      width="22"
                      height="22"
                      viewBox="0 0 64 64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M32 1.7998C15 1.7998 1 15.5998 1 32.7998C1 46.3998 9.9 57.9998 22.3 62.1998C23.9 62.4998 24.4 61.4998 24.4 60.7998C24.4 60.0998 24.4 58.0998 24.3 55.3998C15.7 57.1998 13.8 51.6998 13.8 51.6998C12.3 47.6998 10.2 46.6998 10.2 46.6998C7.5 44.9998 10.4 45.0998 10.4 45.0998C13.4 45.2998 14.9 48.1998 14.9 48.1998C17.6 52.7998 21.8 51.3998 23.3 50.6998C23.6 48.5998 24.5 47.2998 25.4 46.5998C18.5 45.8998 11.3 43.0998 11.3 30.7998C11.3 27.2998 12.5 24.5998 14.5 22.5998C14.1 21.8998 13 18.9998 14.9 14.5998C14.9 14.5998 17.4 13.8998 24.3 18.1998C26.7 17.4998 29.3 17.0998 31.9 17.0998C34.5 17.0998 37.1 17.4998 39.5 18.1998C46.3 13.7998 48.8 14.5998 48.8 14.5998C50.7 18.9998 49.6 21.8998 49.2 22.5998C51.3 24.5998 52.5 27.1998 52.5 30.7998C52.5 43.1998 45.3 45.8998 38.4 46.5998C39.5 47.3998 40.5 49.3998 40.5 52.2998C40.5 56.3998 40.4 59.7998 40.4 60.7998C40.4 61.4998 40.9 62.5998 42.5 62.1998C54.9 57.9998 63.8 46.3998 63.8 32.7998C63.8 15.5998 49.7 1.7998 32 1.7998Z"></path>
                    </svg>
                  </span>
                  Sign in with Github
                </button>

                <div className="mb-8 flex items-center justify-center">
                  <span className="h-[1px] w-full bg-body-color/20"></span>
                  <p className="mx-5 text-base text-body-color/60">or</p>
                  <span className="h-[1px] w-full bg-body-color/20"></span>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="mb-8">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Userame
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="name"
                      placeholder="Enter your username"
                      className="border-stroke dark:bg-form-input dark:border-strokedark dark:text-white dark:placeholder-body-color-dark focus-visible:shadow-none focus:border-primary w-full rounded-lg border bg-transparent py-3 px-6 text-base placeholder-body-color outline-none transition"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      className="border-stroke dark:bg-form-input dark:border-strokedark dark:text-white dark:placeholder-body-color-dark focus-visible:shadow-none focus:border-primary w-full rounded-lg border bg-transparent py-3 px-6 text-base placeholder-body-color outline-none transition"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="password"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Your Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter your password"
                      className="border-stroke dark:bg-form-input dark:border-strokedark dark:text-white dark:placeholder-body-color-dark focus-visible:shadow-none focus:border-primary w-full rounded-lg border bg-transparent py-3 px-6 text-base placeholder-body-color outline-none transition"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-8 flex">
                    <label
                      htmlFor="terms"
                      className="flex cursor-pointer select-none items-center text-sm font-medium text-body-color"
                    >
                      <div className="relative">
                        <input
                          type="checkbox"
                          name="terms"
                          id="terms"
                          className="sr-only"
                          checked={formData.terms}
                          onChange={handleChange}
                          required
                        />
                        <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded border border-stroke dark:border-form-strokedark bg-white dark:bg-form-input">
                          <span className="opacity-0">
                            <svg
                              className="fill-primary"
                              width="10"
                              height="7"
                              viewBox="0 0 10 7"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.66659 0.666748L3.66659 6.66675L0.333252 3.33341"
                                stroke="white"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                      <span>
                        By creating account means you agree to the Terms &
                        Conditions, and our Privacy Policy
                      </span>
                    </label>
                  </div>
                  <div className="mb-6">
                    <button
                      type="submit"
                      className="border-primary dark:border-stroke dark:hover:bg-primary/5 flex w-full items-center justify-center rounded bg-primary py-4 px-9 text-base font-medium text-white transition hover:bg-opacity-90"
                    >
                      Create Account
                    </button>
                  </div>
                </form>

                <p className="text-center text-base font-medium text-body-color">
                  Already have an account?
                  <Link href="/signin" className="text-primary hover:underline">
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1]">
          <svg
            width="1440"
            height="886"
            viewBox="0 0 1440 886"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_95:1005"
              style={{ maskType: 'alpha' }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1440"
              height="886"
            >
              <rect width="1440" height="886" fill="#090E34" />
            </mask>
            <g mask="url(#mask0_95:1005)">
              <path
                opacity="0.1"
                d="M1086.96 297.758C1192.84 360.435 1281.42 383.004 1350.99 371.399C1426.46 358.396 1498.69 305.799 1525.27 262.247L1601.85 139.56L1747.15 82.7171L1762.03 -43.3986L-128.097 -264.752L-292.792 155.391L1086.96 297.758Z"
                fill="url(#paint0_linear_95:1005)"
              />
              <path
                opacity="0.1"
                d="M153.84 469.691C59.2597 418.373 0.752103 372.196 -22.2036 338.56L-128.903 155.391L-292.74 -264.716L1747.18 -43.3628L1557.31 337.728L153.84 469.691Z"
                fill="url(#paint1_linear_95:1005)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_95:1005"
                x1="1438.68"
                y1="-74.3632"
                x2="-309.284"
                y2="139.654"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_95:1005"
                x1="874.516"
                y1="143.136"
                x2="-301.07"
                y2="-278.471"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
}

export default SignupPage;

