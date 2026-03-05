/**
 * Creación de variables
 */

//Camel Case
let userName='Luis';

//Pascal Case
let UserName='María';

//Snake Case
let user_name='Eric';

//Kebap Case
let user-name='Juan';

/**
 * Var: es una variable de tipo global incluso antes de su declaración puede ser referenciadas
 * pero su valor queda como 'undefined', se puede acceder a ella desde cualquier bloque de código
 * y suelen ser utilizadas como variables estáticas. 
 */
/**
 * Let: Son variable que tienen un ámbito bloque, es decir que serán accesibles dentro del
 *  bloque del código donde se han declarado, si se intenta inicializar a una variable de este 
 * tipo el resultado será un error de referencia.
 */

/**
 * Const: Las variables declaradas const también tienen un ámbito de bloque, no se les puede reasignar 
 * los valores, es decir solo tienen un valor único, pero en el caso de ser declarado como objeto
 * sus propiedades si pueden cambiar. 
 */

//En este caso al solo declarar variable y no tener alguna función extra utilizaría el let, ya que 
//estan todas en el mismo bloque y no se necesitan por el momento.