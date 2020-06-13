import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[];
  /* Mais uma forma de parameto de dados para tabela read */
  displayedColumns = ['id', 'name', 'price', 'ation'];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products =>{
      this.products = products
      console.log(products);
      
    })
  }

}
