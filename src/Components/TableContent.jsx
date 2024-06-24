import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
const TableContent = () => {
  return (
    <div>
      <div className="my-8 shadow-custom overflow-x-scroll w-full">
        {/*---table----*/}
        <table className="table-auto w-full">
          <thead>
            <tr className="text-sm">
              <th className="p-3">#</th>
              <th className="p-3">Bill For</th>
              <th className="p-3">Issue Date</th>
              <th className="p-3">Due Date</th>
              <th className="p-3">Total</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-xs">
              <td className="p-3">1</td>
              <td className="p-3">Service Name1</td>
              <td className="p-3">1 May 2023</td>
              <td className="p-3">1 June 2023</td>
              <td className="p-3">Rs.799,00</td>
              <td className="p-2">
                <span className="inline-flex items-center rounded-md bg-[#ffc107] text-center px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                  Due
                </span>
              </td>
            </tr>
            <tr className="text-xs">
              <td className="p-3">2</td>
              <td className="p-3">Service Name1</td>
              <td className="p-3">1 April 2023</td>
              <td className="p-3">1 May 2023</td>
              <td className="p-3">Rs.799,00</td>
              <td className="p-2">
                <span className="inline-flex items-center rounded-md bg-[#198754] text-center px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                  Paid
                </span>
              </td>
            </tr>
            <tr className="text-xs">
              <td className="p-3">3</td>
              <td className="p-3">Service Name1</td>
              <td className="p-3">1 May 2023</td>
              <td className="p-3">1 June 2023</td>
              <td className="p-3">Rs.799,00</td>
              <td className="p-2">
                <span className="inline-flex items-center rounded-md bg-[#198754] text-white text-center px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">
                  Paid
                </span>
              </td>
            </tr>
            <tr className="text-xs">
              <td className="p-3">4</td>
              <td className="p-3">Service Name1</td>
              <td className="p-3">1 May 2023</td>
              <td className="p-3">1 June 2023</td>
              <td className="p-3">Rs.799,00</td>
              <td className="p-2">
                <span className="inline-flex items-center rounded-md bg-[#dc3545] text-center text-white px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">
                  Cancelled
                </span>
              </td>
            </tr>
            <tr className="text-xs">
              <td className="p-3">5</td>
              <td className="p-3">Service Name1</td>
              <td className="p-3">1 May 2023</td>
              <td className="p-3">1 June 2023</td>
              <td className="p-3">Rs.799,00</td>
              <td className="p-2">
                <span className="inline-flex items-center rounded-md bg-[#ffc107] text-center px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                  Due
                </span>
              </td>
            </tr>
            <tr className="text-xs">
              <td className="p-3">6</td>
              <td className="p-3">Service Name1</td>
              <td className="p-3">1 May 2023</td>
              <td className="p-3">1 June 2023</td>
              <td className="p-3">Rs.799,00</td>
              <td className="p-2">
                <span className="inline-flex items-center rounded-md bg-[#198754] text-center text-white px-2 py-1 text-xs font-medium  ring-1 ring-inset ring-gray-500/10">
                  Paid
                </span>
              </td>
            </tr>
            <tr className="text-xs">
              <td className="p-3">7</td>
              <td className="p-3">Service Name1</td>
              <td className="p-3">1 May 2023</td>
              <td className="p-3">1 June 2023</td>
              <td className="p-3">Rs.799,00</td>
              <td className="p-2">
                <span className="inline-flex items-center rounded-md bg-[#dc3545] text-white  text-center px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">
                  Cancelled
                </span>
              </td>
            </tr>
            <tr className="text-xs">
              <td className="p-3">8</td>
              <td className="p-3">Service Name1</td>
              <td className="p-3">1 May 2023</td>
              <td className="p-3">1 June 2023</td>
              <td className="p-3">Rs.799,00</td>
              <td className="p-2">
                <span className="inline-flex items-center rounded-md bg-[#198754] text-center text-white px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">
                  Paid
                </span>
              </td>
            </tr>
            <tr className="text-xs">
              <td className="p-3">9</td>
              <td className="p-3">Service Name1</td>
              <td className="p-3">1 May 2023</td>
              <td className="p-3">1 June 2023</td>
              <td className="p-3">Rs.799,00</td>
              <td className="p-2">
                <span className="inline-flex items-center rounded-md bg-[#198754] text-center text-white px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">
                  Paid
                </span>
              </td>
            </tr>
            <tr className="text-xs">
              <td className="p-3">10</td>
              <td className="p-3">Service Name1</td>
              <td className="p-3">1 May 2023</td>
              <td className="p-3">1 June 2023</td>
              <td className="p-3">Rs.799,00</td>
              <td className="p-2">
                <span className="inline-flex items-center rounded-md bg-[#198754]  text-center text-white px-2 py-1 text-xs font-medium  ring-1 ring-inset ring-gray-500/10">
                  Paid
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        {/*--table completed----*/}
        {/*----pagination---*/}
        <div className="flex items-center justify-between border-t border-gray-200 bg-white ">
          <div className="flex flex-1 justify-between sm:hidden">
            <Link
              to="#"
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </Link>
            <Link
              to="#"
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </Link>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <Link
                  href="#"
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <MdOutlineKeyboardArrowLeft
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </Link>
                {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                <Link
                  href="#"
                  aria-current="page"
                  className="relative z-10 inline-flex items-center bg-[#C9252C] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  1
                </Link>
                <Link
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-[#C9252C] focus:z-20"
                >
                  2
                </Link>
                <Link
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-[#C9252C] focus:z-20"
                >
                  3
                </Link>

                <Link
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-[#C9252C] focus:z-20"
                >
                  4
                </Link>

                <Link
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-[#C9252C] focus:z-20"
                >
                  5
                </Link>

                <Link
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-[#C9252C] focus:z-20"
                >
                  <span className="sr-only">Next</span>
                  <MdKeyboardArrowRight
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </Link>
                <div>
                  <p className="text-xs text-gray-700 py-8">
                    Showing <span className="font-medium">1</span> to{" "}
                    <span className="font-medium">5</span> of{" "}
                    <span className="font-medium">10</span> results
                  </p>
                </div>
              </nav>
            </div>
          </div>
        </div>
        {/*---pagination completed---*/}
      </div>
    </div>
  );
};

export default TableContent;
