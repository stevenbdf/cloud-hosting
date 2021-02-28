import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
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
        <div className="w-11/12 flex flex-col-reverse md:flex-row flex-wrap mb-10">
          <div className="w-full md:w-1/2 flex flex-wrap flex-col justify-center xl:px-20">
            <p className="w-full text-4xl font-bold mb-10 text-gray-800">¿Qué es la Nube o Cloud Computing?</p>
            <p className="text-gray-700 mb-10">
              Es una tecnología que permite acceso remoto a softwares, almacenamiento de archivos y procesamiento de datos por medio de Internet, siendo así, una alternativa a la ejecución en una computadora personal o servidor local.
              En el modelo de nube, no hay necesidad de instalar aplicaciones localmente en computadoras.
              <br />
              La computación en la nube ofrece a los individuos y a las empresas la capacidad de un pool de recursos de computación con buen mantenimiento, seguro, de fácil acceso y bajo demanda.
            </p>
            <a
              href="https://www.salesforce.com/mx/cloud-computing/"
              target="_blank"
              className="w-32 p-2 rounded bg-gradient-to-r from-green-400 to-green-500 text-white hover:scale-500 transition-300 text-center"
            >
              Leer más
            </a>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center xl:px-20">
            <img src="https://blog.avmconsulting.net//img/2018-05-04-Oracle-Cloud-OCI-Benchmarking-Oracles-DBaaS-against-RDS---A-Performance-Comparison---Part-II-1.png"
            />
          </div>
        </div>
        <div className="w-11/12">
          <div className="w-full flex items-center justify-center mb-20">
            <iframe width="800" height="400" src="https://www.youtube-nocookie.com/embed/xT75e-G1eak?start=3" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
        <div className="w-11/12 flex flex-col-reverse md:flex-row flex-wrap mb-20">
          <div className="w-full md:w-1/2 flex flex-wrap flex-col justify-center xl:px-20">
            <p className="w-full text-4xl font-bold mb-10 text-gray-800">¿Qué son los servicios en la nube?</p>
            <p className="mb-3">
              Los servicios en la nube son servicios que se utilizan a través de Internet. Es decir, no están físicamente instalados en tu ordenador. Se trata de un nuevo paradigma que surgió con el advenimiento de la World Wide Web.
            </p>
            <p className="mb-3">
              Antes de que apareciera la nube, todos los programas informáticos se instalaban en el ordenador. Los servicios en la nube son programas que se alojan en un servidor accesibles desde cualquier dispositivo conectado a Internet.
            </p>
            <p>
              Las ventajas de este tipo de servicios son evidentes, ya que su uso no está restringido a un solo equipo informático y la seguridad, capacidad de almacenamiento y recursos de la nube son mayores que los de un ordenador.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center xl:px-20">
            <img src="https://miro.medium.com/max/469/1*24oTbi-r9SXkkJjtV2_B2A.png" />
          </div>
        </div>
        <div className="w-11/12 flex flex-col-reverse md:flex-row flex-wrap mb-20">
          <div className="w-full md:w-1/2 flex items-center justify-center xl:px-20">
            <img className="w-2/4" src="/images/cloud-png.png" />
          </div>
          <div className="w-full md:w-1/2 flex flex-wrap flex-col justify-center xl:px-20">
            <p className="w-full text-4xl font-bold mb-10 text-gray-800">¿Qué es un servicio de Base de Datos en la nube?</p>
            <p className="mb-3">
              Es un servicio de suscripción basado en tarifas en el que la base de datos se ejecuta en la infraestructura física del proveedor de servicios. Los diferentes niveles de servicio suelen estar disponibles. En un acuerdo DBaaS clásico, el proveedor mantiene la infraestructura física y la base de datos, dejando al cliente administrar el contenido y la operación de la base de datos.
            </p>
            <p>
              Alternativamente, un cliente puede configurar un acuerdo de alojamiento gestionado, en el que el proveedor maneja el mantenimiento y la gestión de la base de datos. Esta última opción puede ser especialmente atractiva para las pequeñas empresas que tienen necesidades de base de datos, pero carecen de la experiencia adecuada en TI.
            </p>
          </div>
        </div>
        <div id="beneficios" className="bg-gradient-to-r from-green-400 to-blue-500 w-full text-white py-8 mb-20">
          <p className="text-4xl font-bold text-center ">Beneficios de contar con un servicio de base de datos en la nube</p>
          <div className="w-full flex justify-center my-10">
            <img className="w-1/4" src="/images/benefits.png" />
          </div>
          <div className="flex justify-center text-black">
            <div className="w-2/3 bg-white rounded-md shadow-xl p-5">
              <p className="mb-5"><strong> Mejor agilidad e innovación.</strong> Las bases de datos en la nube se pueden configurar muy rápidamente y se desactivan con la misma rapidez. Esto acelera y simplifica las pruebas, las validaciones y las operacionalizaciones de las nuevas ideas empresariales. Si la organización decide no lanzar un proyecto, basta con abandonarlo (y su base de datos) y pasar a la siguiente innovación.</p>
              <p className="mb-5"><strong>Comercialización más rápida.</strong> Cuando se utiliza una base de datos en la nube, no es necesario solicitar hardware ni esperar a que se produzcan envíos, instalaciones o configuraciones de red cuando un nuevo producto está en la cola de desarrollo. El acceso a la base de datos puede estar disponible en cuestión de minutos.</p>
              <p className="mb-5"><strong>Reducción de riesgos.</strong> Las bases de datos en la nube ofrecen numerosas oportunidades para reducir el riesgo en toda la empresa, sobre todo para los modelos DBaaS. Los proveedores de servicios en la nube pueden usar la automatización para garantizar el cumplimiento de las funciones y las mejores prácticas en materia de seguridad y reducir la probabilidad de que haya errores humanos, que son la causa principal de los tiempos de inactividad del software</p>
              <p><strong>Costes más bajos.</strong> Los modelos de suscripción de pago por uso y la escalabilidad dinámica permiten a los usuarios finales prepararse para la normalidad, subir el ritmo para la demanda máxima durante los períodos de mayor trabajo y bajarlo cuando la demanda vuelva a la normalidad. Esto es mucho más barato que mantener estas funciones de manera interna y tener que comprar servidores físicos que puedan gestionar la demanda máxima aunque solo tengan que hacerlo un par de días cada tres meses. Las empresas pueden desactivar literalmente los servicios cuando no sean necesarios, lo que supone un ahorro de dinero. También pueden reducir los costes al ejecutar iniciativas globales con inversiones marginales en infraestructura. En muchos casos, la automatización del software en la nube reemplaza el elevado coste de los administradores de bases de datos (DBA). Al no precisar de costosos recursos internos, se reducen los gastos operativos.</p>
            </div>
          </div>
        </div>
        <div id="caracteristicas" className="w-full mb-20 xl:px-20">
          <p className="text-4xl font-bold mb-10 text-center">Caracteristicas de las bases de datos como servicios en la nube</p>
          <div className="w-full flex justify-between">
            <div className="w-1/3 flex px-10">
              <div className="transform hover:scale-110 duration-300 bg-white w-full rounded-md border border-gray-300 shadow-2xl flex flex-col items-center justify-center p-5">
                <div className="flex-grow w-1/2 flex items-center">
                  <img className="w-full mb-5" src="https://www.thepowermba.com/es/wp-content/uploads/2020/02/Captura-de-pantalla-2020-02-26-a-las-10.23.38.png" />
                </div>
                <div className="text-2xl font-bold uppercase mb-5">Escalabilidad</div>
                <p className="px-5">Cuando hablamos de escalabilidad nos referimos a la cantidad de almacenamiento que tendrás a disposición. Esta variable es casi infinita en las bases de datos en la nube. Pero también es adaptativa porque dependerá de tu consumo.  Es decir, a menos que no puedas pagar las cuotas del servicio, muy probablemente tu base de datos no colapsará por falta de capacidad de almacenaje.</p>
              </div>
            </div>
            <div className="w-1/3 flex px-10">
              <div className="transform hover:scale-110 duration-300 bg-white w-full rounded-md border border-gray-300 shadow-2xl flex flex-col items-center justify-center p-5">
                <div className="flex-grow w-1/2 flex items-center">
                  <img className="w-full mb-5" src="https://www.pngitem.com/pimgs/m/485-4856410_nube-de-sincronizacin-icon-sincronizacin-png-transparent-png.png" />
                </div>
                <div className="text-2xl font-bold uppercase mb-5">Sincronización</div>
                <p className="px-5">En las bases de datos en la nube, desde que colocas una letra en la casilla de nombre hasta que finalizas el relleno del formulario, tus datos serán sincronizados y la vez duplicados. No solo se guardarán en un servidor virtual, sino que existirán copias en otros servidores para evitar pérdidas de información accidental. </p>
              </div>
            </div>
            <div className="w-1/3 flex px-10">
              <div className="transform hover:scale-110 duration-300 bg-white w-full rounded-md border border-gray-300 shadow-2xl flex flex-col items-center justify-center p-5">
                <div className="flex-grow w-1/2 flex items-center">
                  <img className="w-full mb-5" src="https://image.freepik.com/vector-gratis/big-data-center-rack-sala-servidores-proceso-ingenieria-trabajo-equipo-tecnologia-informatica-almacenamiento-nube_39422-1032.jpg" />
                </div>
                <div className="text-2xl font-bold uppercase mb-5">
                  Alta Disponibilidad
                </div>
                <p className="px-5">Cuando hablamos de escalabilidad nos referimos a la cantidad de almacenamiento que tendrás a disposición. Esta variable es casi infinita en las bases de datos en la nube. Pero también es adaptativa porque dependerá de tu consumo.  Es decir, a menos que no puedas pagar las cuotas del servicio, muy probablemente tu base de datos no colapsará por falta de capacidad de almacenaje.</p>
              </div>
            </div>
          </div>
        </div>
        <div id="adopcion" className="w-full xl:px-20 flex flex-wrap justify-center">
          <p className="w-full text-4xl font-bold text-center mb-10">Grado de adopción tienen las empresas al contar o contratar este tipo
