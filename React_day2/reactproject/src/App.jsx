import ProductSearch from "./component/ProductSearch"
import RegistrationForm from "./component/RegistrationForm"
import Fetchdata from "./component/Fetchdata"
import Toggle from "./component/Toggle"

const App = () => {
  return (
    <>
    <div>
      <div>
        <h1>Task 1</h1>
        <RegistrationForm />
        </div>
        <div>
        <h1>Task 2</h1>
        <ProductSearch/>
        </div>
        <div>
         <h1>Task 3</h1>
          <Fetchdata/>
        </div>
        <div>
          <h1>Task 4</h1>
          <Toggle/>
        </div>
      
      </div>
    </>
  )
}

export default App
