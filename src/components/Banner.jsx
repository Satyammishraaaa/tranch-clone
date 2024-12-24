import React from "react";
import payment from "../assets/image/payment.png";
import GundersonDettmer from "../assets/image/GundersonDettmer.png";
import { IoIosArrowForward, IoIosAdd } from "react-icons/io";
import Tranch_payment from "../assets/image/Tranch_payment.png";
import Graph from "../assets/image/Graph.png";
import one from "../assets/image/one.png";

export default function Banner() {
  return (
    // Main div
    <div>
      <div className="flex gap-6 mx-auto max-w-[1440px] pt-4 sm:pt-3 md:max-w-[1440px] lg:pt-6 xl:px-5 pb-0 sm:pb-0 md:pb-0 lg:pb-0 xl:pb-0 px-2 md:px-4">
        {/* div-1 */}
        <div className="bg-transparent w-full lg:h-[24pc] border-black shadow-tranch-offset border-4 z-10 border-solid rounded-tr-[3rem] font-hero relative block space-y-6 px-2 text-black sm:pl-4 md:w-full lg:w-full xl:max-w-none lg:p-6 py-4">
          <h1 className="font-headline font-bold md:leading-none lg:w-[95%] lg:text-6xl lg:leading-1.25 text-3xl max-w-[350px] sm:max-w-none lg:max-w-[700px]">
            Invoice to Payment Made Easy
          </h1>
          <div className="text-[16px] flex flex-col gap-4">
            <p>
              Tranch is the invoice to payments platform for enterprises who
              want to optimize cash flow by offering their business clients an
              unparalleled payment experience.
            </p>
            <p>
              Find out more about how we simplify and accelerate accounts
              receivables for enterprises with the most innovative workflows and
              payment solutions.
            </p>
          </div>
          <div className="text-lg font-semibold flex flex-col gap-4 sm:flex-row">
            <a
              className="border-[3px] border-black py-2 px-7 rounded-tr-[1.2rem] bg-[#D9FC50] inline-flex"
              href="#"
            >
              Explore Products
            </a>
            <a
              className="border-[3px] border-black py-2 px-7 rounded-br-[1.2rem] bg-[#BFEAFF] btn-base btn-primary inline-flex "
              href="#"
            >
              Explore Integrations
            </a>
          </div>
        </div>

        {/* div-2 */}
        <div className="sm:hidden lg:w-2/5 xl:inline-block lg:flex w-full sm:w-auto lg:min-w-[295px] xl:min-w-[486px] self-start justify-end">
          <img src={payment} alt="payment" className="h-[33pc]" />
        </div>
      </div>
      <br />

      {/* div-3 */}
      <div className="mx-auto max-w-[1440px] 2xl:rounded-tl-xl 2xl:rounded-tr-xl px-4 py-6 sm:px-3 sm:py-8 lg:p-12 xl:p-9 lg:pt-8">
        <h4 className="font-headline font-bold text-xl text-black underline decoration-tranch-purple-500 decoration-[2.5px] lg:text-3xl mb-1">
          Tranch is trusted by
        </h4>
        <div
          className="border-tranch-grey-900 shadow-[3px_3px_0px_0px_#D9D9D9] border-3 z-10
      rounded-bl-[3rem] sm:gap-x-15 flex flex-wrap items-center justify-between
      gap-x-10 gap-y-5 bg-white px-0 py-5 md:justify-center md:px-4 lg:gap-x-5
      lg:px-0 border-none shadow-white md:gap-x-14 lg:pb-0"
        >
          <div className="flex m-auto items-center">
            <img
              src={GundersonDettmer}
              alt=""
              className="h-9 sm:h-10 xl:h-12"
            />
          </div>
          <div className="flex m-auto items-center">
            <img
              src={GundersonDettmer}
              alt=""
              className="h-9 sm:h-10 xl:h-12"
            />
          </div>
          <div className="flex m-auto items-center">
            <img
              src={GundersonDettmer}
              alt=""
              className="h-9 sm:h-10 xl:h-12"
            />
          </div>
          <div className="flex m-auto items-center">
            <img
              src={GundersonDettmer}
              alt=""
              className="h-9 sm:h-10 xl:h-12"
            />
          </div>
          <div className="flex m-auto items-center">
            <img
              src={GundersonDettmer}
              alt=""
              className="h-9 sm:h-10 xl:h-12"
            />
          </div>
          <div className="flex m-auto items-center">
            <img
              src={GundersonDettmer}
              alt=""
              className="h-9 sm:h-10 xl:h-12"
            />
          </div>
        </div>
      </div>

      {/* tranch products */}
      <div className="bg-gray-200 m-12 2xl:rounded-tl-xl 2xl:rounded-tr-xl">
        <div className="mx-auto max-w-[1440px] 2xl:rounded-tl-xl 2xl:rounded-tr-xl px-4 py-6 sm:px-3 sm:py-8 lg:p-12 xl:p-9 lg:pb-6">
          <h4 className="flex font-headline font-bold text-xl text-black underline decoration-tranch-purple-500 decoration-[2.5px] lg:text-3xl mb-1">
            Tranch Products <IoIosArrowForward className="pt-3 w-7" />
          </h4>
          {/* Card 1 */}
          <div className="cards flex py-4 gap-5">
            <div className="border border-black w-[27rem] p-2 rounded-2xl ">
              <h4 className="font-bold">Pay Later</h4>
              <p>
                Offer flexible payment options to your client up to $500k,
                <br />
                <span>with no credit risk.</span>{" "}
              </p>
            </div>

            <div className="border border-black w-[27rem] p-2 rounded-2xl ">
              <h4 className="font-bold">Pay Later</h4>
              <p>
                Offer flexible payment options to your client up to $500k,
                <br />
                <span>with no credit risk.</span>{" "}
              </p>
            </div>

            <div className="border border-black w-[27rem] p-2 rounded-2xl ">
              <h4 className="font-bold">Pay Later</h4>
              <p>
                Offer flexible payment options to your client up to $500k,
                <br />
                <span>with no credit risk.</span>{" "}
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="cards flex py-4 gap-5">
            <div className="border border-black w-[27rem] p-2 rounded-2xl ">
              <h4 className="font-bold">Pay Later</h4>
              <p>
                Offer flexible payment options to your client up to $500k,
                <br />
                <span>with no credit risk.</span>{" "}
              </p>
            </div>

            <div className="border border-black w-[27rem] p-2 rounded-2xl ">
              <h4 className="font-bold">Pay Later</h4>
              <p>
                Offer flexible payment options to your client up to $500k,
                <br />
                <span>with no credit risk.</span>{" "}
              </p>
            </div>

            <div className="border border-black w-[27rem] p-2 rounded-2xl ">
              <h4 className="font-bold">Pay Later</h4>
              <p>
                Offer flexible payment options to your client up to $500k,
                <br />
                <span>with no credit risk.</span>{" "}
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="cards flex py-4 gap-5">
            <div className="border border-black w-[27rem] p-2 rounded-2xl ">
              <h4 className="font-bold">Pay Later</h4>
              <p>
                Offer flexible payment options to your client up to $500k,
                <br />
                <span>with no credit risk.</span>{" "}
              </p>
            </div>

            <div className="border border-black w-[27rem] p-2 rounded-2xl ">
              <h4 className="font-bold">Pay Later</h4>
              <p>
                Offer flexible payment options to your client up to $500k,
                <br />
                <span>with no credit risk.</span>{" "}
              </p>
            </div>

            <div className="border border-black w-[27rem] p-2 rounded-2xl ">
              <h4 className="font-bold">Pay Later</h4>
              <p>
                Offer flexible payment options to your client up to $500k,
                <br />
                <span>with no credit risk.</span>{" "}
              </p>
            </div>
          </div>
          <br />

          <h4 className="flex font-headline font-bold text-xl text-black underline decoration-tranch-purple-500 decoration-[2.5px] lg:text-3xl mb-1">
            Choose Tranch for your B2B invoice to payment solution
          </h4>
          <div className="flex justify-between text-center">
            <div className="">
              <h4 className="font-headline font-bold text-xl text-black py-3 decoration-tranch-purple-500 decoration-[2.5px] lg:text-3xl mb-1">
                40% Faster
              </h4>
              <p className="font-bold">
                to receive payment with Tranch solutions
              </p>
            </div>
            <div>
              <h4 className="font-headline font-bold text-xl text-black py-3 decoration-tranch-purple-500 decoration-[2.5px] lg:text-3xl mb-1">
                50% Reduction
              </h4>
              <p className="font-bold">in payments via check</p>
            </div>
            <div>
              <h4 className="font-headline font-bold text-xl text-black py-3 decoration-tranch-purple-500 decoration-[2.5px] lg:text-3xl mb-1">
                £1.5B
              </h4>
              <p className="font-bold">Average revenue of our partners</p>
            </div>
            <div>
              <h4 className="font-headline font-bold text-xl text-black py-3 decoration-tranch-purple-500 decoration-[2.5px] lg:text-3xl mb-1">
                Zero
              </h4>
              <p className="font-bold">credit risk for your company</p>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>

      {/* Tranch Payment Technology */}
      <div className="flex mx-auto max-w-[1440px] 2xl:rounded-tl-xl 2xl:rounded-tr-xl px-4 py-6 sm:px-3 sm:py-8 lg:p-12 xl:p-9 lg:pb-6">
        <div className="w-[50pc] ">
          <h4 className="flex font-headline font-bold text-xl text-black underline decoration-tranch-purple-500 decoration-[2.5px] lg:text-3xl mb-1">
            Tranch Payment Technology{" "}
            <IoIosArrowForward className="ml-1 mt-[8px] text-center" />
          </h4>
          <br />
          <p className="text-20px">
            Through our integrated technology, your clients can receive invoices
            electronically and pay via secure checkout across selected payment
            methods including Pay Now via FedNow, Pay Later, Pay by Card and Pay
            by Crypto.
          </p>
          <br />
          <div className="flex gap-7">
            <h4 className="flex font-semibold underline">
              Explore Products{" "}
              <IoIosArrowForward className="ml-1 mt-[6px] text-center" />
            </h4>
            <h4 className="flex font-semibold underline">
              Schedule a demo{" "}
              <IoIosArrowForward className="ml-1 mt-[6px] text-center" />
            </h4>
          </div>
        </div>
        <div>
          <img src={Tranch_payment} alt="" />
        </div>
      </div>

      {/* Tranch For Business */}
      <div className="bg-gray-100 2xl:rounded-tl-xl 2xl:rounded-tr-xl">
        <div className=" mx-auto max-w-[1440px] 2xl:rounded-tl-xl 2xl:rounded-tr-xl px-4 py-6 sm:px-3 sm:py-8 lg:p-12 xl:p-9 pb-0 sm:pb-6 lg:pb-4 xl:pb-4">
          <h4 className="flex font-headline font-bold text-xl text-black underline decoration-tranch-purple-500 decoration-[2.5px] lg:text-3xl mb-1">
            What can Tranch do for your business?{" "}
            <IoIosArrowForward className="ml-1 mt-[6px] text-center" />
          </h4>
          <div className="flex justify-around">
            <div className="bg-transparent p-4 w-[32rem]">
              <div className="py-4">
                <h4 className="font-bold">Secure Client Portal</h4>
                <p>
                  Enable your clients to access their invoices from one secure{" "}
                  <br />
                  integrated platform.
                </p>
              </div>
              <div className="py-4">
                <h4 className="font-bold">Secure Client Portal</h4>
                <p>
                  Enable your clients to access their invoices from one secure{" "}
                  <br />
                  integrated platform.
                </p>
              </div>
              <div className="py-4">
                <h4 className="font-bold">Secure Client Portal</h4>
                <p>
                  Enable your clients to access their invoices from one secure{" "}
                  <br />
                  integrated platform.
                </p>
              </div>
            </div>
            <div className="md:hidden lg:block bg-gray-100 w-[32rem]">
              <img src={Graph} alt="" />
            </div>
          </div>
        </div>

        {/* Product integration */}
        <div className="mx-auto max-w-[1440px] 2xl:rounded-br-xl 2xl:rounded-bl-xl py-6 sm:px-3 sm:py-8 lg:p-12 xl:p-9 px-0 pt-6 sm:pt-0 lg:pt-0 xl:pt-0">
          <div className="border-black shadow-tranch-offset border-3 z-10 border-solid rounded-tr-[3rem] -ml-3 block w-[103%] gap-3 space-y-4 border-r-0 bg-white p-6 font-headline text-base text-tranch-grey-900 sm:ml-0 sm:flex sm:w-full sm:justify-between sm:border-r-3 sm:px-4">
            <div className="w-full">
              <h4 className="font-headline font-bold mb-5 flex cursor-pointer flex-wrap items-baseline gap-3 text-xl text-black underline decoration-tranch-purple-500 decoration-[2.5px] lg:text-3xl px-0 sm:px-0">
                Explore product integration with Tranch
              </h4>
              <p>
                Integrate your ERP with Tranch via API or SFTP, or utilize our
                low and no-code options to offer your clients a frictionless
                payment experience out of the box.
              </p>
              <div className="w-full border-t-2 border-solid my-6 border-tranch-grey-500"></div>
              <div className="flex flex-wrap justify-between gap-7">
                <div className="m-auto flex items-center">
                  <img src={one} alt="" className="h-6 sm:h-8 xl:h-12" />
                </div>
                <div className="m-auto flex items-center">
                  <img src={one} alt="" className="h-6 sm:h-8 xl:h-12" />
                </div>
                <div className="m-auto flex items-center">
                  <img src={one} alt="" className="h-6 sm:h-8 xl:h-12" />
                </div>
                <div className="m-auto flex items-center">
                  <img src={one} alt="" className="h-6 sm:h-8 xl:h-12" />
                </div>
                <div className="m-auto flex items-center">
                  <img src={one} alt="" className="h-6 sm:h-8 xl:h-12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer and partner */}
      <div className="mx-auto max-w-[1440px] px-4 py-6 sm:px-3 sm:py-8 lg:p-12 xl:p-9">
        <h4 className="font-headline font-bold mb-5 text-xl text-black underline decoration-tranch-purple-500 decoration-[2.5px] lg:text-3xl">
          Customer and Partner Testimonials
        </h4>
        <div
          className="flex w-full flex-grow justify-between gap-4 overflow-auto pb-3 pr-1 text-black lg:[overflow:initial]
        "
        >
          <div className="border-tranch-grey-900 bg-white shadow-[3px_3px_0px_0px_#D9D9D9] border-3 z-10 border-solid rounded-tr-[3rem] flex w-full min-w-[300px] items-start gap-2 p-4 font-headline lg:gap-4 lg:p-6">
            <p className="text-4xl font-bold lg:pt-6 lg:text-[100px]">“</p>
            <div className="flex h-full flex-col justify-between space-y-6">
              <div class="space-y-6">
                <div class="font-bold xl:text-xl">
                  <p>
                    The greatest feedback we received once we introduced
                    Tranch’s Pay Later and Pay Now options on clients’ billing
                    statements was how convenient the payment options and
                    process has become."
                  </p>
                </div>
                <div>
                  <span class="font-bold">Bryan Rosenberg</span>, Director of
                  Finance at Gunderson Dettmer.
                </div>
              </div>
            </div>
          </div>

          <div className="border-tranch-grey-900 bg-white shadow-[3px_3px_0px_0px_#D9D9D9] border-3 z-10 border-solid rounded-tr-[3rem] flex w-full min-w-[300px] items-start gap-2 p-4 font-headline lg:gap-4 lg:p-6">
            <p className="text-4xl font-bold lg:pt-6 lg:text-[100px]">“</p>
            <div className="flex h-full flex-col justify-between space-y-6">
              <div class="space-y-6">
                <div class="font-bold xl:text-xl">
                  <p>
                    The greatest feedback we received once we introduced
                    Tranch’s Pay Later and Pay Now options on clients’ billing
                    statements was how convenient the payment options and
                    process has become."
                  </p>
                </div>
                <div>
                  <span class="font-bold">Bryan Rosenberg</span>, Director of
                  Finance at Gunderson Dettmer.
                </div>
              </div>
            </div>
          </div>

          <div className="border-tranch-grey-900 bg-white shadow-[3px_3px_0px_0px_#D9D9D9] border-3 z-10 border-solid rounded-tr-[3rem] flex w-full min-w-[300px] items-start gap-2 p-4 font-headline lg:gap-4 lg:p-6">
            <p className="text-4xl font-bold lg:pt-6 lg:text-[100px]">“</p>
            <div className="flex h-full flex-col justify-between space-y-6">
              <div class="space-y-6">
                <div class="font-bold xl:text-xl">
                  <p>
                    The greatest feedback we received once we introduced
                    Tranch’s Pay Later and Pay Now options on clients’ billing
                    statements was how convenient the payment options and
                    process has become."
                  </p>
                </div>
                <div>
                  <span class="font-bold">Bryan Rosenberg</span>, Director of
                  Finance at Gunderson Dettmer.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Last Section */}
      <div className="bg-transparent">
        <div className="mx-auto max-w-[1440px] px-4 py-6 sm:px-3 sm:py-8 lg:p-12 xl:p-9 pt-0 text-black sm:pt-0 lg:relative lg:mb-16 lg:pt-0 xl:pt-0">
          <div className="flex flex-col">
            <div className="border-black shadow-[3px_3px_0px_0px_#D9D9D9] border-2 z-10 border-solid block w-fit rounded-tr-3xl bg-white px-6 py-4 font-headline text-xl font-bold lg:relative lg:p-6 lg:text-3xl">
              About Tranch
            </div>
            <div className="border-black shadow-[3px_3px_0px_0px_#D9D9D9] border-2 z-10 border-solid block rounded-bl-3xl bg-white px-6 py-4 font-headline font-bold lg:absolute lg:-bottom-6 lg:-z-0 lg:mt-0 lg:px-10 lg:py-7 mt-4 lg:pr-0 lg:left-56 lg:w-[calc(100%-263px)]">
              <p className="btn-primary btn-underline btn-base inline-flex min-w-fit p-0 font-headline text-base font-bold underline">
                Find out more about Tranch, our values, key facts and
                opportunities to join us on our mission.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div></div>
    </div>
  );
}