de servicio en la nube.</p>
          <div className="w-3/4 flex flex-col items-center justify-center">
            <p className="w-2/3 mb-3">IDG ha realizado un estudio sobre tendencias en cloud computing para analizar la adopción de esta tecnología en las organizaciones y principales casos de uso. Para ello se ha entrevistado a compañías que están involucradas en la planificación y administración de tecnologías cloud en sus organizaciones.</p>
            <p className="w-2/3 mb-3">Algunos indicadores que debemos destacar son:</p>
            <ol className="list-disc w-2/3">
              <li className="mb-5">Las tecnologías en la nube se han integrado en las empresas. En la actualidad, el 70% de las empresas tienen al menos una aplicación en la nube. El 75% de las empresas con más de 1.000 empleados tienen al menos una aplicación o plataforma que se ejecuta en la nube.
              <img src="https://www.hiberus.com/crecemos-contigo/wp-content/uploads/2017/09/Use-of-cloud-technology-continuously-expanding-768x432.jpg" />
              </li>
              <li className="mb-5">Los principales desafíos que enfrentan las organizaciones al adoptar tecnologías en la nube públicas es el conocimiento sobre dónde se almacenan los datos (43%), la seguridad en la nube (41%) y el bloqueo del proveedor (21%). La adopción de nubes privadas e híbridas en las organizaciones también se enfrenta a los desafíos de la seguridad en la nube y el bloqueo de proveedores.
              <img src="https://www.hiberus.com/crecemos-contigo/wp-content/uploads/2017/09/challenges-768x432.jpg" />
              </li>
            </ol>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
