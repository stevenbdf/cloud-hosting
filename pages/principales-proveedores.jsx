import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PrincipalesProveedores = () => {
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
        <div className="w-11/12 mb-10">
          <p className="text-4xl font-bold text-center mb-10">Principales proveedores de bases de datos en la nube</p>
          <div className="w-full flex flex-wrap justify-center mb-10">
            <div data-aos="fade-up" className="w-1/3 flex p-10">
              <div className="transform hover:scale-110 duration-300 bg-white w-full rounded-md border border-gray-300 shadow-2xl flex flex-col items-center justify-center p-5">
                <div className="flex-grow w-1/2 flex items-center">
                  <img className="w-full mb-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png" />
                </div>
                <div className="text-2xl font-bold uppercase mb-5">Amazon Web Services (AWS)</div>
                <p className="px-5">Es una colección de servicios de computación en la nube pública que en conjunto forman una plataforma de computación en la nube, ofrecidas a través de Internet por Amazon.com. Es usado en aplicaciones populares como Dropbox, Foursquare, HootSuite.</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="300" className="w-1/3 flex p-10">
              <div className="transform hover:scale-110 duration-300 bg-white w-full rounded-md border border-gray-300 shadow-2xl flex flex-col items-center justify-center p-5">
                <div className="flex-grow w-1/2 flex items-center">
                  <img className="w-full mb-5" src="https://yt3.ggpht.com/ytc/AAUvwnjQ_JPwSLka-OWR-0uiTQQeiqav3I8LO0YTEg_2kH4=s900-c-k-c0x00ffffff-no-rj" />
                </div>
                <div className="text-2xl font-bold uppercase mb-5">Google Cloud Platform (GCP)</div>
                <p className="px-5">Es una plataforma que es utilizada para crear ciertos tipos de soluciones a través de la tecnología almacenada en la nube y permite por ejemplo permite la creacion de instancias de bases de datos.</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="600" className="w-1/3 flex p-10">
              <div className="transform hover:scale-110 duration-300 bg-white w-full rounded-md border border-gray-300 shadow-2xl flex flex-col items-center justify-center p-5">
                <div className="flex-grow w-1/2 flex items-center">
                  <img className="w-full mb-5" src="https://www.business.com/images/rz/5aea2ba792a3a4a64d8b4576/Azure-Logo1.png" />
                </div>
                <div className="text-2xl font-bold uppercase mb-5">
                  Microsoft Azure
                </div>
                <p className="px-5">Es un servicio de computación en la nube creado por Microsoft para construir, probar, desplegar y administrar aplicaciones y servicios mediante el uso de sus centros de datos.</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="900" className="w-1/3 flex p-10">
              <div className="transform hover:scale-110 duration-300 bg-white w-full rounded-md border border-gray-300 shadow-2xl flex flex-col items-center justify-center p-5">
                <div className="flex-grow w-1/2 flex items-center">
                  <img className="w-full mb-5" src="https://pbs.twimg.com/profile_images/1234528105819189248/b6F1hk_6.jpg" />
                </div>
                <div className="text-2xl font-bold uppercase mb-5">
                  Mongo DB Atlas
                </div>
                <p className="px-5">Es la base de datos como servicio que permite implementar, utilizar y escalar una base de datos de MongoDB con tan solo unos pocos clics.</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="1200" className="w-1/3 flex p-10">
              <div className="transform hover:scale-110 duration-300 bg-white w-full rounded-md border border-gray-300 shadow-2xl flex flex-col items-center justify-center p-5">
                <div className="flex-grow w-1/2 flex items-center">
                  <img className="w-full mb-5" src="https://images-na.ssl-images-amazon.com/images/I/41QodfboFdL.png" />
                </div>
                <div className="text-2xl font-bold uppercase mb-5">
                  Oracle
                </div>
                <p className="px-5">Oracle Database es un sistema de gestión de base de datos de tipo objeto-relacional, desarrollado por Oracle Corporation.</p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="w-11/12">
          <p className="text-4xl font-bold text-center mb-10">¿Cómo desplegar una base de datos en la nube?</p>
          <p className="text-center mb-10">En esta seccion estaremos creando una base de datos SQL Server en la plataforma Microsoft Azure.</p>
          <div className="flex flex-wrap justify-center">
            <img className="w-1/6 ml-32 mb-10" src=" https://www.kevinrchant.com/wp-content/uploads/2019/04/Azure-SQL-Database.png" />
            <div className="w-10/12 px-20">
              <p className="mb-5">Se crea una base de datos en Azure SQL Database con un conjunto definido de recursos de proceso y almacenamiento. La base de datos se crea dentro de un grupo de recursos de Azure y se administra mediante un servidor SQL lógico. Siga estos pasos para crear una base de datos en blanco.</p>
              <ol className="list-decimal ml-10">
                <li className="mb-3">En el menú de Azure Portal o en la página principal , seleccione Crear un recurso .</li>
                <li className="mb-3">En la página Nuevo , seleccione Bases de datos en la sección de Microsoft Azure Marketplace y, a continuación, haga clic en SQL Database en la sección Destacados .
                  <img className="mt-3" src="https://docs.microsoft.com/es-es/azure/azure-sql/database/media/design-first-database-tutorial/create-empty-database.png" />
                </li>
                <li className="mb-3">Rellene el formulario de SQL Database con la siguiente información, como se muestra en la imagen anterior:
                  <img className="mt-3" src="/images/como-desplegar-azure/captura1.png" />
                </li>
                <li className="mb-3">
                  Haga clic en Servidor para usar un servidor existente o cree y configure un servidor nuevo. Seleccione un servidor existente o haga clic en Crear un nuevo servidor y rellene el formulario Nuevo servidor con la información siguiente:
                  <img className="mt-3" src="/images/como-desplegar-azure/captura2.png" />
                  <img className="mt-3" src="https://docs.microsoft.com/es-es/azure/azure-sql/database/media/design-first-database-tutorial/create-database-server.png" />
                </li>
                <li className="mb-3">
                  Haga clic en Seleccionar .
                </li>
                <li className="mb-3">
                  Haga clic en Plan de tarifa para especificar el nivel de servicio, el número de DTU o de núcleos virtuales y la cantidad de almacenamiento. Puede explorar las opciones del número de DTU o núcleos virtuales, y la cantidad de almacenamiento que están a su disposición para cada nivel de servicio.
                  <br />
                  <br />
                  Después de seleccionar el nivel de servicio, el número de DTU o núcleos virtuales y la cantidad de almacenamiento, haga clic en Aplicar .
                </li>
                <li className="mb-3">Introduzca una intercalación para la base de datos en blanco (para este tutorial, use el valor predeterminado). Para más información sobre las intercalaciones, vea Collations (Intercalaciones)</li>
                <li className="mb-3">Una vez completado el formulario de SQL Database , haga clic en Crear para aprovisionar la base de datos. Esta operación puede tardar unos minutos.</li>
                <li className="mb-3">En la barra de herramientas, haga clic en Notificaciones para supervisar el proceso de implementación.
                  <img src="https://docs.microsoft.com/es-es/azure/azure-sql/database/media/design-first-database-tutorial/notification.png" />
                </li>
                <li className="mb-3">
                  Se debe crear una regla de firewall de IP a nivel de servidor, que permita la conexion entre nuestra computadora ( o servidor ) con el servicio de base de datos en la nube.
                  Puedes aprender mas sobre esto haciendo click <a className="text-green-500 font-bold hover:underline" href="https://docs.microsoft.com/es-es/azure/azure-sql/database/design-first-database-tutorial#create-a-server-level-ip-firewall-rule">aqui.</a>
                </li>
                <p className="text-2xl font-bold mb-3 -ml-10">¿Cómo conectarse a la base de datos creada en Azure?</p>
                <p className="mb-3 -ml-10">Use <a className="text-green-500 font-bold hover:underline" href="https://docs.microsoft.com/es-es/sql/ssms/sql-server-management-studio-ssms">SQL Server Management Studio</a>  para establecer una conexión con la base de datos.</p>
                <li className="mb-3">Abra SQL Server Management Studio.</li>
                <li className="mb-3">En el cuadro de diálogo Conectar con el servidor , especifique la siguiente información:
                  <img className="mt-3" src="/images/como-desplegar-azure/captura3.png" />
                  <img className="mt-3" src="https://docs.microsoft.com/es-es/azure/azure-sql/database/media/design-first-database-tutorial/connect.png" />
                </li>
                <li className="mb-3">Haga clic en Opciones en el cuadro de diálogo Conectar con el servidor . En la sección Conectar con base de datos , escriba yourDatabase para conectarse a esta base de datos.
                  <img className="mt-3" src="https://docs.microsoft.com/es-es/azure/azure-sql/database/media/design-first-database-tutorial/options-connect-to-db.png" />
                </li>
                <li className="mb-3">Haga clic en Conectar . Se abre la ventana del Explorador de objetos en SSMS.</li>
                <li className="mb-3">En el Explorador de objetos , expanda Bases de datos y, después, expanda yourDatabase para ver los objetos de la base de datos de ejemplo.
                  <img className="mt-3" src="https://docs.microsoft.com/es-es/azure/azure-sql/database/media/design-first-database-tutorial/connected.png" />
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PrincipalesProveedores;