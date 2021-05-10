// Loaders de Webpack para Preprocesadores CSS

// ¿Quieres utilizar tu preprocesador favorito (como Sass, Less o Stylus) para crear los estilos en tus aplicaciones con React.js? En esta lectura aprenderás cómo implementarlos dentro de tu proyecto con Webpack.
// Configuración de tu proyecto con Sass

// Primero debemos de instalar las dependencias 
// necesarias para darle soporte a Sass dentro de nuestro proyecto:

// npm install --save-dev sass-loader node-sass

// Una vez agregadas las dependencias necesarias, debemos agregar una nueva regla a la
// configuración de Webpack en la parte de rules:

{
	test: /\.scss$/,
	loader: [
		MiniCSSExtractPlugin.loader,
		'css-loader',
		'sass-loader'
	]
}

// Ahora puedes agregar archivos Sass a cada componente y tendrás el mismo resultado
// que configurar directamente CSS en tu proyecto.



