import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product

  constructor(private router: Router, private productService: ProductService, private route: ActivatedRoute) { }
  // O sinal de `+` converte para number
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id")
    this.productService.readById(id).subscribe(product => {
    this.product = product
  });
  }

  updatePoduct(): void{
    this.productService.update(this.product).subscribe(() =>{
      this.productService.showOnMensage('Atulizado com sucesso!')
      this.router.navigate(['/products'])
    });
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}