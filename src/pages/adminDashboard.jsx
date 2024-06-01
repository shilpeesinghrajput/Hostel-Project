import React from 'react'

const adminDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
      <a className="flex items-center gap-2" href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="w-6 h-6"
        >
          <path d="M10 22v-6.57"></path>
          <path d="M12 11h.01"></path>
          <path d="M12 7h.01"></path>
          <path d="M14 15.43V22"></path>
          <path d="M15 16a5 5 0 0 0-6 0"></path>
          <path d="M16 11h.01"></path>
          <path d="M16 7h.01"></path>
          <path d="M8 11h.01"></path>
          <path d="M8 7h.01"></path>
          <rect x="4" y="2" width="16" height="20" rx="2"></rect>
        </svg>
        <span className="text-lg font-bold">Hotel Booking</span>
      </a>
      <nav className="flex items-center gap-4">
        <a className="hover:underline" href="#">
          Bookings
        </a>
        <a className="hover:underline" href="#">
          Rooms
        </a>
        <a className="hover:underline" href="#">
          Customers
        </a>
        <a className="hover:underline" href="#">
          Reports
        </a>
      </nav>
    </header>
    <main className="flex-1 grid grid-cols-[1fr_300px] gap-8 p-8">
      <div className="grid gap-8">
        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            <div className="flex-col space-y-1.5 p-6 flex items-center justify-between">
              <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Total Bookings</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-6 h-6 text-gray-500"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold">1,234</div>
              <p className="text-gray-500 text-sm">+15% from last month</p>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            <div className="flex-col space-y-1.5 p-6 flex items-center justify-between">
              <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Revenue</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-6 h-6 text-gray-500"
              >
                <line x1="12" x2="12" y1="2" y2="22"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold">$125,678</div>
              <p className="text-gray-500 text-sm">+12% from last month</p>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            <div className="flex-col space-y-1.5 p-6 flex items-center justify-between">
              <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Occupancy Rate</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-6 h-6 text-gray-500"
              >
                <line x1="19" x2="5" y1="5" y2="19"></line>
                <circle cx="6.5" cy="6.5" r="2.5"></circle>
                <circle cx="17.5" cy="17.5" r="2.5"></circle>
              </svg>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold">82%</div>
              <p className="text-gray-500 text-sm">+5% from last month</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div className="flex-col space-y-1.5 p-6 flex items-center justify-between">
            <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Recent Bookings</h3>
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
              View All
            </button>
          </div>
          <div className="p-6">
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead className="[&amp;_tr]:border-b">
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Guest
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Check-in
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Check-out
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Room
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="[&amp;_tr:last-child]:border-0">
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">John Doe</td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Apr 1, 2024</td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Apr 5, 2024</td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Deluxe Suite</td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                        Confirmed
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Jane Smith</td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Apr 10, 2024</td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Apr 15, 2024</td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Standard Room</td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                        Pending
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Michael Johnson</td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Apr 20, 2024</td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Apr 25, 2024</td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Premium Suite</td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                        Confirmed
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Emily Davis</td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Apr 30, 2024</td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">May 5, 2024</td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Standard Room</td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                        Cancelled
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-8">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Quick Links</h3>
          </div>
          <div className="p-6">
            <nav className="grid gap-2">
              <a className="flex items-center gap-2 hover:underline" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-5 h-5 text-gray-500"
                >
                  <path d="m7.5 4.27 9 5.15"></path>
                  <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                  <path d="m3.3 7 8.7 5 8.7-5"></path>
                  <path d="M12 22V12"></path>
                </svg>
                Manage Rooms
              </a>
              <a className="flex items-center gap-2 hover:underline" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-5 h-5 text-gray-500"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                Manage Customers
              </a>
              <a className="flex items-center gap-2 hover:underline" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-5 h-5 text-gray-500"
                >
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                </svg>
                Generate Reports
              </a>
            </nav>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Upcoming Events</h3>
          </div>
          <div className="p-6">
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-2">
                  <div className="text-2xl font-bold">15</div>
                  <div className="text-sm text-gray-500">Apr</div>
                </div>
                <div>
                  <div className="font-medium">Hotel Renovation</div>
                  <div className="text-gray-500 text-sm">Lobby and restaurant renovations</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-2">
                  <div className="text-2xl font-bold">22</div>
                  <div className="text-sm text-gray-500">Apr</div>
                </div>
                <div>
                  <div className="font-medium">Guest Appreciation Day</div>
                  <div className="text-gray-500 text-sm">Special offers and activities for guests</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  )
}

export default adminDashboard