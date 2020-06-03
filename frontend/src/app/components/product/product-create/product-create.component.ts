import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  
  // atributoLegal = "Produto"

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    
  }

  createPoduct(): void {
    this.productService.showOnMensage('Criado com sucesso!!!')
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
  
  // fazendoAlgo(): void {
  //   console.log("Fazendo algo");  
  // }
}
