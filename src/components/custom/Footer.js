import { Facebook, Github, Twitter, Youtube } from "lucide-react"

import Link from "next/link"
const Footer = () => {
  return (
    <footer className="bg-gray-50 w-full ml-auto dark:bg-gray-900 py-8 px-4 md:px-8 lg:px-24 text-gray-800 dark:text-gray-300 border-t z-50 relative">
  <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 justify-between">
    <div className="md:ml-8">
      <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Main</h3>
      <div className="flex flex-col space-y-2">
        <Link
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          href="/"
        >
          Home
        </Link>
        <Link
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          href="/contact"
        >
          Contact
        </Link>
        <Link
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          href="/work"
        >
          Work With Us
        </Link>
        <Link
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          href="/gear"
        >
          My Gear
        </Link>
      </div>
    </div>
    <div>
      <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
        Learn
      </h3>
      <div className="flex flex-col space-y-2">
        <Link
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          href="/courses"
        >
          Courses
        </Link>
        <Link
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          href="/tutorials"
        >
          Tutorials
        </Link>
        <Link
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          href="/notes"
        >
          Notes
        </Link>
      </div>
    </div>
    <div>
      <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
        Legal
      </h3>
      <div className="flex flex-col space-y-2">
        <Link
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          href="/terms"
        >
          Terms
        </Link>
        <Link
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          href="/privacy"
        >
          Privacy
        </Link>
        <Link
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          href="/refund-policy"
        >
          Refund
        </Link>
      </div>
    </div>
    <div>
      <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
        Social
      </h3>
      <div className="flex flex-col space-y-2">
        <Link
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        >
          <Github/>
          <span>GitHub</span>
        </Link>
        <Link
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        >
          <Twitter/>
          <span>Twitter (X)</span>
        </Link>
        <Link
          href="s#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        >
          <Youtube/>
          <span>YouTube</span>
        </Link>
        <Link
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        >
         <Facebook/>
          <span>Facebook</span>
        </Link>
      </div>
    </div>
  </div>
  <div className="text-center mt-8  text-gray-600 dark:text-gray-400">
    Copyright &copy;  ComputoAkash | All right reserved
  </div>
</footer>

  )
}

export default Footer