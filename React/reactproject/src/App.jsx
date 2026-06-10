import ProductSearch from "./component/ProductSearch"
import RegistrationForm from "./component/RegistrationForm"

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
      
      </div>
    </>
  )
}

export default App
