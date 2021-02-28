import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ModelosDisponibles = () => {
  return (
    <div>
      <Head>
        <title>Servicios de bases de datos en la nube</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gradient-to-r from-green-400 to-blue-500 flex flex-wrap justify-center text-white mb-10">
        <Navbar />
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="w-11/12">
          <p className="text-4xl font-bold text-center mb-10">Modelos de servicio de base de datos disponibles en la nube</p>
          <div className="w-full flex justify-between mb-10">
            <div data-aos="fade-up" className="w-1/3 flex px-10">
              <div className="transform hover:scale-110 duration-300 bg-white w-full rounded-md border border-gray-300 shadow-2xl flex flex-col items-center justify-center p-5">
                <div className="flex-grow w-1/2 flex items-center">
                  <img className="w-full mb-5" src="https://1.cms.s81c.com/sites/default/files/2017-10-18/infrastructure-as-a-service-iaas.jpg" />
                </div>
                <div className="text-2xl font-bold uppercase mb-5">Infraestructura como servicio (IaaS)</div>
                <p className="px-5">Un proveedor proporciona a los clientes acceso directo a almacenamiento, red, servidores y otros recursos de computación en la nube.</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="300" className="w-1/3 flex px-10">
              <div className="transform hover:scale-110 duration-300 bg-white w-full rounded-md border border-gray-300 shadow-2xl flex flex-col items-center justify-center p-5">
                <div className="flex-grow w-1/2 flex items-center">
                  <img className="w-full mb-5" src="https://1.cms.s81c.com/sites/default/files/2017-10-18/platform-as-a-service-paas.jpg" />
                </div>
                <div className="text-2xl font-bold uppercase mb-5">Plataforma como servicio (PaaS)</div>
                <p className="px-5">Un proveedor de servicios ofrece acceso a un entorno basado en la nube, donde los usuarios pueden desarrollar y ofrecer aplicaciones. El proveedor suministra la infraestructura subyacente.</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="600" className="w-1/3 flex px-10">
              <div className="transform hover:scale-110 duration-300 bg-white w-full rounded-md border border-gray-300 shadow-2xl flex flex-col items-center justify-center p-5">
                <div className="flex-grow w-1/2 flex items-center">
                  <img className="w-full mb-5" src="https://1.cms.s81c.com/sites/default/files/2017-10-18/software-as-a-service-saas.jpg" />
                </div>
                <div className="text-2xl font-bold uppercase mb-5">
                  Software como servicio (SaaS)
                </div>
                <p className="px-5">Los usuarios se suscriben al software y acceden al mismo por medio de la web o de las API del proveedor. Los usuarios se suscriben al software y acceden al mismo por medio de la web o de las API del proveedor.</p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="900" className="mb-10 w-2/3 flex justify-center">
          <img className="w-2/5" src="https://www.stackscale.com/wp-content/uploads/2020/04/modelos-servicios-cloud-iaas-paas-saas-stackscale.jpg" />
        </div>
        <div data-aos="fade-up" className="mb-10 w-2/3">
          <p className="text-2xl font-bold mb-5">IaaS</p>
          <p className="mb-5">Infraestructura como servicio (IaaS) es una oferta de computación en nube en la que un proveedor proporciona a los usuarios acceso a recursos informáticos, tales como: servidores, almacenamiento  y redes. Las organizaciones utilizan sus propias plataformas y aplicaciones dentro de la infraestructura de un proveedor de servicios.</p>
          <p className="font-bold mb-5">Características clave</p>
          <ol className="list-disc ml-10">
            <li className="mb-3">En vez de comprar directamente el hardware, los usuarios pagan por el IaaS según la demanda.</li>
            <li className="mb-3">La infraestructura es escalable según las necesidades de procesamiento y de almacenamiento.</li>
            <li className="mb-3">Ahorra a los negocios el costo de comprar y mantener su propio hardware.</li>
            <li className="mb-3">Debido a que los datos están en la nube, no puede haber un único punto de anomalía.</li>
            <li className="mb-3">Habilita la virtualización de tareas administrativas, lo que libera tiempo para otros trabajos.</li>
          </ol>
        </div>
        <div data-aos="fade-up" className="mb-10 w-2/3">
          <p className="text-2xl font-bold mb-5">PaaS</p>
          <p className="mb-5">Plataforma como servicio (PaaS) es una oferta de computación en nube que proporciona a los usuarios un entorno de nube en el que pueden desarrollar, gestionar y entregar aplicaciones. Los usuarios, además del almacenamiento y de otros recursos de computación, pueden utilizar un conjunto de herramientas preconstruidas para desarrollar, personalizar y probar sus propias aplicaciones.</p>
          <p className="font-bold mb-5">Características clave</p>
          <ol className="list-disc ml-10">
            <li className="mb-3">PaaS proporciona una plataforma con herramientas para probar, desarrollar y alojar aplicaciones en el mismo entorno.</li>
            <li className="mb-3">Permite que las organizaciones se centren en el desarrollo, sin que se tengan que preocupar de la infraestructura subyacente.</li>
            <li className="mb-3">Los proveedores gestionan la seguridad, los sistemas operativos, el software de servidor y las copias de seguridad.</li>
            <li className="mb-3">Facilita el trabajo colaborativo incluso cuando los equipos trabajan de forma remota.</li>
          </ol>
        </div>
        <div data-aos="fade-up" className="mb-10 w-2/3">
          <p className="text-2xl font-bold mb-5">SaaS</p>
          <p className="mb-5">Software como servicio (SaaS)   es una oferta de computación en nube que proporciona a los usuarios acceso a un software con base en la nube de un proveedor. Los usuarios no instalan las aplicaciones en sus dispositivos locales. En vez de eso, las aplicaciones residen en una red de nube remota a la que se accede por medio de la web o de una API. Por medio de la aplicación, los usuarios pueden almacenar y analizar los datos, además de colaborar en proyectos.</p>
          <p className="font-bold mb-5">Características clave</p>
          <ol className="list-disc ml-10">
            <li className="mb-3">Los proveedores de SaaS proporcionan a los usuarios software y aplicaciones por medio de un modelo de suscripción.</li>
            <li className="mb-3">Los usuarios no tienen que gestionar, instalar o actualizar el software; los proveedores de SaaS lo gestionan.</li>
            <li className="mb-3">Los datos están seguros en la nube; cuando un equipo falla no se pierden datos.</li>
            <li className="mb-3">La utilización de los recursos se puede escalar según las necesidades de los servicios.</li>
            <li className="mb-3">Las aplicaciones son accesibles desde casi cualquier dispositivo conectado a Internet, desde prácticamente cualquier parte del mundo.</li>
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ModelosDisponibles;