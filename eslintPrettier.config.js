// Flujo de desarrollo seguro y consistente con ESLint y Prettier

// Debemos tener ESlint de forma global:

// yarn global add eslint

// Instalar ESlint dentro de nuestro proyecto, junto con una serie de recursos que
// vamos a necesitar configurar:

// yarn add eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react

// Ahora vamos a crear el archivo de configuracion ".eslintrc" en la raiz de nuestro proyecto. (RECOMENDACION) utilizar el archivo del proyecto como referencia.

// Luego intalaremos las dependencias que nos hacen falta para cumplir con las configuraciones establecidas en el archivo anteriormente mencionado:

// yarn add prettier eslint-plugin-prettier eslint-config-prettier

// Luego de intalados vamos a proceder a crear nuestro archivo de configuracion para las dependencias de prettier.

// En la raiz del proyecto creamos ".prettierrc"

{
  "trailingComma": "es5",
  "semi": true,
  "singleQuote": true
}
