import './App.css'
import Layout from './layouts/Layout'
import AppRouter from './router/router'

function App() {
   return (
      <div>
         <Layout>
            { AppRouter }
         </Layout>
      </div>
   )
}

export default App
