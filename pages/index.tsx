import Nav from "../components/Nav"
import Logo from "../components/Logo"
import Button from "../components/Button"
import {FaCartPlus} from "react-icons/fa"
export default function Home() {
  return (
    <>
    <div>
      <div className="container mx-auto">
        <div className="flex bg-white items-center">
          <div className="w-3/12">
            <Logo />
              </div>
                <div className="w-6/12">
              <Nav />
          </div>
          <div className="w-3/12 text-right">
            <Button> 0</Button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}