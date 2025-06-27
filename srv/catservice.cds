using { Northwindv2 } from './external/Northwindv2';
@(impl:'./catservice.js')
service Cataservice {
 
   entity Products as projection on Northwindv2.Products;
   entity Categories as projection on Northwindv2.Categories;
}