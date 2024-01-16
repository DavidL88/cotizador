import Formulario from "./Formulario"
import useCotizador from "../hooks/useCotizador"

const AppSeguro = () => {
  return (
    <>
      <header className="my-10">
        <h1 className="text-white text-center text-4xl font-black">Cotizador de Seguros de Auto</h1>
      </header>
      <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
        <Formulario />
      </main>
    </>
  )
}

    <h1>App</h1>
    export default AppSeguro