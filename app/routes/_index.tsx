import type { MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline'

export const meta: MetaFunction = () => {
  return [
    { title: 'Sakamico Mining Company Inc.' },
    { name: 'description', content: 'Sustainable Gold Mining in Liberia  ' },
  ]
}

const linkStyle = 'underline decoration-dotted'
export default function Index() {
  const features = [
    {
      name: 'Community Development',
      description:
        'We believe in growing alongside the communities that host our operations. Sakamico actively participates in the development of local communities through initiatives that improve education, healthcare, and infrastructure, thereby ensuring long-term prosperity for all stakeholders.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Sustainable Mining Practices',
      description:
        'Our commitment to sustainability is reflected in every decision we make. From minimizing our environmental footprint through the use of renewable energy and water reclamation systems to implementing land rehabilitation projects post-mining, we integrate sustainable practices wherever possible. We are also committed to reducing our carbon footprint and enhancing biodiversity conservation to ensure that our operations contribute positively to global environmental goals.',
      icon: LockClosedIcon,
    },
    {
      name: 'Stakeholder Engagement',
      description:
        'Understanding that collaboration is key to sustainable success, Sakamico engages with all stakeholders, including local communities, governments, and environmental organizations, to ensure our practices meet the highest standards of social and environmental responsibility. Through transparent communication and active collaboration, we work to build trust and create shared value',
      icon: ArrowPathIcon,
    },
    {
      name: 'Continuous Improvement',
      description:
        'Sakamico is dedicated to continuous improvement in our sustainability efforts. We regularly review our practices, stay abreast of the latest developments in sustainable mining, and are always looking for innovative ways to enhance our impact on society and the environment. By setting ambitious targets and rigorously monitoring our progress, we aim to not just meet but exceed international standards for sustainable mining',
      icon: FingerPrintIcon,
    },
  ]

  return (
    <div>
      <header className="absolute left-0 right-0 top-0 z-10  ">
        <nav className="z-10 border-gray-200 bg-none px-4 py-8  lg:px-8">
          <div className="mx-auto flex  flex-wrap items-center justify-between">
            <a
              href="https://sakamico.com"
              className="flex items-center rounded-full bg-[#191919] px-8 py-4"
            >
              <img
                src="images/logo-white.png"
                className="h-8 sm:h-12"
                alt="sakamico logo"
              />
            </a>
            <div className="flex items-center lg:order-1">
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden  "
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div
              className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
              id="mobile-menu-2"
            >
              <ul className="mt-4 flex flex-col text-xl font-medium lg:mt-0 lg:flex-row lg:space-x-8">
                <li>
                  <a
                    href="#value"
                    className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-300 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent  "
                  >
                    Gold Commodity
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-300 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent  "
                  >
                    About Sakamico
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-300 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent  "
                  >
                    Executive Team
                  </a>
                </li>
                <li>
                  <a
                    href="#sustainability"
                    className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-300 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent"
                  >
                    Sustainability
                  </a>
                </li>
                <li>
                  <a
                    href="#process"
                    className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-300 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent"
                  >
                    Our Process
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="z-0 ">
        <section
          className=" flex h-screen items-center justify-center bg-cover bg-center      "
          // {/*  style={{backgroundImage: `url('public/images/hero-img-2.jpg')`}} */}
        >
          <div className="absolute -top-12  h-screen w-full bg-gradient-to-r from-black  to-transparent lg:h-screen" />

          <img
            src="images/hero-new.webp"
            alt="BannerImage"
            className="absolute h-screen w-full object-cover object-right opacity-100  lg:h-screen "
          />

          {/**<div className="absolute inset-0 top-28 bg-black bg-gradient-to-r from-black  to-gray-600 opacity-75     "></div> */}
          <div className="mx-auto grid   lg:grid-cols-12 ">
            <div className=" p-6  opacity-95  	lg:col-span-8">
              <h1 className="mb-4 max-w-4xl text-4xl font-medium  leading-none tracking-tight text-white md:text-5xl xl:text-8xl ">
                Sustainable Gold Mining in Liberia
              </h1>
              <p className="mb-6 max-w-2xl font-medium text-gray-200 lg:mb-8 lg:text-2xl ">
                A Nordic-Liberian partnership advancing sustainable gold mining
                through innovation and collaboration.{' '}
              </p>

              <a
                href="#value"
                className="inline-flex items-center justify-center  border border-gray-300 px-5 py-3 text-center text-xl font-medium text-gray-200 hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-100  "
              >
                Learn More{' '}
              </a>
            </div>
            {/** 
            <div className="flex lg:col-span-7 lg:-mr-32 lg:mt-0">
              <img src="public/images/hero-img.jpg" alt="mockup" />
            </div>*/}
          </div>
        </section>

        <section id="value" className="bg-[#191919] text-white">
          <div className=" mx-auto px-4 py-8 lg:px-6  lg:pt-32 ">
            <div className="mx-auto mb-16 text-center ">
              <h2 className="text-base font-semibold leading-7 text-yellow-500">
                Sound Investment
              </h2>
              <p className=" mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                Gold: A Stable Investment at an All Time High{' '}
              </p>
              <p className="mx-auto mt-2 max-w-6xl font-light text-gray-400 sm:text-xl lg:mb-6 ">
                Gold's remarkable journey to its current peak value underscores
                its unwavering appeal as a secure and steady investment. Amidst
                global economic uncertainties, gold shines as a resilient store
                of value, offering investors a safe haven and a hedge against
                inflation. Its current all-time high not only reflects its
                enduring significance but also presents a prime opportunity for
                those looking to diversify and strengthen their investment
                portfolio with a commodity that has consistently proven its
                worth over time.
              </p>
              <div className="flex flex-col md:flex-row md:space-x-2">
                <div className="flex w-full flex-col space-y-2">
                  <iframe
                    src="https://goldbroker.com/widget/live/XAU?currency=USD&weight_unit=kg&height=500"
                    scrolling="no"
                    frameBorder="0"
                    width="100%"
                    height="500"
                    style={{ border: 0, overflow: 'hidden' }}
                  ></iframe>
                  <p>Todays Prices</p>
                </div>
                <div className="flex w-full flex-col space-y-2">
                  <iframe
                    src="https://goldbroker.com/widget/historical/XAU?height=500&currency=USD&weight_unit=kg"
                    scrolling="no"
                    frameBorder="0"
                    width="100%"
                    height="500"
                    style={{ border: 0, overflow: 'hidden' }}
                  ></iframe>
                  <p>All Time High </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <div className=" md:max-w-screen-3xl p-6  md:grid  md:grid-cols-5 md:gap-16 md:p-32 ">
            <div className="col-span-2 max-w-2xl">
              <h2 className="text-base font-semibold leading-7 text-yellow-700">
                About Sakamico
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Mining with Impact, Transparency, & Trust{' '}
              </p>
              <p className="mt-2  font-light text-gray-400 sm:text-xl lg:mb-6 ">
                At Sakamico, we are committed to more than just mining. We
                strive to enhance the community that surrounds us, providing
                local employment opportunities, comprehensive training, and
                improving local infrastructure by supporting a school and a
                health clinic.
                <p className="mt-2  font-light text-gray-400 sm:text-xl lg:mb-6">
                  We are committed to upholding the highest standards of
                  environmental stewardship in adherence to the Environmental
                  Protection and Management Law (EPML) and the Sackson Consult
                  (ISO) Compliance certification.
                </p>
              </p>
            </div>
            <div className="col-span-3 w-full ">
              <img
                className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src="images/intro-img.png"
                alt="intro"
              />
            </div>
          </div>
        </section>

        <section className="bg-gray-100 " id="team">
          <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16 ">
            <div className="mx-auto mb-8 max-w-screen-lg text-center lg:mb-4">
              <h2 className="text-base font-semibold leading-7 text-yellow-700">
                Executive Team{' '}
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Committed Experts from a World of Experience
              </p>
              <p className="mt-2 font-light text-gray-400 sm:text-xl lg:mb-6 ">
                Meet the people behind Sakamico: Our executive team combines
                decades of expertise in the gold mining industry, and
                international business with a forward-thinking approach to
                leadership.
              </p>
            </div>
            <div className="mb-6 grid gap-8 md:grid-cols-2 lg:mb-16">
              <div className="items-center rounded-lg bg-white text-white shadow sm:flex  ">
                <a href="#">
                  <img
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src="images/kaliefah.jpg"
                    alt="Kaliefah Soko Sackor image"
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-800 ">
                    <a href="#">Kaliefah Soko Sackor</a>
                  </h3>
                  <span className="text-gray-500 ">CEO</span>

                  <ul className="flex space-x-4 sm:mt-0">
                    <li>
                      <a href="#" className=" ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          color="white"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="items-center rounded-lg bg-gray-50 shadow sm:flex  ">
                <a href="#">
                  <img
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src="/images/freeman.jpg"
                    alt="Freeman Kamara Image"
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 ">
                    <a href="#">Freeman Kamara</a>
                  </h3>
                  <span className="text-gray-500 ">CFO</span>

                  <ul className="flex space-x-4 sm:mt-0">
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="items-center rounded-lg bg-gray-50 shadow sm:flex ">
                <a href="#">
                  <img
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src="images/michael.jpg"
                    alt="Michael Mathiesen Image"
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900">
                    <a href="#">Michael Mathiesen</a>
                  </h3>
                  <span className="text-gray-500 ">Chairman</span>

                  <ul className="flex space-x-4 sm:mt-0">
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="items-center rounded-lg bg-gray-50 shadow sm:flex  ">
                <a href="#">
                  <img
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src="images/hakan.jpg"
                    alt="Håkan Hollerup Image"
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 ">
                    <a href="#">Håkan Hollerup</a>
                  </h3>
                  <span className="text-gray-500 ">Board Member</span>

                  <ul className="flex space-x-4 sm:mt-0">
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50" id="sustainability">
          <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto  max-w-screen-lg lg:text-center">
                <h2 className="text-base font-semibold leading-7 text-yellow-700">
                  Sustainable Focus
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Sustainable Excellence: Our Commitment to People and Planet
                </p>
                <p className="mt-2 font-light text-gray-400 sm:text-xl lg:mb-6 ">
                  Sakamico is dedicated to embedding sustainable mining
                  practices into the core of our operations. Our commitment to
                  sustainability is demonstrated through a comprehensive
                  approach that includes:
                </p>
              </div>
              <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                  {features.map(feature => (
                    <div key={feature.name} className="relative pl-16">
                      <dt className="text-lg  font-semibold leading-7 text-gray-900">
                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-700">
                          <feature.icon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </div>
                        {feature.name}
                      </dt>
                      <dd className="mt-2 text-lg  leading-7 text-gray-600">
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        <section id="process">
          <div className="relative bg-[#191919] px-6  py-6 md:py-0   lg:px-0">
            <div className="mx-auto grid  grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-4  lg:items-start  ">
              <div className="  lg:col-span-2   lg:row-span-2  ">
                <img
                  className="w-auto"
                  src="images/sakamico-exploration1.jpg"
                  alt=""
                />
              </div>
              <div className="mb-12 mt-12 md:mb-0 md:mt-24  lg:col-span-2  lg:mx-auto  lg:w-full lg:grid-cols-2 lg:px-8">
                <div className="lg:pl-12">
                  <div className="lg:max-w-lg">
                    <p className="text-base font-semibold leading-7 text-yellow-700">
                      Our Process:{' '}
                      <span className="text-yellow-500">Exploration</span>
                    </p>

                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl ">
                      Unveiling Potential
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-200">
                      At the heart of our operations lies the meticulous
                      exploration of gold veins. With cutting-edge technology
                      and geological expertise, we scrutinize the earth's
                      surface to identify promising deposits. This precise
                      assessment not only guides our extraction efforts but
                      ensures a sustainable approach to mining, respecting both
                      the environment and the resource's rarity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative  bg-gray-100 px-6 py-6 md:py-0  lg:px-0">
            <div className="mx-auto grid max-w-2xl grid-cols-1  gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start ">
              <div className="mt-12 md:mt-24 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="lg:max-w-lg">
                    <p className="text-base font-semibold leading-7 text-yellow-600">
                      Our Process:{' '}
                      <span className="text-yellow-900">Extraction</span>
                    </p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      The Journey from Soil to Gold
                    </h1>
                    <p className="mt-6 text-xl leading-8 text-gray-700">
                      The transition from untouched soil to valuable gold is
                      marked by a series of carefully orchestrated steps.
                      Starting with excavation, we gently uncover the
                      gold-bearing materials, ensuring every grain is accounted
                      for. We use a surface extraction method which poses the
                      minimal impact to the environment aswell as being the
                      safest form of mining for our workers.This process
                      seamlessly transitions into washing, where gold is
                      separated from other materials, revealing its true worth.
                    </p>
                  </div>
                </div>
              </div>
              <div className="  lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                <img className="w-full" src="images/extraction.jpg" alt="" />
              </div>
            </div>
          </div>

          <div className="relative isolate overflow-hidden bg-[#191919] px-6 py-6  md:py-0  lg:overflow-visible lg:px-0">
            <div className="mx-auto grid  grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-4  lg:items-start ">
              <div className="  lg:sticky lg:col-span-2   lg:row-span-2  lg:overflow-hidden">
                <img className="w-full" src="images/export.jpg" alt="" />
              </div>
              <div className=" mb-12 mt-12 md:mb-0 md:mt-24 lg:col-span-2  lg:mx-auto  lg:w-full  lg:grid-cols-2 lg:px-8">
                <div className="lg:pl-12">
                  <div className="lg:max-w-lg">
                    <p className="text-base font-semibold leading-7 text-yellow-700">
                      Our Process:{' '}
                      <span className="text-yellow-500">Safe Passage</span>
                    </p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
                      From Extraction to Export
                    </h1>
                    <p className="mt-6 text-xl leading-8 text-gray-200">
                      With the gold now separated, its journey is far from over.
                      It travels securely to be verified and documented, first
                      within the nurturing borders of Liberia, from the banks in
                      Tapita to the scrutiny of the Ministry of Mines in
                      Monrovia. Following rigorous testing and the fulfillment
                      of export protocols, including a 3% export duty, the gold
                      is prepared for its international voyage, embodying our
                      dedication to transparency and regulatory compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative  bg-gray-100 px-6 py-6 md:py-0  lg:px-0">
            <div className="mx-auto grid max-w-2xl grid-cols-1  gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
              <div className="mt-12 md:mt-24 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="lg:max-w-lg">
                    <p className="text-base font-semibold leading-7 text-yellow-600">
                      Our Process:{' '}
                      <span className="text-yellow-900">Global Steps</span>
                    </p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      Refinement and Certification
                    </h1>
                    <p className="mt-6 text-xl leading-8 text-gray-700">
                      Landing in Dubai, the gold enters a global stage where
                      it's refined to meet the highest standards of purity. In
                      the hands of expert refiners, it's transformed into bars
                      of 100g and 1kg, each a symbol of our commitment to
                      excellence. The preparation of LBMA documents is more than
                      procedural; it's our pledge to the global community,
                      ensuring our gold meets the pinnacle of industry
                      standards.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                <img className="w-full" src="images/refinement.jpg" alt="" />
              </div>
            </div>
          </div>

          <div className="relative isolate overflow-hidden bg-[#191919] px-6 py-6 md:py-0  lg:overflow-visible lg:px-0">
            <div className="mx-auto grid  grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-4  lg:items-start ">
              <div className="  lg:sticky lg:col-span-2   lg:row-span-2  lg:overflow-hidden">
                <img className="w-full" src="images/value.jpg" alt="" />
              </div>
              <div className="mb-12 mt-12 md:mb-0 md:mt-24 lg:col-span-2  lg:mx-auto  lg:w-full  lg:grid-cols-2 lg:px-8">
                <div className="lg:pl-12">
                  <div className="lg:max-w-lg">
                    <p className="text-base font-semibold leading-7 text-yellow-700">
                      Our Process:{' '}
                      <span className="text-yellow-500">To Market</span>
                    </p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
                      The Value Realised
                    </h1>
                    <p className="mt-6 text-xl leading-8 text-gray-200">
                      The culmination of our process is not merely in the sale
                      but in the establishment of trust and value. Our gold, now
                      in bars, reaches sales locations worldwide, where it's
                      exchanged, not just as a commodity, but as a testament to
                      a journey of meticulous care, dedication to
                      sustainability, and the highest ethical standards. Each
                      transaction marks the end of one journey and the beginning
                      of another, as our gold continues to weave its story
                      across the globe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-32 bg-white p-4 sm:p-6 ">
          <div className="mx-auto max-w-screen-xl">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <a href="https://sakamico.com" className="flex items-center">
                  <img
                    src="images/logo.png"
                    className="mr-3 h-8"
                    alt="Sakamico Logo"
                  />
                </a>
              </div>

              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
                <div>
                  <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 ">
                    Links
                  </h2>
                  <ul className="text-gray-600 ">
                    <li className="mb-4">
                      <a href="#value" className="hover:underline">
                        Gold Commodity
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#about" className="hover:underline">
                        About Sakamico
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#team" className="hover:underline">
                        Executive Team
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#process" className="hover:underline">
                        Our Process
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 " />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-gray-500 sm:text-center ">
                © 2024{' '}
                <a href="https://sakamico.com" className="hover:underline">
                  Sakamico™
                </a>
                . All Rights Reserved.
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
