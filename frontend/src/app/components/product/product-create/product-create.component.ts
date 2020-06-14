import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  
  // atributoLegal = "Produto"

  constructor(private productService: ProductService, private router: Router) { }

  product: Product = {
    name: '',
    price: null
  }

  ngOnInit(): void {
    
  }

  createPoduct(): void {
    this.productService.create(this.product).subscribe(()=>{
      this.productService.showOnMensage('Salvo com sucesso!!!')
      this.router.navigate(['/products'])
    })

    
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
  
  // fazendoAlgo(): void {
  //   console.log("Fazendo algo");  
  // }
}
