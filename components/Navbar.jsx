import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="w-11/12 flex flex-wrap justify-between items-center py-8">
      <div className="w-full mb-5 lg:mb-0 md:w-auto font-bold text-3xl">
        <Link href="/">
          <a>Servicios de Bases de Datos</a>
        </Link>
      </div>
      <div className="w-full md:w-auto font-bold">
        <Link href="/#beneficios">
          <a className="mr-3 xl:text-xl hover:text-gray-700 duration-300 rounded p-2 hover:bg-white hover:bg-opacity-50 cursor-pointer">Beneficios</a>
        </Link>
        <Link href="/#caracteristicas">
          <a className="mr-3 xl:text-xl hover:text-gray-700 duration-300 rounded p-2 hover:bg-white hover:bg-opacity-50 cursor-pointer">Caracteristicas</a>
        </Link>
        <Link href="/modelos-disponibles">
          <a className="mr-3 xl:text-xl hover:text-gray-700 duration-300 rounded p-2 hover:bg-white hover:bg-opacity-50 cursor-pointer">Modelos disponibles</a>
        </Link>
        <Link href="/principales-proveedores">
          <a className="mr-3 xl:text-xl hover:text-gray-700 duration-300 rounded p-2 hover:bg-white hover:bg-opacity-50 cursor-pointer">Principales proveedores</a>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;